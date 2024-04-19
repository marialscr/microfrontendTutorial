const HtmlWebpackPlugin = require('html-webpack-plugin');
/*

Babel procesa los ficheros js y jsx, transforma ES6 y otros años y los transforma en ES5 para el navegador y agrega más características 

*/

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react', '@babel/preset-env'],
                        plugins: [ '@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html'
        })
    ]
};