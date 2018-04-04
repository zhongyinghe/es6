//变量的解构赋值用途

//(1)交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log(x, y);

//(2)从函数返回多个值
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a, b, c);

function example2() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example2();

console.log(foo, bar)

//(3)函数参数的定义--解构赋值可以方便地将一组参数与变量名对应起来
function f([x, y, z]) { }
f([1, 2, 3]);

function f2({x, y, z}) {  }
f2({z: 3, y: 2, x: 1});

//(4)提取JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);

//(5)函数参数的默认值
//jQuery.ajax = function (url, {
//  async = true,
//  beforeSend = function () {},
//  cache = true,
//  complete = function () {},
//  crossDomain = false,
//  global = true,
  // ... more config
//}) {
  // ... do stuff
//};

//(6)遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}

// 获取键名
for (let [key] of map) {
	console.log(key)
}

//获取值
for (let [,value] of map) {
	console.log(value)
}

//(7)输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");
//解释:加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