function print(msg) {
	console.log(msg);
}

//1)Symbol.hasInstance
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
//解释:上面代码中，MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。

class Even {
  static [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}

1 instanceof Even // false
2 instanceof Even // true
12345 instanceof Even // false

print('------------上面示例:instanceof自动调用Symbol.hasInstance方法----------');

//2)Symbol.isConcatSpreadable
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
let rs = ['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
print(rs)

//解释:面代码说明，数组的默认行为是可以展开，Symbol.isConcatSpreadable默认等于undefined。该属性等于true时，也有展开的效果。

let obj = {length: 2, 0: 'c', 1: 'd'};
let rs1 = ['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']
print(rs1);
obj[Symbol.isConcatSpreadable] = true;
let rs2 = ['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
print(rs2);
//解释:类似数组的对象正好相反，默认不展开。它的Symbol.isConcatSpreadable属性设为true，才可以展开。

//Symbol.isConcatSpreadable属性也可以定义在类里面
class A1 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = true;
  }
}
class A2 extends Array {
  constructor(args) {
    super(args);
  }
  get [Symbol.isConcatSpreadable] () {
    return false;
  }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
let rs3 = [1, 2].concat(a1).concat(a2)
print(rs3)
// [1, 2, 3, 4, [5, 6]]

print('------------上面示例:Symbol.isConcatSpreadable判断数组或者对象是否展开----------');

//3)Symbol.species
//说明:对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性。
class MyArray extends Array {
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

b instanceof MyArray // true
c instanceof MyArray // true

/*
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true
*/
//解释:上面代码中，a.map(x => x)生成的衍生对象，就不是MyArray的实例，而直接就是Array的实例。
class T1 extends Promise {
}

class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}

new T1(r => r()).then(v => v) instanceof T1 // true
new T2(r => r()).then(v => v) instanceof T2 // false

print('------------上面示例:Symbol.species是在创建对象时返回该属性指定的构造函数----------');

//4)Symbol.match
//说明:对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()) // 1

print('------------上面示例:Symbol.match属性返回它的调用方法返回值----------');

//5)Symbol.replace
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]
print('------------上面示例:Symbol.replace调用指定的方法----------');

//6)Symbol.search 
class MySearch {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}
'foobar'.search(new MySearch('foo')) // 0
print('------------上面示例:SSymbol.search调用指定的方法----------');

//7)Symbol.split
class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}

'foobar'.split(new MySplitter('foo'))
// ['', 'bar']

'foobar'.split(new MySplitter('bar'))
// ['foo', '']

'foobar'.split(new MySplitter('baz'))
// 'foobar'

//8)Symbol.iterator
class Collection {
  *[Symbol.iterator]() {
    let i = 0;
    while(this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;

for(let value of myCollection) {
  console.log(value);
}
// 1
// 2

// 没有 unscopables 时
/*
class MyClass {
  foo() { return 1; }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 1
}
*/

// 有 unscopables 时
/*
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 2
}
*/
//解释:上面代码通过指定Symbol.unscopables属性，使得with语法块不会在当前作用域寻找foo属性，即foo将指向外层作用域的变量。

//总结:
//instanceof自动调用Symbol.hasInstance方法
//Symbol.isConcatSpreadable判断数组或者对象是否展开

//ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。(在特定的情况下触发)