var Koa = require('koa');
var Router = require('koa-router');
const koaStatic = require('koa-static')
 
var app = new Koa();
var router = new Router();
 
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/app1.js"></script>
  </body>
  </html>
  `
});
 
app.use(router.routes())
    .use(router.allowedMethods())
    .use(koaStatic(__dirname));     //把磁盘上的文件路径映射为网络url
                                    //app1.js localhost:8090/app1.js

app.listen(8090,()=>{
    console.log(8090);
})