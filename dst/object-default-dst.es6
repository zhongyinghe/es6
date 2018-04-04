//对象解构赋值的默认值
var {x = 3} = {}
console.log(x)

var {x2, y2 = 5} = {x2: 1}
console.log(x2, y2)

var {x3: y3 = 3} = {};
console.log(y3)//3

var {x4: y4 = 3} = {x4: 5};
console.log(y4)//5

var { message: msg = 'Something went wrong' } = {};
console.log(msg)

//默认值生效的条件是，对象的属性值严格等于undefined。
var {a = 3} = {a: undefined};
console.log(a)//3

var {b = 3} = {b: null};
console.log(b)//null