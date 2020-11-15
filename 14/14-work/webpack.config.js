// Module system CommodJS (node.js)
const path = require('path');

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "build.js",
      path: path.resolve(__dirname, "dist")
   }
}

module: {
   rules: [
      {
         test: /\.js$/,
         use: ["babel-loader"]
      }
   ]
}