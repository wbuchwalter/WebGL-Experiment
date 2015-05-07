var path = require('path');
module.exports = {
    entry: './app/src/main.js',
    output: {
        path: __dirname,
        filename: 'app/build/bundle.js'
    },
    module: {
        loaders: [
            {  test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
