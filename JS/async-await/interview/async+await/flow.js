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
    let res 
}