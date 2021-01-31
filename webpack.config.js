//entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //run babel with webpack
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    //sourcemaps
    devtool: 'cheap-module-eval-source-map',

    //lets webpack know where to serve public file. Alt to live-server
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}