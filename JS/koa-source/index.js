// let http = require('http');

// let server = http.createServer((req,res)=>{
//     res.end('helloworld')
// })

// server.listen(3000,() =>{
//     console.log('服务跑起来了')
// })

// const koa = require('koa');
// const app = new Koa();

// app.use((ctx, next)=>{
//     ctx.body = 'helloworld？'
// })
// app.listen(3000, ()=>{
//     console.log('跑')
// })

let myKoa = require('./lib/application')
let app = new myKoa()
app.use((ctx)=>{
    // console.log(ctx.req.url)
    // console.log(ctx.request.req.url)
    // console.log(ctx.response.req.url)
    // console.log(ctx.request.url)
    // console.log(ctx.response.url)
    // console.log(ctx.url)
    // console.log(ctx.path)
})
app.listen(3000, ()=>{
    console.log('跑')
})