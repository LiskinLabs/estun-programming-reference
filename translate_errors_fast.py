import json
import time
from deep_translator import GoogleTranslator

def batch_translate(texts, target_lang):
    translator = GoogleTranslator(source='en', target=target_lang)
    results = []
    
    current_batch = []
    current_len = 0
    
    def process_batch():
        nonlocal current_batch, current_len
        if not current_batch:
            return
        combined = " ||| ".join(current_batch)
        try:
            translated = translator.translate(combined)
            parts = [p.strip() for p in translated.split("|||")]
            if len(parts) == len(current_batch):
                results.extend(parts)
            else:
                print(f"Batch mismatch: {len(parts)} vs {len(current_batch)}")
                results.extend(["" for _ in current_batch])
        except Exception as e:
            print(f"Batch translation error: {e}")
            results.extend(["" for _ in current_batch])
            
        current_batch = []
        current_len = 0

    for text in texts:
        text_len = len(text) + 5
        if current_len + text_len > 4000:
            process_batch()
            time.sleep(1) # delay to avoid rate limit
        current_batch.append(text)
        current_len += text_len
        
    if current_batch:
        process_batch()
        
    return results

def main():
    print("Loading errors.json...")
    with open('src/data/errors.json', 'r', encoding='utf-8') as f:
        errors = json.load(f)
    
    # We will only translate those lacking ru or tr
    texts_to_translate_ru = []
    texts_to_translate_tr = []
    
    for err in errors:
        en_text = err.get('en', '')
        texts_to_translate_ru.append(en_text if 'ru' not in err and en_text else "SKIP")
        texts_to_translate_tr.append(en_text if 'tr' not in err and en_text else "SKIP")

    print(f"Translating RU...")
    ru_translated = batch_translate(texts_to_translate_ru, 'ru')
    
    print(f"Translating TR...")
    tr_translated = batch_translate(texts_to_translate_tr, 'tr')
    
    for i, err in enumerate(errors):
        if texts_to_translate_ru[i] != "SKIP":
            err['ru'] = ru_translated[i] if i < len(ru_translated) and ru_translated[i] else err.get('en', '')
            
        if texts_to_translate_tr[i] != "SKIP":
            err['tr'] = tr_translated[i] if i < len(tr_translated) and tr_translated[i] else err.get('en', '')

    with open('src/data/errors.json', 'w', encoding='utf-8') as f:
        json.dump(errors, f, ensure_ascii=False, indent=2)
        
    print("Translation completed!")

if __name__ == '__main__':
    main()
