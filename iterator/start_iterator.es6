function print(msg) {
	console.log(msg);
}

//iterator入门
function makeIterator(array) {
	var nextIndex = 0;
	return {
		next: function() {
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false}:
				{value: undefined, done: true};
		}
	};
}

var it = makeIterator(['a', 'b']);
print(it.next());
print(it.next());
print(it.next());

//结论:返回一个对象,该对象有next方法,而next方法返回一个对象(有value和done属性)

const obj = {
	[Symbol.iterator]: function() {
		return {
			next: function() {
				return {
					value: 1, 
					done: true
				};
			}
		};
	}
};

for (let v of obj) {
	print(v);//没有任何输出,为什么呢?答:因为done=true,如果把done该为false,则无限循环下去
}
//为什么这里无法遍历?原因是什么?
//答:原因在上面
//结论:如果一个对象有Symbol.iterator属性并且实现了next方法，则它就可以循环；
//若返回的done为true,则表明循环结束，无法输出内容

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();//获取遍历器对象
print(iter.next());

//让一个对象可以进行遍历
//1)部署Symbol.iterator属性
//2)提供next方法，并返回对象

class RangeIterator {
	constructor(start, stop) {
		this.start = start;
		this.stop = stop;
	}
	
	[Symbol.iterator](){return this;}//Symbol.iterator属性
	next() {	//next方法
		var value = this.start;
		if (value < this.stop) {
			this.start++;
			return {value: value, done: false};
		}
		
		return {value: undefined, done: true};
	}
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (let v of range(0, 10)) {
	print(v);
}
print('-------------------------------');
//原型上实现遍历器
function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
  var iterator = { next: next };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return { done: false, value: value };
    } else {
      return { done: true };
    }
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
  console.log(i); // 1, 2, 3
}

print('----------------------');

//对象添加 Iterator 接口的例子
let myObj = {
	data: ["hello", "world"],
	[Symbol.iterator]() {
		const self = this;
		let index = 0;
		return {
			next() {
				if(index < self.data.length) {
					return {
						value: self.data[index++],
						done: false
					};
				} else {
					return { value: undefined, done: true };
				}
			}
		}
	}
}

for (let v of myObj) {
	print(v);
}

print('----------------------');

//下面是另一个类似数组的对象调用数组的Symbol.iterator方法的例子
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}

//注意，普通对象部署数组的Symbol.iterator方法，并无效果。
/*
let iterable = {
  a: 'a',
  b: 'b',
  c: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // undefined, undefined, undefined
}
*/


//总结:让一个对象可遍历
//1)部署Symbol.iterator属性,并返回具有next()方法的对象
//2)提供next方法，并返回对象来判断循环是否结束

//类似数组的对象可以设置为数组的Symbol.iterator来进行遍历

