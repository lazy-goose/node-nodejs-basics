import fs from 'fs/promises';
import { existsSync } from 'fs';

const list = async () => {
    const src = new URL('files', import.meta.url);
    try {
        if (!existsSync(src)) {
            throw null;
        }
        const files = await fs.readdir(src);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
