import fs from 'fs/promises';
import { existsSync } from 'fs';

const read = async () => {
    const src = 'src/fs/files/fileToRead.txt';
    try {
        if (!existsSync(src)) {
            throw null;
        }
        const buffer = await fs.readFile(src);
        console.log(buffer.toString());
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
