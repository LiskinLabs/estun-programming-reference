import pandas as pd
file_path = r'C:\Users\silvestr.liskin\Desktop\Estun_Programming_Reference\Estun_Categorized_Manual.xlsx'
df = pd.read_excel(file_path, sheet_name='Movement')
print(df.head(2).to_dict('records'))
