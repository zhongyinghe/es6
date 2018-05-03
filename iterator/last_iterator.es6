function print(msg) {
	console.log(msg);
}

const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj) {
  console.log(v); // red green blue
}

arr.forEach(function (element, index) {
  console.log(element); // red green blue
  console.log(index);   // 0 1 2
});

let arr2 = [3, 5, 7];
arr2.foo = 'hello';

for (let i in arr2) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr2) {
  console.log(i); //  "3", "5", "7"
}

print('=========================');

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
  console.log(e);
}
// Gecko
// Trident
// Webkit

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262

print('=========================');

//for...in和for...of比较
let es62 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (let e in es62) {
  console.log(e);
}
// edition
// committee
// standard
/*
for (let e of es62) {
  console.log(e);
}
*/
// TypeError: es6[Symbol.iterator] is not a function

//一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
/*
for (var key of Object.keys(someObject)) {
  console.log(key + ': ' + someObject[key]);
}
*/

//另一个方法是使用 Generator 函数将对象重新包装一下
/*
function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3
*/

//总结:for... in和for...of比较
//for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型;
//for...in循环主要是为遍历对象而设计的，不适用于遍历数组
//for...in重在键

//for...of可以与break、continue和return配合使用
//for...of提供了遍历所有数据结构的统一操作接口
//for...of重在值(当然也可以有键)
