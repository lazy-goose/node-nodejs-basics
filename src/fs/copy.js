import fs from 'fs/promises';
import { existsSync } from 'fs';

const copy = async () => {
    const src = new URL('files', import.meta.url);
    const dst = new URL('files_copy', import.meta.url);
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
