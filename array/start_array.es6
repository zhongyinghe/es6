//1、扩展运算符...
//说明:将一个数组转为用逗号分隔的参数序列
console.log([1,2,3]) //[1,2,3]
console.log(...[1,2,3])// 1 2 3;所以两者不同

console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5

function add(x, y) {
	return x + y;
}

const numbers = [4, 38];
add(...numbers) //42

//扩展运算符与正常的函数参数可以结合使用，非常灵活
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

//替代函数的apply方法
//es5写法
function f5(x, y, z) {
	console.log(x, y, z)
}

var args5 = [1, 2, 3]
f5.apply(null, args5)

//es6写法
function f6(x, y, z) {
	console.log(x, y, z)
}

var args6 = [1, 2, 3]
f6(...args6);

//应用:求最大值
// ES5 的写法
console.log(Math.max.apply(null, [14, 3, 77]))//77
// ES6 的写法
console.log(Math.max(...[14, 3, 77]))//77

//应用:将一个数组添加到另一个数组的尾部
//es5写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1)

//es6写法
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr3.push(...arr4);
console.log(arr3)

//扩展运算符的应用
//1)复制数组
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
console.log(a1)//[2,2];复制不成功.a2并不是a1的克隆，而是指向同一份数据的另一个指针
//es5复制方法
const a15 = [1, 2];
const a25 = a15.concat();
a25[0] = 2;
console.log(a15);

//es6复制方法
const a16 = [1, 2];
const a26 = [...a16]
a26[0] = 2;
console.log(a16)

//合并数组
var ay1 = ["a", "b"];
var ay2 = ["c"];
var ay3 = ["d", "e"];

//es5合并
var ay5 = ay1.concat(ay2, ay3);
console.log(ay5);

//es6合并
var ay6 = [...ay1, ...ay2, ...ay3];
console.log(ay6)

//与解构赋值相结合
var list = [1, 2, 3, 4, 5];
//es5写法
var a = list[0];
var rest = list.slice(1);
console.log(a)
console.log(rest)

//es6写法
let [first, ...last] = list;
console.log(first);
console.log(last);

//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
//const [...butLast, last] = [1, 2, 3, 4, 5];//报错
//const [first, ...middle, last] = [1, 2, 3, 4, 5];//报错

//字符串
//说明:扩展运算符还可以将字符串转为真正的数组
console.log([...'hello']) //[ "h", "e", "l", "l", "o" ]

//实现了 Iterator 接口的对象可以转为真正的数组

//Map 和 Set 结构，Generator 函数
//它们可以转为数组
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
let keys = [...map.keys()]; //// [1, 2, 3]
console.log(keys);

const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};

console.log([...go()]);//[1, 2, 3]
//解释:上面代码中，变量go是一个 Generator 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部遍历得到的值，转为一个数组

//总结:
//将数组转为参数序列
//扩展运算符把数组展开传参
//替代apply方法:如求最大值和把一数组放进另一数组

//应用1：复制数组
//应用2:合并数组 
//应用3:与解构赋值结合进行赋值
//应用4:把字符串转为数组
//应用5:实现了 Iterator 接口的对象可以转为真正的数组
//应用6:map和set结果可以转为数组
