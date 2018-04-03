//const实际上保证的是变量指向的那个内存地址不得改动。
//但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，
//至于它指向的数据结构是不是可变的，就完全不能控制了

const foo = {};
// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log(foo.prop)

//foo = {} //报错

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
//a = ['Dave'];    // 报错


//对象冻结，应该使用Object.freeze方法。
const bar = Object.freeze({});
bar.prop = 456//冻结了对象，所以这个赋值无效
console.log(bar.prop)//结果是undefined

const tt = {
	aa: 123,
	bb: 'abc'
}

Object.freeze(tt)
tt.aa = 369//赋值无效，因为被冻结了
console.log(tt.aa)//结果123

//将对象彻底冻结的函数
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};