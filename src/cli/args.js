const parseArgs = () => {
    const [execPath, filePath, ...cmdArgs] = process.argv;

    const args = new Map();

    let arg = '';
    let val = [];
    let i = cmdArgs.length;

    while (--i >= 0) {
        arg = cmdArgs[i];

        if (arg.startsWith('-')) {
            args.set(arg, val);
            val = [];
        } else {
            val = [...val, arg];
        }
    }

    const argsString = [...args]
        .reverse()
        .map(([name, values]) => [name.replace(/^--?/, ''), values])
        .map(([name, values]) => {
            if (values.length > 1) {
                return `${name} are [${values.join(', ')}]`;
            }
            if (values.length === 1) {
                return `${name} is ${values[0]}`;
            }
            return `${name}`;
        })
        .join(', ');

    console.log(argsString);
};

parseArgs();
