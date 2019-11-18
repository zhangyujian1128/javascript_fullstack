var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;//图片分类
var fs = require('fs');
var APP_ID = "17798912";
var APP_KEY = "yfPIM3fG438Idbr3oEngYQ0C";
var SECRET_KEY = "ffRBtL3do61XmK1PWAm0zuuKtxGyz1mR";
//内存 -> I/O
var image = fs.readFileSync('car.jpg').toString("base64");  //同步
var client = new AipImageClassifyClient(APP_ID,APP_KEY,SECRET_KEY);
client.carDetect(image)
    .then(function(result){
    console.log(result);
})
    .catch(function(err){
        console.log(err);
    })
// console.log(image);