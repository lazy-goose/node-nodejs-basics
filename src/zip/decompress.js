import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const src = new URL('files/archive.gz', import.meta.url);
    const dst = new URL('files/fileToCompress.txt', import.meta.url);
    const readStream = createReadStream(src);
    const writeStream = createWriteStream(dst);
    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
