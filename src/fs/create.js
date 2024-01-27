import fs from 'fs/promises';
import { existsSync } from 'fs';

const create = async () => {
    const src = 'src/fs/files/fresh.txt';
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
