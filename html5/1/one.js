// var a
// for(a = 1; a < 10 ; a++){
//     setTimeout(function(){
//         console.log(a);
//     },2000)
// }
// if(true) {
//     let a = 1;
//     console.log(this)
// }
// console.log(a)


// for(let a = 1; a < 11; a++){
//     console.log(a)
// }


// var a = 99; // 全局变量a
// f(); // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。
// console.log(a); // a=>99, 此时是全局变量的a
// function f() {
// console.log(a); // 当前的a变量是下面变量a声明提升后，默认值undefined
// var a = 10;
// console.log(a); // a ⇒ 10
// }

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');

// setTimeout(function() {
//     console.log('timeout1');
// })

// new Promise(function(resolve) {
//     console.log('promise1');
//     for(var i = 0; i < 1000; i++) {
//         i == 99 && resolve();
//     }
//     console.log('promise2');
// }).then(function() {
//     console.log('then1');
// })

// console.log('global1');

// golb1 
// glob1_promise
// glob2_promise
// 
// console.log('golb1');

// setTimeout(function() {
//     console.log('timeout1');
//     process.nextTick(function() {
//         console.log('timeout1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout1_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout1_then')
//     })
// })

// setImmediate(function() {
//     console.log('immediate1');
//     process.nextTick(function() {
//         console.log('immediate1_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate1_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate1_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })

// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })

// setTimeout(function() {
//     console.log('timeout2');
//     process.nextTick(function() {
//         console.log('timeout2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout2_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout2_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob2_nextTick');
// })

// new Promise(function(resolve) {
//     console.log('glob2_promise');
//     resolve();
// }).then(function() {
//     console.log('glob2_then')
// })

// setImmediate(function() {
//     console.log('immediate2');
//     process.nextTick(function() {
//         console.log('immediate2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate2_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate2_then')
//     })
// })

// function test(arg){
//     // 1. 形参 arg 是 "hi"
//     // 2. 因为函数声明比变量声明优先级高，所以此时 arg 是 function
//     console.log(arg);
//     var arg = 'hello'; // 3.var arg 变量声明被忽略， arg = 'hello'被执行
//     function arg(){
//     　　console.log('hello world')
//     }
//     console.log(arg);
// }
// test('hi');

// let a = 10, 
//     fn, // 1、进入全局上下文环境
//     bar = function(x) {
//       let b = 5
//       fn(x + b) // 3、进入fn函数上下文环境
//     }
//     fn = function(y) {
//     let c = 5
//     console.log(y + c)
//     }
 
//  bar(10) 

// var array = ['b','c','d','e'];
// array.push('f');
// array.pop();
// array.shift();
// let a = array.indexOf('c');
// let b = array.slice(0);
// console.log(a)
// console.log(b)

// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for (var x of a) { // 遍历Array
//     console.log(x);
// }
// for (var x of s) { // 遍历Set
//     console.log(x);
// }
// for (var x of m) { // 遍历Map
//     console.log(x[0] + '=' + x[1]);
// }

// var a = ['A', 'B', 'C'];
// a.forEach(function (index) {
//     console.log(index);
// });

// var myArray=[1,2,4,5,6,7]
// myArray.name="数组";
// myArray.forEach(function(value, i){
//     console.log(`${i}+${value}`)
// })

// var name = 'a';
// var object = {
//     name: 'b',
//     getNameFunc : function(){
//         var name = 'c'
//         return function(){
//             var name = 'd'
//             return this.name;
//         }
//     }
// }

