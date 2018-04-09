//1、RegExp构造函数

//第一种情况
var regex = new RegExp("xyz", "i");//等价于 var regex = /xyz/i
//第二种情况
//var regex = new RegExp(/xyz/i);//等价于 var regex = /xyz/i

//第三种情况
//var regex = new RegExp(/xyz/, "i");//es5中不能使用这种情况，但es6中可以

if (regex.test("XYZ")) {
	console.log("匹配成功")
}

//如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。
//而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
new RegExp(/abc/ig, 'i').flags
//解释:原有正则对象的修饰符是ig，它会被第二个参数i覆盖。

console.log("=========================")
//2、字符串的正则方法
console.log("XYZABC".match(/xyz/i))

//总结:regexp实例就使用test()方法，如:regex.test(字符串)
//而match()、replace()、search()和split()。则是字符串正则方法,如:str.match(正则)

console.log("=========================")

//3、u修饰符
//说明:ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。
//也就是说，会正确处理四个字节的 UTF-16 编码
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))//false;因为加了u修饰符以后，ES6 就会识别其为一个字符
console.log(/^\uD83D/.test('\uD83D\uDC2A'))//true

console.log("------------------------")

//1)点字符
//说明:含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的 Unicode 字符，点字符不能识别,必须加上u修饰符
var s = '𠮷';
console.log(/^.$/.test(s))//false;这样的点字符不能够识别
console.log(/^.$/u.test(s))//true;加上u字符后就能够识别

console.log("------------------------")

//2)Unicode 字符表示法
//说明:ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词。

console.log(/\u{61}/.test('a'))//false;如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配 61 个连续的u
console.log(/\u{61}/u.test('a'))//true;加u后能够识别
console.log(/\u{20BB7}/u.test('𠮷'))//true

console.log("------------------------")

//3)量词
//说明:使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符。
console.log(/a{2}/.test('aa'))//量词
console.log(/a{2}/u.test('aa'))
console.log(/𠮷{2}/.test('𠮷𠮷'))//因为没有加u,所以无法识别码点大于0xFFFF的 Unicode 字符
console.log(/𠮷{2}/u.test('𠮷𠮷'))

console.log("------------------------")

//4)预定义模式
console.log(/^\S$/.test('𠮷'))//因为识别不了，所以false
console.log(/^\S$/u.test('𠮷'))
//解释:上面代码的\S是预定义模式，匹配所有非空白字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的 Unicode 字符。

function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

console.log(s.length)//4
console.log(codePointLength(s))//2;能正确识别长度

console.log("------------------------")

//5)i修饰符
//说明:有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。
console.log(/[a-z]/i.test('\u212A'))
console.log(/[a-z]/iu.test('\u212A'))
//解释:上面代码中，不加u修饰符，就无法识别非规范的K字符

//总结:加u后能够识别unicode字符和码点大于0xFFFF的 Unicode 字符