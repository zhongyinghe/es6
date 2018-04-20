function print(msg) {
	console.log(msg);
}

//1)Object.keys()
var obj = { foo: 'bar', baz: 42 };
let keys = Object.keys(obj);
print(keys);

let obj2 = { a: 1, b: 2, c: 3 };

for (let key of Object.keys(obj2)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of Object.values(obj2)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of Object.entries(obj2)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

print('---------------------')

//2)Object.values()
const obj3 = { 100: 'a', 2: 'b', 7: 'c' };
print(Object.values(obj3));// ["b", "c", "a"]
//解释:上面代码中，属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。

//Object.values只返回对象自身的可遍历属性。
const obj4 = Object.create({}, {p: {value: 42}});
print(Object.values(obj4)) // []
//解释:上面代码中，Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，因为p的属性描述对象的enumerable默认是false，
//Object.values不会返回这个属性。只要把enumerable改成true，Object.values就会返回属性p的值。
const obj5 = Object.create({}, {p:
  {
    value: 42,
    enumerable: true
  }
});
print(Object.values(obj5)) // [42]

//Object.values会过滤属性名为 Symbol 值的属性
let vv = Object.values({ [Symbol()]: 123, foo: 'abc' });
print(vv);// ['abc']

//如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。
let s = Object.values('foo');// ['f', 'o', 'o']
print(s);

//如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。
Object.values(42) // []
Object.values(true) // []

//3)Object.entries
const obj6 = { foo: 'bar', baz: 42 };
let en = Object.entries(obj6);// [ ["foo", "bar"], ["baz", 42] ]
print(en);

//如果原对象的属性名是一个 Symbol 值，该属性会被忽略。
Object.entries({ [Symbol()]: 123, foo: 'abc' });//[ [ 'foo', 'abc' ] ]

//Object.entries的基本用途是遍历对象的属性。
let obj7 = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj7)) {
  console.log(
    `${JSON.stringify(k)}: ${JSON.stringify(v)}`
  );
}
// "one": 1
// "two": 2

//Object.entries方法的另一个用处是，将对象转为真正的Map结构。
const obj8 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));// Map { foo: "bar", baz: 42 }
print(map);

//总结:Object.keys()返回对象的keys
//Object.values()返回对象的values
//Object.entries()返回对象的keys和values

