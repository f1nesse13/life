const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: [path.resolve(__dirname, './src/index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '/': path.resolve(__dirname),
      '@styles': path.resolve(__dirname, './styles'),
      '@colors': path.resolve(__dirname, './styles/colors'),
      '@src': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
    mainFiles: ['index'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    // publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('./public', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
}
