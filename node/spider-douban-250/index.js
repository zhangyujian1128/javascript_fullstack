const https=require('https');
const http=require('http');
const cheerio=require('cheerio');

https.get('https://movie.douban.com/top250?start=25&filter=',(res) =>{
    let html='';
    //流的形式传输
    res.on('data',(chunk)=>{
        html +=chunk;
    })
    res.on('end',()=>{
        console.log(html);
        const $ =cheerio.load(html);
        $('li .item').each(function(){
            //拿到每一个电影
            const picUrl=$('.pic img',this).attr('src');
            const title=$('.info .title',this).text();
            const star =$('.star .rating_num',this).text();
            const inq=$('.inq',this).text();
            console.log({
                picUrl,
                title,
                star,
                inq
            })
        })
    })
})

http.createServer((req,res)=>{
    
})