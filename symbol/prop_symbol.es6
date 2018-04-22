function print(msg) {
	console.log(msg);
}

//2、作为属性名的Symbol
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
/*
let a = {
  [mySymbol]: 'Hello!'
};
*/
// 第三种写法
/*
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
*/
print(a[mySymbol]);// "Hello!"

print('--------上面示例:作为属性名的Symbol----------')

//注意，Symbol 值作为对象属性名时，不能用点运算符。
const s1 = Symbol();
const obj = {};

obj.s1 = 'Hello!';
print(obj[s1]); // undefined
print(obj['s1']); // "Hello!"

//同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
/*
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

//第二种写法:
let obj = {
  [s](arg) { ... }
};

obj[s](123);
*/

print('--------上面示例:作为属性名的Symbol一定要放在[]内----------')

//Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
let log = {};
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};

print(log);

print('--------上面示例:Symbol用于定义一组常量----------')

print('================================')

//3、消除魔术字符串
//魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
/*
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串

//常用的消除魔术字符串的方法，就是把它写成一个变量。
const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
//如果仔细分析，可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。
//因此，这里就很适合改用 Symbol 值。
const shapeType = {
  triangle: Symbol()
};
*/

print('--------上面示例:消除魔术字符串的方法:用变量代替----------')

//总结:作为属性名的Symbol一定要放在[]内
//消除魔术字符串的方法:用变量代替(应用)