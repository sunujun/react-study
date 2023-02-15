// eject 후, 설정 가능
module.exports = {
    presets: [
        '@babel/preset-env',
        {
            target: '> 0.25%, not dead',
            useBuiltIns: 'usage',
            corejs: 3,
        },
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    // images: './assets/images',
                    // video: './assets/video',
                    // lotties: './assets/lotties',
                },
            },
        ],
        ['babel-plugin-styled-components'],
    ],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
};
