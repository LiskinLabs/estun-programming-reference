import re
import json

with open(r"C:\Projects\estun-docs-app\raw_data\c_drive_backup\sysConfig\ErrMsg.ts", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

errors = []
for line in text.split('\n'):
    line = line.strip()
    match = re.search(r'^(\d+)\s*<CH>(.*?)</CH>\s*<EN>(.*?)</EN>', line)
    if match:
        code = match.group(1)
        ch = match.group(2)
        en = match.group(3)
        errors.append({
            "code": code,
            "ch": ch,
            "en": en
        })

with open(r"C:\Projects\estun-docs-app\src\data\errors.json", "w", encoding="utf-8") as f:
    json.dump(errors, f, ensure_ascii=False, indent=2)

print(f"Parsed {len(errors)} errors")
