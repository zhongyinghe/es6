function print(msg) {
	console.log(msg);
}

//2、WeakSet
const ws = new WeakSet();
//ws.add(1)
// TypeError: Invalid value used in weak set
//ws.add(Symbol())
// TypeError: invalid value used in weak set

//作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数
const a = [[1, 2], [3, 4]];
const wset = new WeakSet(a);
print(wset);//WeakSet{}
//解释:注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。
const b = [3, 4];
//const wst = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
//解释:上面代码中，数组b的成员不是对象，加入 WeaKSet 就会报错。

//WeakSet操作
const wse = new WeakSet();
const obj = {};
const foo = {};

wse.add(foo);
wse.add(obj);

wse.has(obj); // true
wse.has(foo);    // true

wse.delete(foo);
wse.has(foo);    // false

//WeakSet 没有size属性，没有办法遍历它的成员。


//总结:
//WeakSet 的成员只能是对象，而不能是其他类型的值
//WeakSet 中的对象都是弱引用