const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
    const SERVER_PATH =
        argv.mode === "production"
            ? "./src/server/server-prod.js"
            : "./src/server/server-dev.js";
    return ({
        entry: {
            server: SERVER_PATH
        },
        output: {
          path: path.join(__dirname, "dist"),
          publicPath: "/",
          filename: "[name].js"
        },
        target: "node",//令webpack得以支持node.js
        node: {
            __dirname: false,
            __filename: false
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        plugins: [new CleanWebpackPlugin()]
    })
};
