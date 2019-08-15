const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //刪除webpack的生成檔
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //將css文件提取出來，之後獨立做插件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //壓縮css
const TerserPlugin = require("terser-webpack-plugin"); //壓縮js
var HtmlWebpackPlugin = require("html-webpack-plugin"); //生成html

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/html/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
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
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
