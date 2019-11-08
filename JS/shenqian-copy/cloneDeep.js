// function cloneShallow(source){
//     var target = {}
//     for (var key in source){
//         if (Object.prototype.hasOwnProperty.call(source, key)){
//             target[key] = source[key]
//         }
//     }
//     return target
// }

function cloneDeep(source){
    var target = {}
    for (var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)){
            if (typeof source[key] === 'object'){
                target[key] =cloneDeep(source[key])
            }else{
                target[key] = source[key]
            }
        }
    }
    return target
}
let a = {
    name: 'wn',
    book:{
        title: "you don't konw JS",
        price: '45'
    }
}
b = cloneDeep(a)
console.log(b)
a.name = '蜗牛'
a.book.price = '55'

