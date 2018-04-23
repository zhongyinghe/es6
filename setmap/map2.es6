function print(msg) {
	console.log(msg);
}

//map的属性和操作方法
//size属性
const map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
print(map.size);

print('--------上面示例:map的size属性-----------')

//set()
const m = new Map();

m.set('edition', 6)        // 键是字符串
m.set(262, 'standard')     // 键是数值
m.set(undefined, 'nah')    // 键是 undefined

//链式写法
let maps = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
  
print('--------上面示例:map的set操作-----------')

//get 
const m_get = new Map();

const hello = function() {console.log('hello');};
m_get.set(hello, 'Hello ES6!') // 键是函数

m_get.get(hello)  // Hello ES6!

print('--------上面示例:map的get操作-----------')

//has 
/*
const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition')     // true
m.has('years')       // false
m.has(262)           // true
m.has(undefined)     // true
*/

print('--------上面示例:map的has操作-----------')

//delete操作
/*
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false
*/

print('--------上面示例:map的delete操作-----------')

//clear()
let map_c = new Map();
map_c.set('foo', true);
map_c.set('bar', false);
print(map_c.size)//2
map_c.clear();
print(map_c.size)//0

print('--------上面示例:map的clear操作-----------')

//遍历
const mapf = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of mapf.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of mapf.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of mapf.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of mapf.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of mapf) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
//上面代码最后的那个例子，表示 Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。
map[Symbol.iterator] === map.entries //true

print('--------上面示例:map的遍历操作操作-----------')

//Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）
/*
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
*/

print('--------上面示例:map转化为数组-----------')

//结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
print(map1);

// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
print(map2)
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}

print('--------上面示例:map结合数组的filter和map使用-----------')

//forEach
let map5 = new Map([
	["name", "张三"],
	["sex", "男"]
]);
map5.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});

const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map5.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);

print('--------上面示例:map的forEach的使用,注意第二个参数的使用-----------')

//总结:
//map的属性:size
//map的操作:set(key, val),get(key), has(key),delete(key), clear()
//map的遍历:keys(), values(), entries(), forEach()
//forEach注意第二个参数的使用