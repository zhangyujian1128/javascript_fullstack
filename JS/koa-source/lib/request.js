let url = require('url')
let request ={
    get url(){  //这样就可以用ctx.request.url 取值
        return this.req.url
    },
    get path(){
        return url.parse(this.req.url).pathname
    },
    get query(){
        
    }
}

module.exports = request