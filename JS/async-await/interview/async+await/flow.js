//1. 回调
fs.readFile('./', (content) => {
    setTimeout(()=>{
        content += '123';
        fs.append('./', content, (err) =>{

        })
    },3000)
})

//2.Promise
Promise('./')
.then(()=>{
    content += '123';
})
.then(()=>{
    fs.append('./')
})
.then()

// co作者 TJ
es6 => generatear
co(
    function * test(){
        let c = yield fs.readFile();
        c += '123';
        let res = yield fs.append('./',c);
    }
)

//3.async
async() =>{
    let c = await fs.readFile()
    c +='123';
    let res = yield fs.append('./',c); 
}
// 重点
(async function() {
    // await 后面 接 promise ？？？
    // 接 promise 才能够保证 顺序
    let c = await p;
    let d = await p2;
    let f = await 789
    console.log(c);
  })()
  
  // 怎么 保证 p resolve 后面代码才会执行
  // 都用 Promise.resolve 包装一层 不用判断 await、yield 后面 到底是 promise（有 then方法）还是非 promise（没有 then方法）
  Promise.resolve(p).then(() => {
    Promise.resolve(p2).then(() => {
      Promise.resolve(789).then(() => {
        console.log(c);
      })
    })
  })