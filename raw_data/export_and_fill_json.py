import pandas as pd
import json
import re
import os

file_path = r'C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference\Estun_Categorized_Manual.xlsx'
xl = pd.ExcelFile(file_path)

commands_db = {}

def guess_description(cmd_name, category):
    cmd_lower = cmd_name.lower()
    
    # Heuristics based on name
    if "mov" in cmd_lower:
        if "j" in cmd_lower: return {"ru": "Движение по осям (Joint)", "en": "Joint motion", "tr": "Eklem hareketi (Joint)"}
        if "l" in cmd_lower: return {"ru": "Линейное движение (Linear)", "en": "Linear motion", "tr": "Doğrusal hareket (Linear)"}
        if "c" in cmd_lower: return {"ru": "Круговое движение (Circular)", "en": "Circular motion", "tr": "Dairesel hareket (Circular)"}
        return {"ru": "Команда движения", "en": "Motion command", "tr": "Hareket komutu"}
    
    if "wait" in cmd_lower:
        if "di" in cmd_lower: return {"ru": "Ожидание цифрового входа", "en": "Wait for digital input", "tr": "Dijital giriş bekle"}
        if "time" in cmd_lower: return {"ru": "Ожидание по времени", "en": "Wait time", "tr": "Zaman beklemesi"}
        return {"ru": "Команда ожидания", "en": "Wait command", "tr": "Bekleme komutu"}
        
    if "set" in cmd_lower:
        if "do" in cmd_lower: return {"ru": "Установить цифровой выход", "en": "Set digital output", "tr": "Dijital çıkış ayarla"}
        if "ao" in cmd_lower: return {"ru": "Установить аналоговый выход", "en": "Set analog output", "tr": "Analog çıkış ayarla"}
        return {"ru": "Команда установки параметров", "en": "Parameter setting command", "tr": "Parametre ayar komutu"}
        
    if "socket" in cmd_lower:
        return {"ru": "Операция с сокетами (TCP/IP)", "en": "Socket operation (TCP/IP)", "tr": "Soket işlemi (TCP/IP)"}
        
    if category == "BitOperate":
        return {"ru": "Побитовая операция", "en": "Bitwise operation", "tr": "Bitsel işlem"}
        
    if category == "Matrix":
        return {"ru": "Матричная операция", "en": "Matrix operation", "tr": "Matris işlemi"}

    # Default fallback
    return {
        "ru": f"Инструкция {cmd_name} для робота ESTUN",
        "en": f"ESTUN instruction {cmd_name}",
        "tr": f"ESTUN komutu {cmd_name}"
    }

def guess_parameters(cmd_name):
    cmd_lower = cmd_name.lower()
    if "mov" in cmd_lower:
        return [
            {"name": "Target", "type": "Position", "desc_en": "Target position", "desc_ru": "Целевая позиция", "desc_tr": "Hedef pozisyon"},
            {"name": "Speed", "type": "Real", "desc_en": "Movement speed", "desc_ru": "Скорость движения", "desc_tr": "Hareket hızı"}
        ]
    if "do" in cmd_lower or "di" in cmd_lower:
        return [
            {"name": "Port", "type": "Int", "desc_en": "IO Port number", "desc_ru": "Номер порта I/O", "desc_tr": "IO Port numarası"},
            {"name": "Value", "type": "Bool", "desc_en": "Signal value (On/Off)", "desc_ru": "Значение сигнала", "desc_tr": "Sinyal değeri"}
        ]
    return [
        {"name": "Param1", "type": "Any", "desc_en": "Generic parameter", "desc_ru": "Общий параметр", "desc_tr": "Genel parametre"}
    ]

for sheet in xl.sheet_names:
    df = xl.parse(sheet)
    category_cmds = []
    
    for _, row in df.iterrows():
        cmd_name = str(row['Команда (Instruction)'])
        desc_ru = str(row['Описание (RU)']) if pd.notna(row['Описание (RU)']) else ""
        desc_en = str(row['Description (EN)']) if pd.notna(row['Description (EN)']) else ""
        desc_tr = str(row['Açıklama (TR)']) if pd.notna(row['Açıklama (TR)']) else ""
        params_raw = str(row['Параметры (Parameters)']) if pd.notna(row['Параметры (Parameters)']) else ""
        
        # Auto-fill missing
        guessed_desc = guess_description(cmd_name, sheet)
        if not desc_en or desc_en == "nan": desc_en = guessed_desc["en"]
        if not desc_ru or desc_ru == "nan": desc_ru = guessed_desc["ru"]
        if not desc_tr or desc_tr == "nan": desc_tr = guessed_desc["tr"]
        
        parameters = []
        if not params_raw or params_raw == "nan":
            parameters = guess_parameters(cmd_name)
        else:
            # Try to parse existing raw parameters format
            # [Secondname] Type: int ...
            blocks = params_raw.split('\n\n')
            for b in blocks:
                name_match = re.search(r'\[(.*?)\]', b)
                type_match = re.search(r'Type:\s*(\w+)', b)
                
                p_name = name_match.group(1) if name_match else "Unknown"
                p_type = type_match.group(1) if type_match else "Any"
                
                parameters.append({
                    "name": p_name,
                    "type": p_type,
                    "desc_en": f"Parameter {p_name}",
                    "desc_ru": f"Параметр {p_name}",
                    "desc_tr": f"Parametre {p_name}"
                })
                
        category_cmds.append({
            "command": cmd_name,
            "description": {
                "ru": desc_ru,
                "en": desc_en,
                "tr": desc_tr
            },
            "parameters": parameters
        })
        
    commands_db[sheet] = category_cmds

# Ensure destination exists
dest_dir = r"C:\Users\silvestr.liskin\Desktop\estun-docs-app\src\data"
os.makedirs(dest_dir, exist_ok=True)

with open(os.path.join(dest_dir, "commands.json"), "w", encoding="utf-8") as f:
    json.dump(commands_db, f, ensure_ascii=False, indent=2)

print(f"Successfully exported {sum(len(c) for c in commands_db.values())} commands to JSON!")
