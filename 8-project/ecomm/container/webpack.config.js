const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

/*
name: not used, it's only for clarity - only for REMOTES (this is a HOST)
remotes: --> controla como webpack si cargar o no el fichero remoteEntry. 

en bootstrap.js en el import busca la carpeta products, si no la encuentra, busca en el ModuleFederationPlugin si encuentra una key que coincida, y busca el componente adentro
cuya URL está en 'products@http://localhost:8081/remoteEntry.js'
'products ---> nombre del name en el ModuleFederationPlugin de products
@http://localhost:8081/remoteEntry.js' --> dirección del fichero remoteEntry dentro de ese modulo

*/

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

  