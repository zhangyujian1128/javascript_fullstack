var http = require('http');
var server = http.createServer();

server.on('request', function (request,response) {
    //response使用Write来向客户端发送数据，但是一定要用end来结束响应数据
   if(request.url == '/')
    {
        response.write('hello')
        response.end()
        //可以写成response.end('hello')
    }
    else if(request.url == '/login'){
        response.write('login')
        response.end()
         //可以直接写成response.end('login')
    }
})

server.listen(3000, function () {
    console.log('服务器启动成功，可以通过"http://127.0.0.1:3000/"来进行访问');
});
