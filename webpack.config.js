const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), //Files output folder
        filename: "bundle.js" //Bundled files. The file where all files are bundled to
    },

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, //If encounters .js or .jsx file then use babel-loader to handle the file
                exclude: /node_modules/, //We don't need to transpile node_modules
                use:{
                    loader:  "babel-loader"
                }
            },

            {
                test: /\.css$/, //Same for .css files
                use: [ "style-loader", "css-loader"] //these are ecexuted in order from the end: css-loader ->  style-loader -> output, or sass-loader -> css-loader ->  style-loader -> output
                
            }
        ]
    },
    plugins: [ new HtmlWebPackPlugin({ template: "./src/index.html" })] //This handles the html template
};