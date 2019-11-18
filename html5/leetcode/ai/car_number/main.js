var fs = require('fs');
var AipOcrClient = require('baidu-aip-sdk').ocr; //图片识别？从图片中提取文字
var image = fs.readFileSync('./license.jpg').toString('base64'); //文件本身就是二进制文本
var APP_ID = '17799160';
var API_KEY = 'oYwhcD8iA5OB2gfxYT5OWmc2';
var SECRET_KEY = 'HMhHVeuTFNafNIfqgWWM7iIxEAigl5TZ';
var client = new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
var options = {};
client.licensePlate(image,options)
.then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err);
  })
