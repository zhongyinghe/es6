function print(msg) {
	console.log(msg);
}

//4、symbol属性名的遍历
//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

print(objectSymbols);// [Symbol(a), Symbol(b)]

print('--------上面示例:获取对象的Symbol属性----------')

//Object.getOwnPropertySymbols方法与for...in循环、Object.getOwnPropertyNames方法进行对比的例子。
const obj2 = {};

let foo = Symbol("foo");

Object.defineProperty(obj2, foo, {
  value: "foobar",
});

for (let i in obj2) {
  console.log(i); // 无输出.所以获取不到属性键的
}

print(Object.getOwnPropertyNames(obj2));// []
print(Object.getOwnPropertySymbols(obj2));// [Symbol(foo)]

print('--------上面示例:for...in 遍历不了Symbol属性----------');

//Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
let obj3 = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};
print(Reflect.ownKeys(obj3));//  ["enum", "nonEnum", Symbol(my_key)]

print('--------上面示例:Reflect.ownKeys()遍历所有属性，包括Symbol属性----------');

//由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
let len = Collection.sizeOf(x) // 0
print(len);
x.add('foo');
len = Collection.sizeOf(x) // 1
print(len);

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
//解释:上面三个方法是获取不到Symbol属性的
print('--------上面示例:无法遍历Symbol属性应用----------')
print('========================================');


//总结:Object.getOwnPropertySymbols获取对象的Symbol属性
//引用Sysbol作为类的属性，使一般的方法遍历不了(应用)