const path = require ('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path:path.resolve(__dirname, 'main'),
        filename: "main.js",
  
    },
    plugins: [
new CleanWebpackPlugin()
    ]
}