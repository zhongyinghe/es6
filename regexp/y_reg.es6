//y修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g
var r2 = /a+/y

console.log(r1.exec(s)) // ["aaa"]
console.log(r2.exec(s)) // ["aaa"]

console.log(r1.exec(s)) // ["aa"]
console.log(r2.exec(s)) // null;y修饰符要求匹配必须从头部开始，所以返回null

console.log("------------------------")

const REGEX = /a/g;

// 指定从2号位置（y）开始匹配
REGEX.lastIndex = 2;

// 匹配成功
const match = REGEX.exec('xaya');
console.log(match)

// 在3号位置匹配成功
console.log(match.index)//3

// 下一次匹配从4号位开始
console.log(REGEX.lastIndex) // 4

// 4号位开始匹配失败
console.log(REGEX.exec('xaya')) // null

console.log("------------------------")

const REGEX2 = /a/y;

// 指定从2号位置（y）开始匹配
REGEX2.lastIndex = 2;

//// 不是粘连，匹配失败
const match2 = REGEX2.exec('xaya');
console.log(match2)

// 指定从3号位置开始匹配
REGEX2.lastIndex = 3;

// 3号位置是粘连，匹配成功
const match3 = REGEX2.exec('xaya');
console.log(match3)

console.log(match3.index)
console.log(REGEX2.lastIndex)

//总结:y修饰符号隐含了头部匹配的标志^。y修饰符的设计本意，就是让头部匹配的标志^在全局匹配中都有效

console.log("------------------------")

let rr = /a/gy
console.log('aaxa'.replace(rr, '-')) //// '--xa'

//说明:单单一个y修饰符对match方法，只能返回第一个匹配，必须与g修饰符联用，才能返回所有匹配。
console.log('a1a2a3'.match(/a\d/y)) //["a1"]
console.log('a1a2a3'.match(/a\d/gy)) //// ["a1", "a2", "a3"]

//y修饰符的一个应用
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

console.log(tokenize(TOKEN_Y, '3 + 4')) // [ '3', '+', '4' ]

console.log(tokenize(TOKEN_G, '3 + 4')) // [ '3', '+', '4' ]

console.log(tokenize(TOKEN_Y, '3x + 4')) // [ '3' ]

console.log(tokenize(TOKEN_G, '3x + 4')) // [ '3', '+', '4' ]
//解释:上面代码中，g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误

function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}