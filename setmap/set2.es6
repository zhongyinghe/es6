function print(msg) {
	console.log(msg);
}

//Set操作
let s = new Set();
s.add(1).add(2).add(2);//链接写法
s.size; // 2
print(s.size);

s.has(1) // true
s.has(2) // true
s.has(3) // false
s.delete(2);
print(s.has(2));//false

print('--------上面示例:set的基本操作方法使用-----------')

const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
print(array);
function dedupe(array) {
  return Array.from(new Set(array));
}

print(dedupe([1, 1, 2, 3])); // [1, 2, 3]

print('--------上面示例:set转为数组的方法-----------')

//遍历
//重点:Set的遍历顺序就是插入顺序
//说明:由于 Set 结构没有键名，只有键值=>所以keys方法和values方法的行为完全一致

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

print("\r")

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

print("\r")

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

print("\r")

//Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
print(Set.prototype[Symbol.iterator] === Set.prototype.values);

print("\r")

//这意味着，可以省略values方法，直接用for...of循环遍历 Set。
for (let x of set) {
  console.log(x);
}
// red
// green
// blue

print("\r")

//forEach遍历
new Set([1, 4, 9]).forEach((value, key) => console.log(key + ' : ' + value));
// 1 : 1
// 4 : 4
// 9 : 9

print('--------上面示例:set遍历操作-----------')

//遍历应用
//扩展运算符（...）内部使用for...of循环
print([...new Set(['red', 'green', 'blue'])]);// ['red', 'green', 'blue']

//除数组的重复成员
let unique = [...new Set([3, 5, 2, 2, 5, 5])];
print(unique);// [3, 5, 2]

print('--------上面示例:set去掉数组重复值-----------')

//数组的map和filter方法也可以间接用于 Set 了
let set_map = new Set([1, 2, 3]);
set_map = new Set([...set_map].map(x => x * 2));// 返回Set结构：{2, 4, 6}
print(set_map);

let set_ft = new Set([1, 2, 3, 4, 5]);
set_ft = new Set([...set_ft].filter(x => (x % 2) == 0));// 返回Set结构：{2, 4}
print(set_ft);

print('--------上面示例:数组的map和filter用于Set-----------')

//使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
print(union);

print('--------上面示例:set并集-----------')

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
print(intersect);

print('--------上面示例:set交集-----------')

// 差集
let difference = new Set([...a].filter(x => !b.has(x))); // Set {1}
print(difference);

print('--------上面示例:set差集-----------')

//如果想在遍历操作中，同步改变原来的 Set 结构
// 方法一
let set_chg = new Set([1, 2, 3]);
set_chg = new Set([...set_chg].map(val => val * 2));// set的值是2, 4, 6
print(set_chg);

let set_chg2 = new Set([1, 2, 3]);
set_chg2 = new Set(Array.from(set_chg2, val => val * 2));// set的值是2, 4, 6
print(set_chg2);

print('--------上面示例:改变原set的方法-----------')

print('--------上面示例:set应用示例-----------')

//总结:
//Set的属性(Set函数和size)
//Set的操作方法add(value),delete(value),has(value),clear()
//Set的遍历操作:keys(),values(),entries(),forEach()
//Set遍历重点:Set的遍历顺序就是插入顺序
//应用重点:去掉数组重复值,并集,交集,差集,改变原有Set