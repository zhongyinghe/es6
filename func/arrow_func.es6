function print(msg) {
	console.log(msg)
}
//箭头函数
//说明:ES6 允许使用“箭头”（=>）定义函数。
var f = v => v;
print(f(5))

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
var a = () => 5
print(a())

let sum = (num1, num2) => num1 + num2
print(sum(2,8))

//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回

let sub = (num1, num2) => {
	num1 = num1 * 10
	return num1 - num2
}

print(sub(5, 20))//30

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
//let getTempItem = id => { id: id, name: "Temp" };//报错
let getTempItem = id => ({ id: id, name: "Temp" });//正确
print(getTempItem(2))

let foo = () => ({ a: 1 });//如果不加园括号,也不报错，只是输出undefined
print(foo())

//如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
let fn = () => void doesNotReturn();//不是很理解。它一般用在什么地方呢?//已经解决
let fn2 = () => void print("no return data")//没有返回值的就这样处理
fn2()//no return data

//箭头函数可以与变量解构结合使用。
const full = ({first, last}) => first + ' ' + last;//这里要求一定要传对象，并且要求有first和last属性,否则报错

var p = {
	first: 'hello',
	last: 'world'
}
print(full(p))//hello world;如果这里这样full({'hello', 'world'})是要报错的

//箭头函数使得表达更加简洁。
const isEven = n => n % 2 == 0
const square = n => n * n

print(isEven(10))
print(square(10))

//箭头函数的一个用处是简化回调函数。
// 正常函数写法
/*
[1,2,3].map(function (x) {
  return x * x;
});
*/

// 箭头函数写法
let arr = [1,2,3].map(x => x * x)
print(arr)

// rest 参数与箭头函数结合的例子
const numbers = (...nums) => nums;
print(numbers(1,2,3,4,5,6))

//this对象的指向是可变的，但是在箭头函数中，它是固定的。
function myTime() {
	setTimeout(() => {
		console.log('id:', this.id);
	}, 100);
}

var id = 21;
myTime.call({id: 42})//不传值undefined,传值42;要使用call否则是undefined

//箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000); //this绑定定义时所在的作用域
  // 普通函数
  setInterval(function () {
    this.s2++; //his指向运行时所在的作用域（即全局对象）
  }, 1000);
}

//var timer = new Timer();

//setTimeout(() => console.log('s1: ', timer.s1), 3100);//3100 毫秒之后，timer.s1被更新了 3 次
//setTimeout(() => console.log('s2: ', timer.s2), 3100);//timer.s2一次都没更新。
// s1: 3
// s2: 0

//this实质:this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
//正是因为它没有this，所以也就不能用作构造函数

//应用:长期以来，JavaScript 语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。箭头函数”绑定”this，很大程度上解决了这个困扰。
print('------------------------')
//嵌套的箭头函数
const plus1 = a => a + 1;
const mult2 = a => a * 2;
print(mult2(plus1(10)))

//总结:基本含义
//有多个语句
//直接返回一个对象
//与解构变量结合使用
//表达式简洁，简化回调函数
//this的指向固定
//嵌套使用