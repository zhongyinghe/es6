function print(msg) {
	console.log(msg);
}

//6、属性的可枚举性和遍历
let obj = { foo: 123};
let a = Object.getOwnPropertyDescriptor(obj, 'foo')
console.log(a)

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

//解释:描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。
//有四个操作会忽略enumerable为false的属性//问:怎么忽略法?例如:for...in循环,它就遍历不出enumerable为false的属性
										 //问:怎么主动地设置enumerable属性?
//for...in循环
//Object.keys()
//JSON.stringify()
//Object.assign()

let b = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable;//false
print(b);

let c = Object.getOwnPropertyDescriptor([], 'length').enumerable;//false
print(c);


//属性的遍历:
//ES6 一共有 5 种方法可以遍历对象的属性

//总结:描述对象的enumerable属性为false时，会忽略某些属性
//属性的遍历