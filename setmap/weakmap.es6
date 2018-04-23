function print(msg) {
	console.log(msg);
}

//4、WeakMap
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
let v1 = wm1.get(key) // 2
print(v1);

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
let v2 = wm2.get(k2) // "bar"
print(v2);

//WeakMap与Map的区别有两点。
//1)首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
/*
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
*/

//2)WeakMap的键名所指向的对象，不计入垃圾回收机制。
/*
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];

//说明:一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放e1和e2占用的内存。
// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;

*/

//解释:WeakMap只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存

//注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
const wm = new WeakMap();
let k = {};
let obj = {foo: 1};

wm.set(k, obj);
obj = null;
let vk = wm.get(k)
// Object {foo: 1}
print(vk);

//WeakMap只有四个方法
//get()、set()、has()、delete()

//WeakMap 的用途
/*
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);
*/

//总结:
//WeakMap只接受对象作为键名
//WeakMap的键名所指向的对象，不计入垃圾回收机制
//WeakMap只有四个方法:get()、set()、has()、delete()