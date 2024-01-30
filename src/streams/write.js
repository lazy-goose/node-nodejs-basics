import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    const dst = new URL('files/fileToWrite.txt', import.meta.url);
    await pipeline(process.stdin, createWriteStream(dst));
};

await write();
