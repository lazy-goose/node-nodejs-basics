import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
    const reverseString = (string) => string.split('').reverse().join('');
    let transformStream;
    /* Using generator function */
    transformStream = async function* (source) {
        source.setEncoding('utf8');
        for await (const stringChunk of source) {
            yield await reverseString(stringChunk);
        }
    };
    /* Using Transform Stream */
    transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseString(chunk.toString()));
        },
    });
    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
