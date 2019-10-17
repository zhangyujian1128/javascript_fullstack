-任何函数都有prototype属性，它的值是对象，key=>function(){

}
-任何对象都是_proto_,指向构造函数的prototype属性
JS的面向对象，类和实例的关系，不是父子关系，没有血缘
基于原型的
-new的过程 构造函数 被执行，创造一个this 指向对象
加了属性 对象的_proto_属性 找到原型链上的方法
cache instanceof LRUCache
JS中没有类的概念，LRUCache也是对象