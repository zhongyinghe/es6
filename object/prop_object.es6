function print(msg) {
	console.log(msg);
}

//print('hello object');
//1、属性的简洁表示法
const foo = 'bar';
const baz = {foo}; // {foo: "bar"}
print(baz);

//等同于
//const baz = {foo: foo};
//解释:上面代码表明，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值
//上面是属性简写

print("--------上面是示例1--------------");

function f(x, y) {
  return {x, y};
}
print(f(1,2)); //// Object {x: 1, y: 2}

print("--------上面是示例2--------------");

let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,//属性简写

  // 等同于hello: function ()...
  //这里是方法简写
  hello() { console.log('我的名字是', this.name); }

};

Person.hello();
print(Person);

print("--------上面是示例3--------------");

//方法简写.CommonJS 模块输出一组变量，就非常合适使用简洁写法。
let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };//方法简写在这里

print("--------上面是示例4--------------");

const cart = {
  _wheels: 4,

  get wheels () {
	print('get func');
    return this._wheels;
  },

  set wheels (value) {
	print('set func');
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}

cart.wheels = 10;
print(cart.wheels);

print("--------上面是示例5--------------");

//如果某个方法的值是一个 Generator 函数，前面需要加上星号
const obj = {
  * m() {
    yield 'hello world';
  }
};

//总结:属性简写和方法简写(具体看示例)
//如何把属性名和值进行简写
//如何把方法名和方法体进行简写