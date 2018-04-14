function print(msg) {
	console.log(msg)
}

//尾调用
//1)什么是尾调用
function g(x) {
	return x
}
function f(x) {
	return g(x)//这就是尾调用
}
//尾调用的定义:指某个函数的最后一步是调用另一个函数.

//以下三种情况，都不属于尾调用。
// 情况一
function f2(x){
  let y = g(x);
  return y;
}

// 情况二
function f3(x){
  return g(x) + 1;
}

// 情况三
function f4(x){
  g(x);
}

//尾调用不一定出现在函数尾部，只要是最后一步操作即可
function m(x) {
}

function n(x) {
}

function f(x) {
  if (x > 0) {
    return m(x)
  }
  return n(x);
}

//2)尾调用优化
/*
function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();

// 等同于
function f() {
  return g(3);
}
f();

// 等同于
g(3);//这就是尾调用优化
*/

//这个就不能够进行尾调用优化
function addOne(a){
  var one = 1;
  function inner(b){
    return b + one;
  }
  return inner(a);
}

//3)尾递归
//一般递归
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
print(factorial(5))//120

//尾递归
function factorial2(n, total) {
  if (n === 1) return total;
  return factorial2(n - 1, n * total);
}
print(factorial2(5, 1))//120

function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

print(Fibonacci(10))//89

//Fibonacci(100) // 堆栈溢出
//Fibonacci(500) // 堆栈溢出

function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

print(Fibonacci2(100))
//结论:非常节省内存

//递归函数的改写:尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。
//做到这一点的方法，就是把所有用到的内部变量改写成函数的参数

//总结:尾调用就是为了尾递归的应用，防内存溢出
