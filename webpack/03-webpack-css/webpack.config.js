/*
  webpack.config.js    webpack的配置文件
  作用：指示webpack干哪些活（运行webpack指令时，会加载里面的配置）

  所有的构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
*/
//用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
  //webpack配置
  //入口
  entry: './src/index.js',
  //输出
  output: {
    //输出文件名
    filename: 'built.js',
    //输出路径
    //__dirname 当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  //loader的配置
  module: {
    rules: [
      //详细的loader配置
      { //匹配.css文件
        test: /\.css$/,
        //使用哪些loader进行处理
        use: [//loader由下向上使用
          //创建style标签，将js中的样式资源插入进去，添加到head中生效
          'style-loader',
          //将css文件以字符串的形式变成commonjs模块加载到js中
          'css-loader'
        ]
      },
      { //匹配.less文件
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          //将less文件转化成css文件
          'less-loader'
        ]
      }
    ]
  },
  //plugins的配置
  plugins: [
    //详细的plugins配置

  ],
  mode: 'development'   //开发模式
}

