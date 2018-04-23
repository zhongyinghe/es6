function print(msg) {
	console.log(msg);
}

//与其他数据结构的互相转换
//1)Map转为数组
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]

//2)数组转为 Map
new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

//3)Map 转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const map = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(map)
// { yes: true, no: false }

//4)对象转为 Map
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

objToStrMap({yes: true, no: false})
// Map {"yes" => true, "no" => false}

//5)Map转为JSON
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap2 = new Map().set('yes', true).set('no', false);
strMapToJson(myMap2)
// '{"yes":true,"no":false}'

//另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap3 = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap3)
// '[[true,7],[{"foo":3},["abc"]]]'

//6)JSON 转为 Map
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
// Map {'yes' => true, 'no' => false}

//有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。
//这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

let json2map = jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
// Map {true => 7, Object {foo: 3} => ['abc']}
print(json2map);

//总结:数据类型转换