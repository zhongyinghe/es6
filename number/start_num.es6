//1、进制数
//说明:二进制写法:0b开头
//	   八进制写法:0o开头

console.log(0b111110111 === 503) //true
console.log(0o767 === 503) //true

console.log(Number('0b111'))// 7
console.log(Number('0o10')) // 8

console.log("=========================")

//2、Number.isFinite(), Number.isNaN()
//Number.isFinite()说明:Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
//如果参数类型不是数值，Number.isFinite一律返回false。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

console.log("------------------------")

//Number.isNaN()说明:Number.isNaN()用来检查一个值是否为NaN。
//如果参数类型不是NaN，Number.isNaN一律返回false。
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
//解释:非法值就是NaN

console.log("------------------------")

//Number.isFinite()和isFinite()区别:
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

console.log("------------------------")

//Number.isNaN()和isNaN()区别
isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false

//说明:isNaN如果是数值或者true/false则返回false,其他则返回true
console.log(isNaN("true"))

//总结:检测是否为数值和检测变量是否为NaN