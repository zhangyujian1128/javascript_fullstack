
const subPub={
    'price':[
        ()=>{console.log(3)},
        ()=>{console.log(4)}
    ]
}
for (let i=0;i<subPub.price.length;i++){
    console.log('---',subPub.price[i]);
    subPub.price[i]();
}
//price 对应的方法执行一遍
function foo(){
    console.log('foo');
}
//foo: [ foo ]
//在subPub 上面添加一个value为数组的key(foo)
//把foo放到数组里面去
class Events{
    constructor(){
        this.listener=[];
    }
    on(fn){
        this.listener.push(fn);
    }
    emit(){
        for(let fn of this.listener){
            fn()
        }
    }
}
const ev=new Events();
ev.on(()=>{console.log(1)})
ev.on(()=>{console.log(2)})
ev.emit();