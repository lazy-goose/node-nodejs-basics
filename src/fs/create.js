import fs from 'fs/promises';
import { existsSync } from 'fs';

const create = async () => {
    const src = new URL('files/fresh.txt', import.meta.url);
    const content = 'I am fresh and young';
    try {
        if (existsSync(src)) {
            throw null;
        }
        await fs.writeFile(src, content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
