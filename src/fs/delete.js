import fs from 'fs/promises';
import { existsSync } from 'fs';

const remove = async () => {
    const src = new URL('files/fileToRemove.txt', import.meta.url);
    try {
        if (!existsSync(src)) {
            throw null;
        }
        await fs.rm(src);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
