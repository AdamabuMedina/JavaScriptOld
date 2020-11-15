// Module system CommodJS (node.js)
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "build.js",
      path: path.resolve(__dirname, 'dist')
   }
}

module.exports = {
   context: path.resolve(__dirname, "src"),
   entry: "./index.js",
   output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
   },
   plugins: [
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            use: ["babel-loader"]
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
      ]
   }
}
