import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = fork('src/cp/files/script.js', args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2', '...']);
