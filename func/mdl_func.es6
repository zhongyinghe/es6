function print(msg) {
	console.log(msg)
}
//2、rest参数
function add(...value) {
	let sum = 0;
	for (var val of value) {
		sum += val;
	}
	
	return sum;
}

print(add(2, 5, 3)) //10

function push(array, ...items) {
	items.forEach(function(item){
		array.push(item)
	});
}

var a = [];
push(a, 1, 2, 3);
print(a)

//解释:注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

print("======================================")

//3、严格模式
//说明:规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

/*
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};
*/

//解决方法:
//说明:第一种是设定全局性的严格模式，这是合法的
'use strict';

function doSomething(a, b = a) {
  // code
}

print("======================================")

//4、name属性
//函数的name属性，返回该函数的函数名。
function foo() {}
print(foo.name); // foo

var f = function () {};
print(f.name);//f

//总结:rest参数类似golang的变参
//严格模式:注意它在什么情况下不能使用严格模式及如何解决