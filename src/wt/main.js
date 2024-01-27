import { Worker } from 'worker_threads';
import { cpus } from 'os';

const inWorkerNthFibonacci = async (n) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: n });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
};

const performCalculations = async () => {
    const INIT_COMPUTE = 10;
    const promises = Array.from({ length: cpus().length })
        .map((_, cpuIndex) => INIT_COMPUTE + cpuIndex)
        .map(inWorkerNthFibonacci);
    const settled = await Promise.allSettled(promises);
    const results = settled.map(({ status, value = null }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: value,
    }));

    console.log(results);
};

await performCalculations();
