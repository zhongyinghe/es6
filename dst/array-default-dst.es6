//解构赋值允许指定默认值。
let [foo = true] = []
console.log(foo)

let [x, y = "b"] = ["a"]
console.log(x, y)

let [x1, y1 = "b"] = ["a", undefined]
console.log(x1, y1)

//只有当一个数组成员严格等于undefined，默认值才会生效
let [baz = 1] = [undefined]; //1
let [bar = 1] = [null]; //null
console.log(baz, bar)

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

function f() {
  console.log('aaa');
}

let [xx = f()] = [1];//因为x能取到值，所以函数f根本不会执行
console.log(xx)

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [x2 = 1, y2 = x2] = [];     // x=1; y=1
let [x3 = 1, y3 = x3] = [2];    // x=2; y=2
let [x4 = 1, y4 = x4] = [1, 2]; // x=1; y=2

console.log(x2,y2,x3,y3,x4,y4)

//let [x5 = y5, y5 = 1] = []; //ReferenceError: y is not defined,因为x用y做默认值时，y还没有声明

//console.log(x5, y5)