const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31

//ES2018引入具名组匹配
const RE_DATE2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj2 = RE_DATE2.exec('1999-12-31');
const year2 = matchObj2.groups.year; // 1999
const month2 = matchObj2.groups.month; // 12
const day2 = matchObj2.groups.day; // 31

console.log(matchObj2)
console.log(year2)
console.log(month2)
console.log(day2)

//如果具名组没有匹配，那么对应的groups对象属性会是undefined。
const RE_OPT_A = /^(?<as>a+)?$/;
const matchObj = RE_OPT_A.exec('');

matchObj.groups.as // undefined
'as' in matchObj.groups // true

//2)解构赋值和替换
//有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值
let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
one  // foo
two  // bar

//字符串替换时，使用$<组名>引用具名组。
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

'2015-01-02'.replace(re, '$<day>/$<month>/$<year>') // '02/01/2015'
//解释:上面代码中，replace方法的第二个参数是一个字符串，而不是正则表达式。

//3)引用
//说明:如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法。
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
//注意:数字引用（\1）依然有效。
const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
//同时使用\k<组名>和\1$
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false
