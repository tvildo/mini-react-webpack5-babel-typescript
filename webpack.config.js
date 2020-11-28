const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const distFolder = path.resolve(__dirname, "./dist");

const htmlPlugin = new HtmlWebpackPlugin({
  title: "My app",
});

module.exports = {
  entry: path.resolve(__dirname, "./src/index"),
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  output: {
    path: distFolder,
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: distFolder,
  },
};
