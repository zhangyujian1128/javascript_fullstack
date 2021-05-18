
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        //处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          //图片大小小于8kb，就会被base64处理
          limit: 300*1024,
          esModule: false,
          //图片重命名取hash前十位
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        //处理html文件中的img
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }) 
  ],
  mode: 'development'
}