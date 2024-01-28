import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const childPath = new URL('files/script.js', import.meta.url);
    const childProcess = fork(childPath, args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2', '...']);
