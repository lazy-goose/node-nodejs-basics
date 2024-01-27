import fs from 'fs/promises';
import { existsSync } from 'fs';

const list = async () => {
    const src = 'src/fs/files';
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
