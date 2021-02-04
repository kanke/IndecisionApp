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
        }, /*run css with webpack
            {
                test: /\.css$/,
                //allows us to specify an array of loaders
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },*/
        //run scss with webpack
        {
             test: /\.scss$/,
             //allows us to specify an array of loaders
             use: [
                'style-loader',
                 'css-loader',
                 'sass-loader'
             ]
        }],

    },
    //sourcemaps - Helps you track errors In app
    devtool: 'cheap-module-eval-source-map',

    //lets webpack know where to serve public file. Alt to live-server
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}