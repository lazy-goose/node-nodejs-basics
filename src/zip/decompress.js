import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const src = 'src/zip/files/fileToCompress.txt';
    const readStream = createReadStream(src + '.gz');
    const writeStream = createWriteStream(src);
    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();
