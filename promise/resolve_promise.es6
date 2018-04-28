function print(msg) {
	console.log(msg);
}

//1)参数是一个 Promise 实例
//如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
const getData = function(code) {
	return new Promise((resolve, reject) => {
		if (code == 200) {
			resolve('success');
		} else {
			reject('fail');
		}
	});
}
const p = getData(200);
Promise.resolve(p).then(value => print(value)).catch(err => print(err));

//2)参数是一个thenable对象
//Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
let thenable = {
	then: function(resolve, reject) {
		resolve(42)
	}
};

const p1 = Promise.resolve(thenable);
p1.then(value => print(value));

//3)参数不是具有then方法的对象，或根本就不是对象
//如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
const p2 = Promise.resolve('Hello');
p2.then(str => print(str));//Hello

//4)不带有任何参数
//Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。

Promise.resolve().then(() => print('不带任何参数'));//不带任何参数