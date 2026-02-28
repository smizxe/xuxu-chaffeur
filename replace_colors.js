import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

const replacements = {
    '#F7F4EF': '#FBF7F0',
    '#2C3329': '#3E2723',
    '#5A6B50': '#8B6D51',
    '#E8987E': '#DAB66E',
    '#C5B382': '#A67C52'
};

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            for (const [oldColor, newColor] of Object.entries(replacements)) {
                // Find globally, case-insensitively
                const regex = new RegExp(oldColor, 'gi');
                if (regex.test(content)) {
                    content = content.replace(regex, newColor);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(srcDir);
console.log('Done replacing colors.');
