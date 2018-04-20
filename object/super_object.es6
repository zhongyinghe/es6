function print(msg) {
	console.log(msg);
}

//super
//说明:this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
print(obj.find());//hello

const proto2 = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj2 = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj2, proto2);

obj2.foo();//world
//解释:上面代码中，super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world。

//总结:super指向当前对象的原型对象