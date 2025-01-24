const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point of your application
  entry: "./src/index.js",

  // Output settings for the build
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the 'dist' folder before each build
  },

  // Development server configuration
  devServer: {
    static: "./dist",
    port: 3000, // You can change the port if needed
    open: true, // Automatically opens the browser
    hot: true, // Enables Hot Module Replacement
  },

  // Mode: use 'development' or 'production'
  mode: "development",

  // Loaders to handle various file types
  module: {
    rules: [
      {
        test: /\.css$/i, // CSS loader
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // Image loader
        type: "asset/resource",
      },
    ],
  },

  // Plugins for additional functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Source HTML file
      filename: "index.html", // Output HTML file in 'dist'
    }),
  ],

  // Source maps for easier debugging in development
  devtool: "inline-source-map",
};
