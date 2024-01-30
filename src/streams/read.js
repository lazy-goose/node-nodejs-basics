import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
    const src = new URL('files/fileToRead.txt', import.meta.url);
    await pipeline(createReadStream(src), process.stdout);
};

await read();
