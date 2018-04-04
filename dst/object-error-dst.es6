//对象解构错误
let {foo} = {bar: 'baz'};
console.log(foo)

//报错
//let {foo: {bar}} = {baz: 'baz'};

//只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题
let x;
({x} = {x: 1});
console.log(x)

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
let { log, sin, cos } = Math;

//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
console.log(first, last)