import pandas as pd
import os

folder = r"C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference"
file_path = os.path.join(folder, "Estun_Categorized_Manual.xlsx")

xl = pd.ExcelFile(file_path)

total_commands = 0
missing_ru = 0
missing_en = 0
missing_tr = 0
missing_params = 0

print("Missing data report:\n")

for sheet in xl.sheet_names:
    df = xl.parse(sheet)
    total_commands += len(df)
    
    # Check for NaN or empty strings
    m_ru = df['Описание (RU)'].isna() | (df['Описание (RU)'] == "")
    m_en = df['Description (EN)'].isna() | (df['Description (EN)'] == "")
    m_tr = df['Açıklama (TR)'].isna() | (df['Açıklama (TR)'] == "")
    m_p = df['Параметры (Parameters)'].isna() | (df['Параметры (Parameters)'] == "")
    
    missing_ru += m_ru.sum()
    missing_en += m_en.sum()
    missing_tr += m_tr.sum()
    missing_params += m_p.sum()
    
    if m_en.sum() > 0 or m_p.sum() > 0:
        missing_cmds = df[m_en | m_p]['Команда (Instruction)'].tolist()
        print(f"Sheet '{sheet}' has missing data in: {', '.join(map(str, missing_cmds))[:100]}...")

print(f"\nTotal commands: {total_commands}")
print(f"Missing RU: {missing_ru}")
print(f"Missing EN: {missing_en}")
print(f"Missing TR: {missing_tr}")
print(f"Missing Params: {missing_params}")
