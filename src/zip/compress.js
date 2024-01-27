import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const src = 'src/zip/files/fileToCompress.txt';
    const readStream = createReadStream(src);
    const writeStream = createWriteStream(src + '.gz');
    await pipeline(readStream, createGzip(), writeStream);
};

await compress();
