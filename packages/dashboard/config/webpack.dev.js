const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSon = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8084/",
  },
  devServer: {
    port: 8084,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Content-Security-Policy": "default-src 'self' *.example.com; img-src *"
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap",
      },
      shared: packageJSon.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

