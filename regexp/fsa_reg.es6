//6、flags属性

// ES5 的 source 属性
// 返回正则表达式的正文
console.log(/abc/ig.source) //"abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
console.log(/abc/ig.flags) //"gi"

console.log("=========================")

//7、s修饰符
console.log(/foo.bar/.test('foo\nbar')) //false
//解释:上面代码中，因为.不匹配\n，所以正则表达式返回false。
//解决方法:ES2018 引入s修饰符，使得.可以匹配任意单个字符。
//var r = /foo.bar/s
//console.log(r.test('foo\nbar')) //true

//正则表达式还引入了一个dotAll属性，返回一个布尔值，表示该正则表达式是否处在dotAll模式。
//const re = /foo.bar/s;
//console.log(re.test('foo\nbar'));//true
//console.log(re.dotAll); //true
//console.log(re.flags); // "s"

console.log("=========================")

//8、后行断言
//先行断言
console.log(/\d+(?=%)/.exec('100% of US presidents have been male')) //只匹配百分号之前的数字
//先行否定断言
console.log(/\d+(?!%)/.exec('that’s all 44 of them')) //只匹配不在百分号之前的数字

//后行断言
//console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill')) // ["100"];只匹配美元符号之后的数字
//console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'))// ["90"];只匹配不在美元符号后面的数字

//const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
//console.log('$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar')); // '$bar %foo foo'

//console.log(/(?<=(\d+)(\d+))$/.exec('1053')); // ["", "1", "053"]
console.log(/^(\d+)(\d+)$/.exec('1053')) // ["1053", "105", "3"]

//“后行断言”的反斜杠引用，也与通常的顺序相反，必须放在对应的那个括号之前。
//console.log(/(?<=(o)d\1)r/.exec('hodor'))
//console.log(/(?<=\1d(o))r/.exec('hodor'))