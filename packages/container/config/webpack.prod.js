const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js' // Asegura que el nombre del fichero sea así por temas de cache
    },
    plugins: [
        new ModuleFederationPlugin({
           name: "container",
           remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
           },
           shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)