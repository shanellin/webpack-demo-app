const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new HtmlWebpackPlugin({
      title: "webpack-practice",
      favicon: "./src/assets/bluenet_icon_for-APP-120.png",
      template: "./src/html/template.html",
      chunks: ["main"],
      filename: "template.html"
    }),
    new HtmlWebpackPlugin({
      title: "webpack-practice2",
      favicon: "./src/assets/bluenet_icon_for-APP-120.png",
      template: "./src/html/template2.html",
      chunks: ["vendor"],
      filename: "template2.html"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
