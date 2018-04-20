function print(msg) {
	console.log(msg);
}

//7、Object.getOwnPropertyDescriptors()

const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

let props = Object.getOwnPropertyDescriptors(obj)
print(props);

print('-----------------------------')

//该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
const source = {
  set foo(value) {
    console.log(value);
  }
};

const target1 = {};
Object.assign(target1, source);

let fooObj = Object.getOwnPropertyDescriptor(target1, 'foo');
print(fooObj);
// { value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true }

print('-----------------------------')

//解决方法:Object.getOwnPropertyDescriptors方法配合Object.defineProperties方法，就可以实现正确拷贝
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
let fObj = Object.getOwnPropertyDescriptor(target2, 'foo');
print(fObj);

print('-----------------------------')

//应用二:Object.getOwnPropertyDescriptors方法的另一个用处，是配合Object.create方法，将对象属性克隆到一个新对象。这属于浅拷贝。
const clone = Object.create(Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj));
  print(clone);

print('-----------------------------')

//应用三:Object.getOwnPropertyDescriptors方法可以实现一个对象继承另一个对象
/*
const obj = Object.create(
  prot,
  Object.getOwnPropertyDescriptors({
    foo: 123,
  })
);
//注释:prot是属性对象
*/

print('-----------------------------')

let mix = (object) => ({
  with: (...mixins) => mixins.reduce(
    (c, mixin) => Object.create(
      c, Object.getOwnPropertyDescriptors(mixin)
    ), object)
});

// multiple mixins example
let a = {a: 'a'};
let b = {b: 'b'};
let c = {c: 'c'};
let d = mix(c).with(a, b);
print(d.c);

//总结:
//Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象
//该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
//配合Object.create方法，将对象属性克隆到一个新对象。这属于浅拷贝。
//可以实现一个对象继承另一个对象(Object.create)