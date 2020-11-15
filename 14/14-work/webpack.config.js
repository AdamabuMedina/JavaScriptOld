// Module system CommodJS (node.js)
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            use: ["babel-loader"]
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
               },
            ],
         },
      ]
   }
}
