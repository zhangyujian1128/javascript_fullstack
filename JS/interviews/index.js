function Persion(name){
    this.name = name;
    return {name}
}

let p = new Persion('wn')

console.log(p)


//for in 
//1. 循环索引下标，不能直接进行几何运算
//2. 遍历的顺序可能不会按照实际数组的内部顺序进行的
//3. 使用 for in 会遍历数组的所有可枚举属性，包括原型     适合循环数组

//for of 
//1. 遍历的是数组的元素
//2. 遍历不包括数组的原型和索引





