import fs from 'fs/promises';
import { existsSync } from 'fs';

const rename = async () => {
    const src = new URL('files/wrongFilename.txt', import.meta.url);
    const dst = new URL('files/properFilename.md', import.meta.url);
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
