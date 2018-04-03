//const一旦声明变量，就必须立即初始化,以后都不能赋值
const PI = 3.14159

//PI = 3
console.log(PI)

if (true) {
  const PI = 5; //const的作用域与let命令相同：只在声明所在的块级作用域内有效。
}

console.log(PI)//输出为:3.14159

if (true) {
  console.log(MAX); // const 存在暂时性死区，只能在声明的位置后面使用,否则报错
  const MAX = 5;
}
