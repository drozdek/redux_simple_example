const path = require("path");

module.exports = {
  // entry: "./src/indexredux.js",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  mode: "development"  
};
