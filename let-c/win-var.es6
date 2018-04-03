//var命令和function命令声明的全局变量，依旧是顶层对象的属性；
//另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性

var a = 1;
console.log(window.a)//实际上会报window为undefined
//疑问:一个是变量(var a)；而一个是对象的属性(window.a)，它们怎么能够等同呢

let b = 1;
console.log(window.b) // undefined

//对global对象不懂,所以下面的代码无法很好地理解
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};