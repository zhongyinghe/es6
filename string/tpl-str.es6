//11、模板字符串
console.log(`In JavaScript '\n' is a line-feed.`) //普通字符串

console.log(`string text line 1 
string text line 2`) //多行字符串

let name = 'Bob', time = 'today'
let str = `Hello ${name}, how are you ${time}?` //在字符串中嵌入变量
console.log(str)

let greeting = `\`yo\` world!` //显示反引号
console.log(greeting) // `yo` world!

let tmp = `
	<ul>
		<lit>first</li>
		<li>second</li>
	</ul>
`
console.log(tmp)//多行字符串，所有的空格和缩进都会被保留在输出之中
console.log(tmp.trim()) //trim()消除换行

let x = 1
let y = 2
let add = `${x} + ${y} = ${x + y}`
console.log(add)

let zz = `${x} + ${y * 2} = ${x + y * 2}`
console.log(zz)

let obj = {x: 1, y: 2}
console.log(`${obj.x + obj.y}`)//大括号内可以进行运算

function fn() {
	return 'hello world'
}

let tstr = `foo ${fn()} bar` //模板字符串中调用函数
console.log(tstr)

console.log(`hello ${'world'}`) //由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出

const tmpl = addrs => ` //模板字符串甚至还能嵌套
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
