// 'use strict';

// let path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: './js/main.js',
//     output: {
//         filename: 'bundle.js',
//         path: __dirname + '/dist/js'
//     },
//     watch: true,

//     devtool: "source-map",

//     module: {}
// };

'use strict';

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './js/main.js',
        bundle2: './js/services.js',
        contacts:'./js/contacts.js',
        about: './js/about_us.js'
    },
    output: {
        filename: '[name].js', // Используем [name] для динамического имени файла на основе ключа entry
        path: path.resolve(__dirname, 'dist/js'),
    },
    watch: true,
    devtool: 'source-map',
    module: {}, // Добавьте здесь конфигурацию для модулей, если она требуется.
};