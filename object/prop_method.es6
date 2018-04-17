function print(msg) {
	console.log(msg);
}

//2、属性名表达式
obj = {};
// 方法一
obj.foo = true;
// 方法二
obj['a' + 'bc'] = 123;
//解释:方法一是直接用标识符作为属性名
//	   方法二是用表达式作为属性名

print("--------上面是示例1--------------");

//如果使用字面量方式定义对象
//es5写法:
var obj2 = {
  foo: true,
  abc: 123
};//使用标识符

//es6可以这么写法
let propKey = 'foo';

let obj3 = {
  [propKey]: true,//使用表达式-变量
  ['a' + 'bc']: 123//表达式-字符串
};

//比较:推荐es5写法

print("--------上面是示例2--------------");

//es6写法使用示例
let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word']; // "hello"//字符串
a[lastWord]; // "world"//变量
a['last word']; // "world"//字符串式
//结论:属性是变量式则使用时使用变量式，如果是字符串式，则使用时使用字符串式
//结论二:如果是变量式，它可以转为字符串式

print("--------上面是示例3--------------");

//表达式还可以用于定义方法名
let obj4 = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
print(obj4.hello());//直接量式调用

print("--------上面是示例4--------------");

//属性名表达式与简洁表示法，不能同时使用，会报错
// 报错
//const foo = 'bar';
//const bar = 'abc';
//const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};
print(baz);

print("--------上面是示例5--------------");

//属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
print(myObject);// Object {[object Object]: "valueB"}
//解释:[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。
//方法的 name 属性

//总结:主要讨论的是属性名.它可以是标识符，也可以是变量名(要使用[])，也可以是字符串，也可以是表达式(要使用[])
//主要指的是:什么可以作为对象的属性。

print("--------上面是示例6--------------");

//3、方法的name属性
const person = {
  sayName() {
    console.log('hello!');
  },
};
print(person.sayName.name) // "sayName"

print("--------上面是示例7--------------");

//如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，
//而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。

const objn = {
  get foo() {},
  set foo(x) {}
};
//print(objn.foo.name)//TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(objn, 'foo');
print(descriptor.get.name); // "get foo"
print(descriptor.set.name); // "set foo"

print("--------上面是示例8--------------");

//如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
const key1 = Symbol('description');
const key2 = Symbol();
let objk = {
  [key1]() {},
  [key2]() {},
};

print(objk[key1].name); // "[description]"
print(objk[key2].name); // ""

print("--------上面是示例9--------------");

//总结:主要讨论的是方法的name属性.表明name输出值是什么?
//分为3种情况:
//第一种:正常情况
//第二种:set和get情况
//第三种:Symbol值情况