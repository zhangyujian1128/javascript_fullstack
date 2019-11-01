const Events=require('events');
const ev=new Events();
//订阅
ev.on('price',()=>{
    console.log('123');
})
//发布
ev.emit('price');