// console.log(object.getNameFunc()())

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         function getAgeFromBirth() {
           
//             console.log(this.getNum());
//         }
//         getAgeFromBirth()
//     }
// };
// xiaoming.age();

// var name = 'window';
// var obj = {
//     name: 'object',
//     getName: function(){
//         name='abc'
//         var that = this
//         return function(){
//             return that.name
//         }
//     }
// }

// console.log(obj.getName()())

// var now = new Date();
// console.log(now.getMinutes());
// now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
// now.getFullYear(); // 2015, 年份
// now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
// now.getDate(); // 24, 表示24号
// now.getDay(); // 3, 表示星期三
// now.getHours(); // 19, 24小时制
// now.getMinutes(); // 49, 分钟
// now.getSeconds(); // 22, 秒
// now.getMilliseconds(); // 875, 毫秒数
// now.getTime(); // 1435146562875, 以number形式表示的时间戳

// function person2() {
//     this.name = "小连";
//     this.addnum = function () {
//       console.log(22);
//     };
//   }
//   var p2 = new person2();
//   console.log(p2.name);
//   p2.addnum();
//   // 创建一个构造函数
// function person1() {}
// // 在该构造函数的原型prototype上面定义一个属性或方法
// person1.prototype.username = "小明";
// person1.prototype.addnum = function () {
//   console.log(23);
// };
// var p1 = new person1();
// console.log(p1.username);
// p1.addnum();

//   ————————————————
//   版权声明：本文为CSDN博主「小也同学」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
//   原文链接：https://blog.csdn.net/qq_37734787/java/article/details/106666159

// function person2() {
//     this.name = "小连";
//     this.addnum = function () {
//       console.log(22);
//     };
// }
//   var p2 = new person2();
//   console.dir(p2);
//   console.dir(person2);
//   console.log("---");
//   console.log(p2.__proto__);
//   console.log(person2.prototype);
//   console.log(p2.__proto__ === person2.prototype);

// for(var a=0 ; a<10;a++){
//     setTimeout(()=>{
//         console.log(a)
//     },0)
// }

// setTimeout(function() {
//     console.log(1)
// }, 0);
// new Promise(function(resolve, reject) {
//     console.log(2)
//     for(var i = 0; i < 10000; i++) {
//         if(i === 800) {
//             console.log(10)
//         }
//         i == 9999 && resolve();
//     }
//     console.log(3)
// }).then(function() {
//     console.log(4)
// })
// setTimeout(function() {
//     console.log(9);
//     new Promise(function(resolve) {
//         console.log(7);
//         resolve();
//     }).then(function() {
//         console.log(8)
//     })
// }, 0);
// console.log(5);
// //最后巩固一下

// console.log('global');

// for(var i =1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
//     console.log(i)
// }

// new Promise((resolve)=>{
//     console.log('promise1')
//     resolve()
// }).then(()=>{
//     console.log('then1')
// })

// setTimeout(()=>{
//     console.log('timeout2')
//     new Promise((resolve)=>{
//         console.log('timeout2_promise')
//         resolve()
//     }).then(()=>{
//         console.log('timeout_then')
//     })
// },1000)
// var a = function () {
//     console.log(11111)
// }
// a()
// window.a  = function() {

// }
// {
//     a:function() {

//     }
// }
// console.log(a);
// var a  = {
//     b:1
// }
// c = a;
// console
// a.toString

// var listA= [ { name: '李四', userId: '101', project: '语文', prjCode: 'AP001' },
//     { name: '李四', userId: '101', project: '数学', prjCode: 'AP002'},
//     { name: '王五', userId: '102', project: '数学', prjCode: 'AP002'},
//     { name: '王五', userId: '102', project: '英语', prjCode: 'AP003' },
//     { name: '张三', userId: '103', project: '语文', prjCode: 'AP001'}
//     ];

//     let a = function(array){
//         let listName = []; 
//         let number = [];
//         for(let i=0 ; i<array.length ; i++){
//             if(listName.findIndex(array[i].name) !== -1 ){
//             listName.push(array[i].name)
//             number.push(i) 
//             }
//         }
//         let obj = map(listName,array[number])
//         return  obj;
//     }
//         a(listA)

// var a = 2;
// function show(){
//     a++;
//     console.log(a);
// }

// show();
// show();


//冒泡排序法   排序方法1
// var arr1 = [14,23,11,21,34,21]; //由小到大排列
// function sort(arr){
//     // for(let i = 0; i < (arr.length - 1); i++){
//     //     for(let j = 0; j < arr.length-1; j++){
//     //         if(arr[j] > arr[j+1]){
//     //             let temp = arr[j+1];
//     //             arr[j+1] = arr[j];
//     //             arr[j] = temp;
//     //         }
//     //     }
//     // }
//     for(let i = 0; i < arr.length - 1;i++){
//         for(let j = i+1;j < arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr)
// }
// sort(arr1)
//show()

// var sort = function(){
//     console.log(1)
// }
// sort();

var sort = function(){
    setTimeout(()=>{
        console.log('abc')
    },3000)
}
sort();




