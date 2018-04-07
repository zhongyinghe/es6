//字符串函数
//7、includes(), startsWith(), endsWith()返回的都是布尔值
let s = "hello world!";

console.log(s.startsWith("hello"))//true
console.log(s.endsWith("!"))//是否已!结尾;true
console.log(s.includes("o"))//true

console.log("----------")

console.log(s.startsWith("world", 6))//true
console.log(s.endsWith("hello", 5)) //这个有所变化，是针对前5个字符来匹配的;true
console.log(s.includes("hello", 6)) //false

console.log("=============================")

//8、repeat
console.log('x'.repeat(3))// "xxx"
console.log("hello".repeat(2)) // "hellohello"
console.log('na'.repeat(0)) // ""

console.log('na'.repeat(2.9))//'na'

//console.log('na'.repeat(Infinity))//报错
//console.log('na'.repeat(-1))//报错

console.log('na'.repeat(-0.9)) // ""
console.log('na'.repeat(NaN)) // ""

console.log('na'.repeat('na')) // ""
console.log('na'.repeat('3')) // "nanana"

console.log("=============================")

//9、padStart和padEnd()
console.log('x'.padStart(5, 'ab')) // 'ababx'
console.log('x'.padStart(4, 'ab')) // 'abax'

console.log('x'.padEnd(5, 'ab')) // 'xabab'
console.log('x'.padEnd(4, 'ab'))  // 'xaba'

console.log('xxx'.padStart(2, 'ab')) // 'xxx'
console.log('xxx'.padEnd(2, 'ab')) // 'xxx'

console.log('ab'.padStart(10, '0123456789')) // '01234567ab'

console.log('x'.padStart(4)) // '   x'; 默认使用空格补全长度
console.log('x'.padEnd(4)) // 'x   '

console.log('1'.padStart(10, '0')) // '0000000001';用于数值补全指定位数

console.log('09-12'.padStart(10, 'YYYY-MM-DD')) //"YYYY-09-12"; 用于提示字符串格式