function print(msg) {
	console.log(msg);
}

//2、实例方法
var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, property) {
    if (property in target) { //判断属性是否在目标对象中
      return target[property];
    } else {
      throw new ReferenceError("Property \"" + property + "\" does not exist.");
    }
  }
});
print(proxy.name); // "张三"
//print(proxy.age); // 抛出一个错误

//get方法可以继承
let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo // "GET foo"
//解释:上面代码中，拦截操作定义在Prototype对象上面，所以如果读取obj对象继承的属性时，拦截会生效。

function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
let third = arr[-1] // c
print(third);

//下面是一个get方法的第三个参数的例子。
const proxy2 = new Proxy({}, {
  get: function(target, property, receiver) {
    return receiver;
  }
});
print(proxy2.getReceiver === proxy2) // true

//如果一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错。
/*
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
*/

print('-----------上面示例:get方法------------')

//set操作
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
  }
};

let p = new Proxy({}, validator);

p.age = 100;

//通过代理，可以防止读私有属性
const hdl_pri = {
  get (target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const tgt = {};
const pxy = new Proxy(tgt, hdl_pri);
//pxy._prop
// Error: Invalid attempt to get private "_prop" property
//pxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property

//set方法第四个参数的例子。
const hdl_f = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const pry = new Proxy({}, hdl_f);
pry.foo = 'bar';
print(pry.foo === pry) // true

/*
const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
myObj.foo === myObj // true
*/

//如果目标对象自身的某个属性，不可写或不可配置，那么set方法将不起作用。
/*
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false,
});

const handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
proxy.foo // "bar"
*/
print('-----------上面示例:set方法------------')

//总结:
//Proxy的get方法，注意它不能代理的对象设置