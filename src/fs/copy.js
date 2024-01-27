import fs from 'fs/promises';
import { existsSync } from 'fs';

const copy = async () => {
    const src = 'src/fs/files';
    const dst = 'src/fs/files_copy';
    try {
        if (!existsSync(src)) {
            throw null;
        }
        if (existsSync(dst)) {
            throw null;
        }
        await fs.cp(src, dst, { recursive: true });
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await copy();
