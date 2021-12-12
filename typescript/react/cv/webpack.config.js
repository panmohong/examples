const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const token =
  Math.random().toString(36).slice(2).padEnd(11, '0') +
  Date.now().toString(36).padStart(10, 'x');
console.info(token);

/**
 * @returns {webpack.Configuration}
 */
module.exports = (_, { mode }) => ({
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 2022,
  },
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  stats: {
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.GITHUB_SHA':
        mode === 'development'
          ? JSON.stringify('dev')
          : JSON.stringify(process.env.GITHUB_SHA),
      'process.env.BUILD_HASH':
        mode === 'development' ? JSON.stringify('') : JSON.stringify(token),
    }),
  ],
});
