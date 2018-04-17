function print(msg) {
	console.log(msg);
}

//5、Object.assign()
//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
print(target);// {a:1, b:2, c:3}

print("--------上面是示例1--------------");

//如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
const target2 = { a: 1, b: 1 };

const source12 = { b: 2, c: 2 };
const source22 = { c: 3 };

Object.assign(target2, source12, source22);
print(target2);

print("--------上面是示例2--------------");

//如果只有一个参数，Object.assign会直接返回该参数。
const objt = {a: 1};
print(Object.assign(objt) === objt) // true

print("--------上面是示例3--------------");

//如果该参数不是对象，则会先转成对象，然后返回
print(typeof Object.assign(2)); // "object"

print("--------上面是示例4--------------");

//由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
//Object.assign(undefined) // 报错
//Object.assign(null) // 报错

print("--------上面是示例5--------------");

//如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
//首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。

let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

print("--------上面是示例6--------------");

//其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const objOther = Object.assign({}, v1, v2, v3);
console.log(objOther); // { "0": "a", "1": "b", "2": "c" }

print("--------上面是示例7--------------");

Object(true) // {[[PrimitiveValue]]: true}
Object(10)  //  {[[PrimitiveValue]]: 10}
let rs8 = Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
print(rs8);
//解释:上面代码中，布尔值、数值、字符串分别转成对应的包装对象，
//可以看到它们的原始值都在包装对象的内部属性[[PrimitiveValue]]上面，这个属性是不会被Object.assign拷贝的。
//只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。

print("--------上面是示例8--------------");

let rs9 = Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' }
print(rs9);
//解释:Object.assign要拷贝的对象只有一个不可枚举属性invisible，这个属性并没有被拷贝进去。

print("--------上面是示例9--------------");

//属性名为 Symbol 值的属性，也会被Object.assign拷贝。
var a10 = { a: 'b' };
let rs10 = Object.assign(a10, { [Symbol('c')]: 'd' });//{ a: 'b', Symbol(c): 'd' }
print(a10);//{a: 'b'}
//结果是不拷贝Symbol的值,它的理论是否有错误

print("--------上面是示例10--------------");

//注意
//1)浅拷贝
//说明:Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);
print(obj2);//{a: {b: 1}}
obj1.a.b = 2;
print(obj2.a.b);
//解释:上面代码中，源对象obj1的a属性的值是一个对象，Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

print("--------上面是示例11--------------");

//2)同名属性替换
const targetA = { a: { b: 'c', d: 'e' } };
const sourceB = { a: { b: 'hello' } };
Object.assign(targetA, sourceB);//// { a: { b: 'hello' } }
print(targetA);

print("--------上面是示例12--------------");

//3)数组处理
Object.assign([1, 2, 3], [4, 5]);// [4, 5, 3]

print("--------上面是示例13--------------");

//4)取值函数的处理
//说明:Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
const source = {
  get foo() { return 1 }
};
const tgt = {};
let ab = Object.assign(tgt, source);// { foo: 1 }
print(ab)

print("--------上面是示例14--------------");

//用途:
//为对象添加属性
//为对象添加方法
//克隆对象
//合并多个对象
//为属性指定默认值

//总结:Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
//注意:同名覆盖-后面的覆盖前面的

//变化:一个对象=>不是对象,如:2=>undefined和null=>undefined和null非首参数=>其他类型的值（即数值、字符串和布尔值）不在首参数

//注意一:浅拷贝.如果属性值是对象。则拷贝它的引用
//注意二:同名属性整个替换而非合并
//注意三:数组会当作对象处理,所以会走注意二
//注意四:取值函数处理


//用途:
//为对象添加属性
//为对象添加方法
//克隆对象(不继承克隆和继承克隆)
//合并多个对象
//为属性指定默认值