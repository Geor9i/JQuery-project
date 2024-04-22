const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/dist/", // Optional: sets the base path for all the assets within your application
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    open: true,
    historyApiFallback: {
      index: "/",
      disableDotRule: true,
    },
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new HtmlWebpackPlugin({
      inject: true,
      template: "index.html",
      chunks: ["main"], // Include only the 'main' chunk
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
