import fs from 'fs/promises';
import { existsSync } from 'fs';

const rename = async () => {
    const src = 'src/fs/files/wrongFilename.txt';
    const dst = 'src/fs/files/properFilename.md';
    try {
        if (!existsSync(src)) {
            throw null;
        }
        if (existsSync(dst)) {
            throw null;
        }
        await fs.rename(src, dst);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();
