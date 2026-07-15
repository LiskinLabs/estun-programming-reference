import re
import os
import pandas as pd

def extract_en(text):
    if not text: return ""
    m = re.search(r'<EN>(.*?)</EN>', text)
    if m: return m.group(1).strip()
    return text.strip()

def extract_ch(text):
    if not text: return ""
    m = re.search(r'<CH>(.*?)</CH>', text)
    if m: return m.group(1).strip()
    return text.strip()

def process_cfg(files):
    var_types = []
    instructions = []
    
    for filename in files:
        if not os.path.exists(filename): continue
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # Extract VarTypeList up to the next ClassList or EOF
        var_list_match = re.search(r'VarTypeList\s*=\s*\{(.*?)(?=\n\w+VarClassList|\Z)', content, re.DOTALL)
        if var_list_match:
            var_content = var_list_match.group(1)
            # Find each type block: { "TypeName", ... }
            blocks = re.finditer(r'\{\s*"([^"]+)"\s*,([^}]*)\}', var_content, re.DOTALL)
            for match in blocks:
                type_name = match.group(1)
                inner_content = match.group(2)
                
                # Each field inside is like: {"int","id"}, or {"real","x","mm"},
                fields = re.findall(r'\{\s*"([^"]+)"\s*,\s*"([^"]+)"(?:,\s*"([^"]+)")?\s*\}', inner_content)
                for f in fields:
                    var_types.append({
                        "Файл": os.path.basename(filename),
                        "Категория (Type)": type_name,
                        "Поле (Field)": f[1],
                        "Тип данных (Data Type)": f[0],
                        "Ед. измерения (Unit)": f[2] if f[2] else ""
                    })

        # Parse Instructions
        para_blocks = re.finditer(r'([a-zA-Z0-9_]+)_Para\s*=\s*\{(.*?)\}', content, re.DOTALL)
        for match in para_blocks:
            inst_name_base = match.group(1)
            block_content = match.group(2)
            
            secondname_match = re.search(r'\{_name="Secondname"[^}]+_init="([^"]+)"[^}]+_comm\s*=\s*"([^"]+)"', block_content)
            
            inst_name = secondname_match.group(1) if secondname_match else inst_name_base
            inst_desc_raw = secondname_match.group(2) if secondname_match else ""
            
            inst_desc_en = extract_en(inst_desc_raw)
            inst_desc_ch = extract_ch(inst_desc_raw)
            
            params = re.findall(r'\{_name="([^"]+)"(?:[^}]+_desc\s*=\s*"([^"]+)")?(?:[^}]+_type="([^"]+)")?[^}]*\}', block_content)
            
            param_list = []
            for p in params:
                if p[0] != "Secondname":
                    p_desc = extract_en(p[1]) if p[1] else ""
                    p_type = p[2] if p[2] else ""
                    param_list.append(f"{p[0]} ({p_type}): {p_desc}")
            
            instructions.append({
                "Файл": os.path.basename(filename),
                "Команда (Instruction)": inst_name,
                "Описание (EN)": inst_desc_en,
                "Описание (Китайский)": inst_desc_ch,
                "Параметры": " | ".join(param_list)
            })

    return var_types, instructions

if __name__ == "__main__":
    folder = r"C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference"
    files = [os.path.join(folder, "configTable.cfg"), os.path.join(folder, "usertable.cfg")]
    
    var_types, instructions = process_cfg(files)
    
    df_vars = pd.DataFrame(var_types)
    df_inst = pd.DataFrame(instructions)
    
    out_path = os.path.join(folder, "Estun_Programming_Manual.xlsx")
    with pd.ExcelWriter(out_path) as writer:
        df_inst.to_excel(writer, sheet_name="Команды (Instructions)", index=False)
        df_vars.to_excel(writer, sheet_name="Типы Данных (Data Types)", index=False)
        
    print("DONE")
