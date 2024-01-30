import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (Number.isInteger(workerData)) {
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
    } else {
        throw new Error(
            `Worker expected an integer number, but got: ${workerData}`
        );
    }
};

sendResult();
