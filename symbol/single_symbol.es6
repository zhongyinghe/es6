function print(msg) {
	console.log(msg);
}

//5、Symbol.for()，Symbol.keyFor()
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

print(s1 === s2); // true
//解释:上面代码中，s1和s2都是 Symbol 值，但是它们都是同样参数的Symbol.for方法生成的，所以实际上是同一个值。

//说明:Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false
print('--------上面示例:Symbol.for()说明----------')

//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
let sy1 = Symbol.for("foo");
Symbol.keyFor(sy1) // "foo"

let sy2 = Symbol("foo");
Symbol.keyFor(sy2) // undefined

print('--------上面示例:返回Symbol已登记的key----------')

print('========================')

//6、模块的 Singleton 模式
//说明:Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例

//总结:
//Symbol.for()可以返回同一实例
//Symbol.keyFor返回已登记的 Symbol 类型值的key
//Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例
