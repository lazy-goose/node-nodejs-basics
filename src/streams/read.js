import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
    await pipeline(
        createReadStream('src/streams/files/fileToRead.txt'),
        process.stdout
    );
};

await read();
