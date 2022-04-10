const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
module.exports = {
  entry: ['./src/main.ts', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'), // w jakim katalogu powinniśmy się znajdować  
    filename: 'main.js',
  },

  module: {
    rules: [{
        test: /.scss$/, // sprawdzamy wsyztkie pliki css
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCSSExtractPlugin(), // uzupełnić!!!!
    new ESLintWebpackPlugin(),
  ],
};