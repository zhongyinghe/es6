function print(msg) {
	console.log(msg)
}

function print2(x, y) {
	console.log(x, y)
}
//1、基本用法
//1)默认值
function log(x, y="world") {
	console.log(x, y);
}
log('hello'); // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

function Point(x=0, y=0) {
	this.x = x;
	this.y = y;
}
const p = new Point();
print(p)

//一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let x = 99;
function foo(p = x + 1) {
	print(p)
}

foo(); //100
x = 100;
foo(); //101

console.log("----------------------------------------")
//2)、与解构赋值默认值结合使用
function foo2({x, y = 5}) {
	print2(x, y)
}

foo2({}) //undefined 5
foo2({x: 1}) // 1 5
foo2({x: 1, y: 2})// 1 2
//foo2() // TypeError: Cannot read property 'x' of undefined
//解释:上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值
//所以foo2()会报错,因为没有提供参数
//认识:一个是解构赋值默认值，另一个是函数参数默认值

function foo3({x, y = 5} = {}) {
	print2(x, y)
}

foo3(); //undefined 5

function fetch(url, { body = '', method = 'GET', headers = {} }) {
  print(method);
}

function fetch2(url, { body = '', method = 'GET', headers = {} } = {}) {
  print(method);
}

//fetch("http://example.com");//报错
fetch("http://example.com", {});

fetch2("http://example.com");

console.log("----------------------------------------")

// 写法一
function m1({x = 0, y = 0} = {}) {
  print([x, y]);
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  print([x, y]);
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

console.log("----------------------------------------")

//3)、参数默认值的位置
function f(x = 1, y) {
  print([x, y]);
}
f() // [1, undefined]
f(2) // [2, undefined])
//f(, 1) // 报错
f(undefined, 1) // [1, 1]

// 例二
function f2(x, y = 5, z) {
  print([x, y, z]);
}

f2() // [undefined, 5, undefined]
f2(1) // [1, 5, undefined]
//f2(1, ,2) // 报错
f2(1, undefined, 2) // [1, 5, 2]

function foo4(x = 5, y = 6) {
  console.log(x, y);
}

foo4(undefined, null)//5 null
//解释:x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。


//4)、函数的length属性
//(function (a) {}).length // 1
//(function (a = 5) {}).length // 0
//(function (a, b, c = 5) {}).length // 2
//解释:上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数
//这是因为length属性的含义是，该函数预期传入的参数个数

//(function(...args) {}).length // 0
//(function (a = 0, b, c) {}).length // 0
//(function (a, b = 1, c) {}).length // 1
//解释:如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

console.log("----------------------------------------")

//5)、作用域
var x_z = 1;

function f_z(x, y = x) {
	print(y);
}
f_z(2);

let xx = 1;
function ff(yy = xx) {
	let xx = 2;
	print(yy);
}
ff();
//解释:这个作用域里面，变量xx本身没有定义，所以指向外层的全局变量xx

let zz = "outer";
function bar(func = () => zz) {
	let zz = "inner";
	print(func());
}

bar();
//解释:上面代码中，函数bar的参数func的默认值是一个匿名函数，返回值为变量zz。
//函数参数形成的单独作用域里面，并没有定义变量zz，所以zz指向外层的全局变量zz，因此输出outer。

var x2 = 1;
function abc(x2, y = function(){x2 = 2;print(x2)}) {
	var x2 = 3;
	y();//2
	print(x2)
}

abc();//3
print(x2);//1
//解释:如果将var x2 = 3的var去除，函数abc的内部变量x2就指向第一个参数x2，
//与匿名函数内部的x2是一致的，所以最后输出的就是2，而外层的全局变量x2依然不受影响。

//6)、应用
//说明:利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
  throw new Error('Missing parameter');
}

function bcd(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

//bcd();// Error: Missing parameter
//解释:可以将参数默认值设为undefined，表明这个参数是可以省略的。

//总结:默认值要放在后面;
//要认识解构赋值的默认值和函数默认值的区别
//作用域在没有传值的情况下会使用外部的全局变量
//应用是可以按照要求进行设计默认值,必须的、给定默认值的，没有默认值抛异常的