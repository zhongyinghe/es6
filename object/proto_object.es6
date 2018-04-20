function print(msg) {
	console.log(msg);
}
//8、proto属性

//1)Object.setPrototypeOf()
//说明:Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。
//它是 ES6 正式推荐的设置原型对象的方法。
//示例1：
let proto = {}
let obj = {x: 10}
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 30;
print(obj);//{x: 10}
print(obj.x);//10
print(obj.y);//20
print(obj.z);//30
//解释:上面代码将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。
//但是如果输出对象，是没有y,z属性的

//说明:如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。
print(Object.setPrototypeOf(1, {}) === 1)
Object.setPrototypeOf(1, {}) === 1 // true
Object.setPrototypeOf('foo', {}) === 'foo' // true
Object.setPrototypeOf(true, {}) === true // true

//说明:由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
//Object.setPrototypeOf(undefined, {});//报错
//Object.setPrototypeOf(null, {});//报错

print('===========================');

//2)Object.getPrototypeOf() 
//说明:该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象。
function Rectangle() {

}

const rec = new Rectangle();
print(Object.getPrototypeOf(rec) === Rectangle.prototype);//true 
Object.setPrototypeOf(rec, Object.prototype);
print(Object.getPrototypeOf(rec) === Rectangle.prototype);//false

//如果参数不是对象，会被自动转为对象。
// 等同于 Object.getPrototypeOf(Number(1))
Object.getPrototypeOf(1)
// Number {[[PrimitiveValue]]: 0}

// 等同于 Object.getPrototypeOf(String('foo'))
Object.getPrototypeOf('foo')
// String {length: 0, [[PrimitiveValue]]: ""}

// 等同于 Object.getPrototypeOf(Boolean(true))
Object.getPrototypeOf(true)
// Boolean {[[PrimitiveValue]]: false}

Object.getPrototypeOf(1) === Number.prototype // true
Object.getPrototypeOf('foo') === String.prototype // true
Object.getPrototypeOf(true) === Boolean.prototype // true

//如果参数是undefined或null，它们无法转为对象，所以会报错。
//Object.getPrototypeOf(null);//报错
//Object.getPrototypeOf(undefined);//报错


//总结:如果一个对象本身部署了__proto__属性，该属性的值就是对象的原型。
//Object.setPrototypeOf(obj, proto)设置对象的原型,可使用proto的属性数据，但直接输出obj是没有proto属性的
//Object.getPrototypeOf()用于读取一个对象的原型对象。