import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');
    await pipeline(
        createReadStream('src/hash/files/fileToCalculateHashFor.txt'),
        hash
    );
    const digestedHash = hash.digest('hex');

    console.log(digestedHash);
};

await calculateHash();
