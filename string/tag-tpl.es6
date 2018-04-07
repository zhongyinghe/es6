//模板编译
//解释:标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
//解释:tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，
//	   也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。
let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;

let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;
	console.log(literals)
	console.log(arguments)
  while (i < literals.length) {
    result += literals[i++];
	console.log(i)
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg)