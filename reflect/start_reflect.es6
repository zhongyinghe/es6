function print(msg) {
	console.log(msg);
}

//reflect入门
let obj = {
	name: 'ubuntu',
	age: 17,
	func: 'os'
}

let handle = {
	get(target, key, receiver) {
		print(`get ${key}`)
		return Reflect.get(target, key);
	},
	set(target, key, value, receiver) {
		print(`setting ${key}`);
		return Reflect.set(target, key, value, receiver);
	},
	has(target, key) {
		print(`has ${key}?`);
		return Reflect.has(target, key);
	}
}

let proxy = new Proxy(obj, handle);
print(proxy.func);
proxy.age = 18;
print(proxy.age);

let hasName = 'name' in proxy;
print(hasName);
//进一步改写上面的语句
Reflect.has(proxy, 'func');//has func?

print(`-------------上面示例:入门-------------`)
print(`-------------下面示例:Reflect和Proxy结合-观察者模式-------------`)
//观察者
//--观察者 
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);

//--通知观察者
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
	print(`setting key=${key}, value=${value}`);
	let result = Reflect.set(target, key, value, receiver);
	queuedObservers.forEach(observer => observer());
	return result;
}

//--应用
function echo() {
	print(`${person.name}, ${person.age}`);
}
observe(echo);

const person = observable({
	name: '张三',
	age: 20
});



person.name = '李四';
//print(person.name);

//总结:
//Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
//判断对象是否具有某个属性，从原先的prop in obj到Reflect.has(obj, prop)