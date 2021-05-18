const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      //loader的配置
    ]
  },
  plugins: [
    //plugins的配置 html-webpack-plugin 创建一个空的html文件，自动引入打包输出的所有资源
    //
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}