1、遍历接口:凡是具有Symbol.iterator属性的数据结构都是可遍历的

2、形式:
```
[Symbol.iterator]:function(){
}
```
3、next()方法的返回值
```
{value:xxxx, done: true/false}
```
4、有哪些数据结构已经实现了Symbol.iterator接口?<br>
Array、Map、Set和string

5、让一个对象可遍历<br>
1)部署Symbol.iterator属性<br>
2)Symbol.iterator返回的对象提供next方法，而next()返回对象是{value,xxx, done: false/true}<br>
`让class可遍历`
```
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
```
`让对象可遍历`
```
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

```
