function print(msg) {
	console.log(msg);
}

//1、概述
//凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
//问:如何证明它独一无二?
let s = Symbol();
print(typeof s);//// "symbol"

print('--------上面示例:入门----------')

//注意事项:
//Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象.
//Symbol它是一种类似于字符串的数据类型

let s1 = Symbol('foo');
let s2 = Symbol('bar');

print(s1);// Symbol(foo)
print(s2);// Symbol(bar)

print(s1.toString());// "Symbol(foo)"
print(s2.toString());// "Symbol(bar)"
//解释:有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
//推测:不加参数，它们仍然是独一无二的，只是我们人无法很好区别而已
print('--------上面示例:加参数进行区别----------')
//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
print(sym) // Symbol(abc)

print('--------上面示例:参数为对象----------')

//注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况
let sy1 = Symbol();
let sy2 = Symbol();

print(sy1 === sy2) // false

// 有参数的情况
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

print(sym1 === sym2) // false
print('--------上面示例:参数相同，但是它们不是同一对象----------')

//Symbol 值不能与其他类型的值进行运算，会报错。
let symb = Symbol('My symbol');

//"your symbol is " + symb//报错

//Symbol 值可以显式转为字符串,也可以转为布尔值，但是不能转为数值
print(symb.toString());// 'Symbol(My symbol)'
print(Boolean(symb));// true
//Number(symb)//报错

print('--------上面示例:Symbol不能与其他类型值运算，可转字符串和布尔值，不能转数值----------')

//总结:引入symbol背景
//Symbol是一种类似于字符串的数据类型,不是对象
//加参数让人易区别
//Symbol不能与其他类型进行运算