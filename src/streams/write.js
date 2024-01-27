import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    await pipeline(
        process.stdin,
        createWriteStream('src/streams/files/fileToWrite.txt')
    );
};

await write();
