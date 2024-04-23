const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["*.html"],
    compress: true,
    open: true,
    hot: true, // Enable HMR
    historyApiFallback: {
      index: "/",
      disableDotRule: true,
    },
  },
  devtool: "eval-source-map",
  resolve : {
    alias: {
      "jquery-ui": "jquery-ui/dist/jquery-ui.js",      
      modules: path.join(__dirname, "node_modules"),
    }
  },
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eat|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
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
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
