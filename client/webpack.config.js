const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: { path: path.resolve(__dirname, '../', 'dist'), filename: 'bundle.js', clean: true },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: { static: { directory: path.join(__dirname, 'public') }, port: 3000, open: true, hot: true, historyApiFallback: true }
};
