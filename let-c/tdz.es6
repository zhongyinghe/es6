//什么是暂时性死区
var tmp = 123;

if (true) {
	tmp = "abc";
	let tmp;
}

//解析:ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
//凡是在声明之前就使用这些变量，就会报错。
//而let必须是先声明后使用

if (true) {
  // TDZ开始
  tmp2 = 'abc'; // ReferenceError
  console.log(tmp2); // ReferenceError

  let tmp2; // TDZ结束
  console.log(tmp2); // undefined

  tmp2 = 123;
  console.log(tmp2); // 123
}