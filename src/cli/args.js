const parseArgs = () => {
    const [execPath, filePath, ...cmdArgs] = process.argv;

    const args = {};

    let argName = '';
    let argVals = [];

    for (let i = 0; i < cmdArgs.length; i++) {
        if (cmdArgs[i].startsWith('-')) {
            // Append defined argument
            if (argName) {
                args[argName] = argVals;
            }
            argName = cmdArgs[i];
            argVals = [];
        } else {
            argVals = [...argVals, cmdArgs[i]];
        }
    }

    const argsString = Object.entries(args)
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
