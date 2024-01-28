import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const src = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
    await pipeline(createReadStream(src), hash);
    const digestedHash = hash.digest('hex');

    console.log(digestedHash);
};

await calculateHash();
