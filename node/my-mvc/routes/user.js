module.exports = {
    'get /': async (app) =>{
        const name = await app.$service.user.getName()
        ctx.body = '用户'+name
    },
    'get /detail' : app =>{
        ctx.body = '用户年龄'+
    }
}