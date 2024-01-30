const parseEnv = () => {
    const varsString = Object.entries(process.env)
        .filter(([name]) => name.startsWith('RSS_'))
        .map(([name, value]) => `${name}=${value}`)
        .join('; ');

    console.log(varsString);
};

parseEnv();
