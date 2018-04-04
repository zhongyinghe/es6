//数值和布尔值的解构赋值
let {toString: s} = 123
console.log(s)
console.log(s === Number.prototype.toString)

let {toString: str} = true;
console.log(str === Boolean.prototype.toString)

//解构赋值的规则是，如果等号右边的值不是对象或数组，就先将其转为对象。
//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
//let {prop: x} = undefined
//let {prop: y} = null