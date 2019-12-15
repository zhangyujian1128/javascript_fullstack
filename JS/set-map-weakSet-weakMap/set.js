//set


// var a = new Set()  //类数组,成员的值是唯一的

// Array.from([2,3,4,5,6,4,3,2]).forEach(x => {
//     a.add(x)
// });

// const items = new Set([1,2,3,4,5,5,5,5,5])
// console.log(items.size)

// [...new Set(array)]
// [...new Set('abcd')].join('')
// let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// set.add({})
//******* *对于set来说NaN是相等的，空对象是不相等的，，，原生JS则相反


// let s = new Set()
// s.add(1).add(2).add(2)
// s.has(1)   /////true
// s.delete(2) 




// const properies = {
//   'width':1,
//   'height':1
// }
 


let set = new Set(['red','green','blue'])
for(let item of set.keys()) {
  console.log(item)
}
for(let item of set.values()) {
  console.log(item)
}
for(let item of set.entries()) {
  console.log(item)
}
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)


set.forEach((value,key) => {
  console.log(key+':'+value)
})

let arr = [...set]
console.log(arr)

let testArr = [1,2,3,4,3,2];
let unique = [...new Set(testArr)]

let oSet = new Set([1,2,3])
oSet = [...oSet].map((x) => {
  x*2
})
oSet = [...oSet].filter(x => {
  x % 2 == 0
})

let b = new Set([4,3,2])
let union = new Set([...oSet,...b]) /// 并集

let intersect = new Set([...oSet.filter(x => b.has(x))]) //交集

let difference = new Set([...oSet].filter(x => !b.has(x)))
