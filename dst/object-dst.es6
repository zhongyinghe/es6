//什么是对象的解构赋值
let {foo, bar} = {foo: "aaa", bar: "bbb"}
console.log(foo, bar)

//解释:对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz) //undefined;变量没有对应的同名属性，导致取不到值，最后等于undefined

//如果变量名与属性名不一致，必须写成下面这样
let { foo: baz2 } = { foo: 'aaa', bar: 'bbb' };
console.log(baz2)

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f, l)

//$$$对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者$$$
let { foo3: foo3, bar3: bar3 } = { foo3: "aaa", bar3: "bbb" };
console.log(foo3, bar3)

//用于嵌套结构的对象
let obj2 = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p,p: [x, { y }] } = obj2;
console.log(x, y, p)

const node = {
	loc: {
		start: {
			line: 1,
			column: 5
		}
	}
}

let {loc, loc: {start}, loc:{start: {line}}} = node
console.log(loc)
console.log(start)
console.log(line)
