## 静态资源
不会随着服务运行而改变的东西
html css js jpg png

请求的url 和 文件在磁盘上的 路径 一一对应起来
:8000/logo.png  -> 404 
:8888/js/home.js  -> read  -> res


比如:
nginx

file:///D:/javascript_fullstack/node/static-resource-server/index.html

浏览器 双击打开
file 协议  ./ ../ 
放到服务器上面 http 协议