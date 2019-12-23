var Koa = require('koa');
var Router = require('koa-router');
const koaStatic = require('koa-static')
 
var app = new Koa();
var router = new Router();

router.get('/app1.js',async(ctx) =>{
    console.log('app1.js 请求');
    const fs = require('fs');
    const content = fs.readFileSync('./app1.js','utf8');
    const time = Date.now() + 1000 * 30;    //30s之后
    ctx.set('cache-control','public,max-age=30');   //30s a => ServerA => ServerB
    ctx.body = content;
})
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
    //.use(koaStatic(__dirname));     把磁盘上的文件路径映射为网络url
                                    //app1.js localhost:8090/app1.js

app.listen(9090,()=>{
    console.log(9090);
})