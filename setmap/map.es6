function print(msg) {
	console.log(msg);
}

//3、map
//理解:
//传统上只能用字符串当作键
//比较:Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现

const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
let ov = m.get(o) // "content"
print(ov)
m.has(o);//true
m.delete(o);//true
print(m.has(o));//false

print('--------上面示例:map的基本操作-----------')

//作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
const map = new Map([
  ['name', '张三', "abc", "456"],
  ['title', 'Author']
]);
print(map.size);//2
print(map.has('name'));//true
print(map.get('name'));//张三
map.has('title') // true
map.get('title') // "Author"
print(map);
//注意:如果添加的是这样的['name', '张三', "abc", "456"]数组，后面的abc,456是被忽视的,
//实质
/*
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
*/

print('--------上面示例:map使用数组作为构造参数-----------')

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
print(m1);

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
print(m3);
//解释:上面代码中，我们分别使用 Set 对象和 Map 对象，当作Map构造函数的参数，结果都生成了新的 Map 对象。

print('--------上面示例:map使用Set和Map作为构造参数-----------')

//如果对同一个键多次赋值，后面的值将覆盖前面的值。
const mapn = new Map();

mapn
.set(1, 'aaa')
.set(1, 'bbb');
print(mapn.get(1));//bbb
print('--------上面示例:map同一个键多次赋值取最后一个-----------')

//如果读取一个未知的键，则返回undefined
let rs = new Map().get('asfddfsasadf');
print(rs);

print('--------上面示例:未知键-----------')

//注意，只有对同一个对象的引用，Map 结构才将其视为同一个键
const map_un = new Map();

map_un.set(['a'], 555);
map_un.get(['a']) // undefined
print(map_un.get(['a']));

print('--------上面示例:不是同一个键-----------')

//同理，同样的值的两个实例，在 Map 结构中被视为两个键。
const mp = new Map();

const k1 = ['a'];
const k2 = ['a'];

mp
.set(k1, 111)
.set(k2, 222);

mp.get(k1) // 111
mp.get(k2) // 222
print(mp.get(k2));
print('--------上面示例:了解map的键-----------')

//解释:由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
/*
let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123
*/

//总结:
//Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
//键可以是对象
//map的构造函数可以使用数组作为参数,并理解它的实质
//使用set和map作为构造参数
//理解map键的实质