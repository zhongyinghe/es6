function print(msg) {
	console.log(msg);
}

//deleteProperty()
//deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
/*
var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: Invalid attempt to delete private "_prop" property
*/
//注意，目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。

//defineProperty()

//defineProperty()
/*
var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar'
// TypeError: proxy defineProperty handler returned false for property '"foo"'
*/

//getOwnPropertyDescriptor() 
//getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  }
};
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'wat')
// undefined
Object.getOwnPropertyDescriptor(proxy, '_foo')
// undefined
Object.getOwnPropertyDescriptor(proxy, 'baz')
// { value: 'tar', writable: true, enumerable: true, configurable: true }

//getPrototypeOf()
var proto = {};
var p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
});
print(Object.getPrototypeOf(p) === proto) // true

//isExtensible()
//isExtensible方法拦截Object.isExtensible操作。
var po = new Proxy({}, {
  isExtensible: function(target) {
    console.log("called");
    return true;
  }
});

let rs = Object.isExtensible(po);
print(rs);
// "called"
// true

//这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
/*
var p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p) // 报错
*/

//ownKeys()
//ownKeys方法用来拦截对象自身属性的读取操作。
let target_own = {
  a: 1,
  b: 2,
  c: 3
};

let handler_own = {
  ownKeys(target) {
    return ['a'];
  }
};

let proxy_own = new Proxy(target_own, handler_own);

let res = Object.keys(proxy_own);//// [ 'a' ]
print(res);

let o = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
};

let h = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }
};

let py = new Proxy(o, h);
for (let key of Object.keys(py)) {
  console.log(o[key]);
}
// "baz"
/*
注意，使用Object.keys方法时，有三类属性会被ownKeys方法自动过滤，不会返回。

目标对象上不存在的属性
属性名为 Symbol 值
不可遍历（enumerable）的属性
*/
let tt = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.for('secret')]: '4',
};

Object.defineProperty(tt, 'key', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: 'static'
});

let hh = {
  ownKeys(target) {
    return ['a', 'd', Symbol.for('secret'), 'key'];
  }
};

let pp = new Proxy(tt, hh);

let restt = Object.keys(pp)
print(restt)
//解释:上面代码中，ownKeys方法之中，显式返回不存在的属性（d）、Symbol 值（Symbol.for('secret')）、不可遍历的属性（key），结果都被自动过滤掉。
// ['a']

//for...in循环也受到ownKeys方法的拦截。
const hello = { hello: 'world' };
const fil_k = new Proxy(hello, {
  ownKeys: function () {
    return ['a', 'b'];
  }
});

for (let key in fil_k) {
  console.log(key); // 没有任何输出
}

//ownKeys方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。
/*
var obj = {};

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, true, undefined, null, {}, []];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 123 is not a valid property name
*/

//如果目标对象自身包含不可配置的属性，则该属性必须被ownKeys方法返回，否则报错。
/*
var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['b'];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'
*/

//如果目标对象是不可扩展的（non-extensition），这时ownKeys方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。
/*
var obj = {
  a: 1
};

Object.preventExtensions(obj);

var p = new Proxy(obj, {
  ownKeys: function(target) {
    return ['a', 'b'];
  }
});

Object.getOwnPropertyNames(p)
// Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
*/

//preventExtensions()
//preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
//这个方法有一个限制，只有目标对象不可扩展时（即Object.isExtensible(proxy)为false），proxy.preventExtensions才能返回true，否则会报错。
/*
var p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p) // 报错
*/

//setPrototypeOf() 
//setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。
/*
var handler = {
  setPrototypeOf (target, proto) {
    throw new Error('Changing the prototype is forbidden');
  }
};
var proto = {};
var target = function () {};
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto);
// Error: Changing the prototype is forbidden
*/
//注意，该方法只能返回布尔值，否则会被自动转为布尔值。另外，如果目标对象不可扩展（extensible），setPrototypeOf方法不得改变目标对象的原型。