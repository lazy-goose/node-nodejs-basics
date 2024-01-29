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
            const string = reverseString(chunk.toString().trim())
            callback(null, string + '\n');
        },
    });
    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
