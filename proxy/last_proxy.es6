function print(msg) {
	console.log(msg);
}

//3、Proxy.revocable()
let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
//proxy.foo // TypeError: Revoked
//解释:Proxy.revocable方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。
//上面代码中，当执行revoke函数之后，再访问Proxy实例，就会抛出一个错误。

//4、this 问题
// Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
const tg = {
  m: function () {
    console.log(this === proxy);
  }
};
const hdl = {};

const pxy = new Proxy(tg, hdl);

tg.m() // false
pxy.m()  // 猜想:true;实际:false

//由于this指向的变化，导致 Proxy 无法代理目标对象
const _name = new WeakMap();

class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}

const jane = new Person('Jane');
print(jane.name) // 'Jane'

const pr = new Proxy(jane, {});
print(pr.name) // undefined
//解释:上面代码中，目标对象jane的name属性，实际保存在外部WeakMap对象_name上面，通过this键区分。
//由于通过proxy.name访问时，this指向proxy，导致无法取到值，所以返回undefined。

//有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性。
/*
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

proxy.getDate();
// TypeError: this is not a Date object.
*/
//解释:上面代码中，getDate方法只能在Date对象实例上面拿到，如果this不是Date对象实例就会报错。这时，this绑定原始对象，就可以解决这个问题。
const target2 = new Date('2015-01-01');
const handler2 = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};
const proxy2 = new Proxy(target2, handler2);


//5、实例：Web 服务的客户端 
/*
const service = createWebService('http://example.com/data');

service.employees().then(json => {
  const employees = JSON.parse(json);
  // ···
});
function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl+'/' + propKey);
    }
  });
}
*/
