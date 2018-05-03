function print(msg) {
	console.log(msg);
}

//3、调用 Iterator 接口的场合
//1)解构赋值
let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
print(x);
print(y);

//2)扩展运算符
var str = 'hello';
print([...str]);

//结论:只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。

//3)yield*
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();
print(iterator.next());
print(iterator.next());
print(iterator.next());
print(iterator.next());
print(iterator.next());
print(iterator.next());

for (let val of generator()) {
	print(val);//1 2 3 4 5
}
//结论:yield的数据可以使用for...of...遍历

//4、字符串的iterator接口
//说明:字符串是一个类似数组的对象，也原生具有 Iterator 接口

//5、Iterator 接口与 Generator 函数 
let myIterable = {
	[Symbol.iterator]: function* () {
		yield 1;
		yield 2;
		yield 3;
	}
}
print([... myIterable]);// [1, 2, 3]

//总结:只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。
//yield的数据可以使用for...of...遍历
//字符串是一个类似数组的对象，也原生具有 Iterator 接口,所以可以使用扩展运算符把它变成数组
//yield的数据是可遍历的