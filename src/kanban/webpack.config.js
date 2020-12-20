const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    style: './src/style/style.css',
    main: './src/works-tasks/kanban.js',
    dropdawn: '/src/dropdawn/dropdawn.js',
    back: './src/works-tasks/back/back.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/html/kanban.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
