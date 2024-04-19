const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

/*
EN REMOTE
Module federation plugin
bundlea el js file en un main.js que tiene todo el js y sus dependencias

Y genera un second set of files:

nuestro remoteEntry -> tiene una lista de los otros ficheros usados y como usarlos - mapa del proyecto
src_index.js -> el index que se ve en pantalla
faker.js -> dependencia que se puede cargar en pantalla

--------------------------
EN HOST
Fichero bootstrap.js --> hace saber a webpack que antes de ejecturar 
index tiene que ir a buscar info al fichero bootstrap y por ende a products. Da tiempo para eso porque lo convierte en código asíncrono.
Hace un import('bootstrap').then() cuando lo convierte a string 

Si hago import('products/ProductsIndex'); --> es lo mismo y no necesito un fichero alternativo
*/


/*
MOUNT FUNCTION
Cuando exporto una funcion mount desde bootstrap necesito que webpack referencie al fichero bootstrap, no al fichero index porque ahí es donde está
exportada la función
*/

module.exports = {
    mode: 'development', 
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
              './ProductsIndex': './src/bootstrap',
            },
            shared: ['faker']
          }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};