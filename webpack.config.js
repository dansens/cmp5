var path = require("path");

//https://webpack.js.org/configuration/
module.exports = {
    entry: "./src/cmp.js",
    output: {
        path: path.join(__dirname, "./build"),
        library: "cmp5",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: ["jquery"],
    module: {
        loaders: [{
            test: /^.*\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /^.*\.(png|jpg)$/,
            loader: "url-loader"
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.(html|txt)$/,
            loader: "raw-loader"
        }]
    },
    plugins: []

};