module.exports = {
    reactStrictMode: false,
    output: 'standalone',
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },
};