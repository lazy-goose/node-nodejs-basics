import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const src = new URL('files/fileToCompress.txt', import.meta.url);
    const readStream = createReadStream(src + '.gz');
    const writeStream = createWriteStream(src);
    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
