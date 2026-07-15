const fs = require('fs');

const text = fs.readFileSync('raw_data/c_drive_backup/sysConfig/ErrMsg.ts', 'utf8');

const errors = [];
const lines = text.split('\n');
lines.forEach(line => {
    line = line.trim();
    const match = line.match(/^(\d+)\s*<CH>(.*?)<\/CH>\s*<EN>(.*?)<\/EN>/);
    if (match) {
        errors.push({
            code: match[1],
            ch: match[2],
            en: match[3]
        });
    }
});

fs.writeFileSync('src/data/errors.json', JSON.stringify(errors, null, 2));
console.log(`Parsed ${errors.length} errors`);
