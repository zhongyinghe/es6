function print(msg) {
	console.log(msg);
}

var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.count = 1
//  setting count!

++obj.count;
//  getting count!
//  setting count!
//  2

print("\n");

var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

print(proxy.time);
print(proxy.name);

print('-----------上面示例:proxy入门------------')

//注意，要使得Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象进行操作。
//如果handler没有设置任何拦截，那就等同于直接通向原对象。
var target = {};
var handler = {};
var proxy2 = new Proxy(target, handler);
proxy2.a = 'b';
target.a // "b"
print(proxy2.a);

print('-----------上面示例:proxy不设置任何拦截------------')

//一个技巧是将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
var object = { proxy: new Proxy(target, handler) };

//Proxy 实例也可以作为其他对象的原型对象。
let obj2 = Object.create(proxy);
print(obj2.time)

print('-----------上面示例:proxy可以作为对象的属性或者原型对象------------')

//同一个拦截器函数，可以设置拦截多个操作。
var fhandler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, fhandler);

print(fproxy(1, 2)); // 1
print(new fproxy(1, 2)) // {value: 2}
print(fproxy.prototype === Object.prototype)//true
print(fproxy.foo === "Hello, foo")//true

print('-----------上面示例:proxy设置多个拦截操作------------')

//总结:
//proxy: var proxy = new Proxy(target, handler);
