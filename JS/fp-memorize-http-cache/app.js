var Koa = require('koa');
var Router = require('koa-router');
const koaStatic = require('koa-static');
const mb5 = require('md5');
 
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
 
// 把 磁盘上的文件路径 映射为 网络url
// app.js localhost:9090/app.js
router.get('/app1.js',async(ctx) =>{
  console.log('app1.js 请求');
  // console.log(ctx)
  const fs = require('fs');
  const content = fs.readFileSync('./app1.js','utf8');
  const stat = fs.statSync('./app1.js');
  const etag = mb5(content);
  const time = Date.now() + 1000 * 30;    //30s之后
  if(ctx.req.headers['if-none-match'] === etag){
    ctx.status = 304
    ctx.body = ''
    return;
  }
  if(ctx.req.headers['if-modified-since'] === stat.mtime){
    ctx.status = 304;
    ctx.body = '';
    return;
  }
  ctx.set('cache-control','public,max-age=30');   //30s a => ServerA => ServerB
  ctx.set('Etag', etag);
  ctx.set('Last-Modified',stat.mtime);
  ctx.body = content;
})

app.use(router.routes())
    .use(router.allowedMethods())
    //.use(koaStatic(__dirname));     把磁盘上的文件路径映射为网络url
                                    //app1.js localhost:9090/app1.js

app.listen(9090,()=>{
    console.log(9090);
})