import re
import os
import pandas as pd

def extract_en(text):
    if not text: return ""
    m = re.search(r'<EN>(.*?)</EN>', text)
    if m: return m.group(1).strip()
    return text.strip()

def process_cfg_categories(files):
    inst_to_cat = {}
    for filename in files:
        if not os.path.exists(filename): continue
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        inst_list_match = re.search(r'InstList\s*=\s*\{(.*?)\n\}', content, re.DOTALL)
        if inst_list_match:
            inst_list_content = inst_list_match.group(1)
            blocks = re.findall(r'\{\s*"([^"]+)"\s*,\s*\{([^}]+)\}\s*\}', inst_list_content)
            for block in blocks:
                cat_name_raw = block[0]
                cat_name = extract_en(cat_name_raw)
                
                cmds_raw = block[1]
                cmds = re.findall(r'"([^"]+)"', cmds_raw)
                for cmd in cmds:
                    inst_to_cat[cmd] = cat_name

    return inst_to_cat

if __name__ == "__main__":
    folder = r"C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference"
    excel_path = os.path.join(folder, "Estun_Multilingual_Manual.xlsx")
    files = [os.path.join(folder, "configTable.cfg"), os.path.join(folder, "usertable.cfg")]
    
    print("Extracting categories...")
    inst_to_cat = process_cfg_categories(files)
    
    print("Reading excel...")
    df = pd.read_excel(excel_path)
    
    df['Category'] = df['Команда (Instruction)'].apply(lambda x: inst_to_cat.get(x, 'Other'))
    
    out_path = os.path.join(folder, "Estun_Categorized_Manual.xlsx")
    print(f"Writing to {out_path}...")
    with pd.ExcelWriter(out_path) as writer:
        for cat in df['Category'].unique():
            safe_sheet_name = re.sub(r'[\\/*?:\[\]]', '', str(cat))[:31]
            df_cat = df[df['Category'] == cat].drop(columns=['Category'])
            df_cat.to_excel(writer, sheet_name=safe_sheet_name, index=False)
            
    print("DONE")
