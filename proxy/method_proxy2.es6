function print(msg) {
	console.log(msg);
}

//apply 
var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
print(p());// "I am the proxy"

var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};

function sum (left, right) {
  return left + right;
};

var p_f = new Proxy(sum, twice);
print(p_f(1, 2))
print(p_f.call(null, 5, 6))
print(p_f.apply(null, [7, 8]))
//解释:上面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。
//直接调用Reflect.apply方法，也会被拦截
//Reflect.apply(p_f, null, [9, 10]) // 38

print('-----------上面示例:apply方法------------')

//has
var hdl_has = {
  has (target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }
};
var target_has = { _prop: 'foo', prop: 'foo' };
var proxy_has = new Proxy(target_has, hdl_has);
print('_prop' in proxy_has) // false

//如果原对象不可配置或者禁止扩展，这时has拦截会报错。
/*
var obj = { a: 10 };
Object.preventExtensions(obj);

var p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p // TypeError is thrown
*/

let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};

let hdl_h = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}

let oproxy1 = new Proxy(stu1, hdl_h);
let oproxy2 = new Proxy(stu2, hdl_h);

print('score' in oproxy1);
// 张三 不及格
// false

print('score' in oproxy2);
// true
for (let a in oproxy1) {
  console.log(oproxy1[a]);
}
// 张三
// 59

for (let b in oproxy2) {
  console.log(oproxy2[b]);
}
// 李四
// 99
//解释:上面代码中，has拦截只对in运算符生效，对for...in循环不生效

print('-----------上面示例:has方法------------')

//construct()
/*
construct方法可以接受两个参数
	construct方法可以接受两个参数
	args：构建函数的参数对象
*/

var fun = new Proxy(function () {}, {
  construct: function(target, args) {
    console.log('called: ' + args.join(', '));
    return { value: args[0] * 10 };
  }
});

let value = (new fun(1)).value
print(value);
// "called: 1"
// 10

//construct方法返回的必须是一个对象，否则会报错。
/*
var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p() // 报错
*/

//总结:
//apply的使用:apply (target, ctx, args){}
//apply方法拦截函数的调用、call和apply操作

//has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符

//construct方法用于拦截new命令