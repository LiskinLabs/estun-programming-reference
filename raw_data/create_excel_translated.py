import re
import os
import pandas as pd
from deep_translator import GoogleTranslator
import time

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

def safe_translate(translator, text):
    if not text:
        return ""
    for _ in range(3):
        try:
            return translator.translate(text)
        except Exception as e:
            time.sleep(1)
    return text

def process_cfg(files):
    instructions = []
    ru_translator = GoogleTranslator(source='auto', target='ru')
    tr_translator = GoogleTranslator(source='auto', target='tr')
    
    for filename in files:
        if not os.path.exists(filename): continue
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        para_blocks = re.finditer(r'([a-zA-Z0-9_]+)_Para\s*=\s*\{(.*?)\}', content, re.DOTALL)
        for count, match in enumerate(para_blocks):
            inst_name_base = match.group(1)
            block_content = match.group(2)
            
            secondname_match = re.search(r'\{_name="Secondname"[^}]+_init="([^"]+)"[^}]+_comm\s*=\s*"([^"]+)"', block_content)
            
            inst_name = secondname_match.group(1) if secondname_match else inst_name_base
            inst_desc_raw = secondname_match.group(2) if secondname_match else ""
            
            inst_desc_en = extract_en(inst_desc_raw)
            inst_desc_ch = extract_ch(inst_desc_raw)
            
            # Translate descriptions
            inst_desc_ru = safe_translate(ru_translator, inst_desc_en)
            inst_desc_tr = safe_translate(tr_translator, inst_desc_en)
            
            params = re.findall(r'\{_name="([^"]+)"(?:[^}]+_desc\s*=\s*"([^"]+)")?(?:[^}]+_type="([^"]+)")?[^}]*\}', block_content)
            
            param_list = []
            for p in params:
                if p[0] != "Secondname":
                    p_desc_en = extract_en(p[1]) if p[1] else ""
                    p_type = p[2] if p[2] else ""
                    
                    if p_desc_en:
                        p_desc_ru = safe_translate(ru_translator, p_desc_en)
                        p_desc_tr = safe_translate(tr_translator, p_desc_en)
                        param_list.append(f"[{p[0]}] Type: {p_type}\n  EN: {p_desc_en}\n  RU: {p_desc_ru}\n  TR: {p_desc_tr}")
                    else:
                        param_list.append(f"[{p[0]}] Type: {p_type}")
                        
            instructions.append({
                "Команда (Instruction)": inst_name,
                "Описание (RU)": inst_desc_ru,
                "Description (EN)": inst_desc_en,
                "Açıklama (TR)": inst_desc_tr,
                "Параметры (Parameters)": "\n\n".join(param_list)
            })
            
            if count % 10 == 0:
                print(f"Processed {count} instructions...")

    return instructions

if __name__ == "__main__":
    folder = r"C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference"
    files = [os.path.join(folder, "configTable.cfg"), os.path.join(folder, "usertable.cfg")]
    
    print("Starting parsing and translation...")
    instructions = process_cfg(files)
    
    df_inst = pd.DataFrame(instructions)
    
    out_path = os.path.join(folder, "Estun_Multilingual_Manual.xlsx")
    with pd.ExcelWriter(out_path) as writer:
        df_inst.to_excel(writer, sheet_name="Instructions", index=False)
        
    print(f"DONE")
