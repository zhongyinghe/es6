function print(msg) {
	console.log(msg);
}

const getJSON = function(code) {
	const promise = new Promise(function(resolve, reject){
		if (code == 200) {
			let data = [10, 20, 30, 40, 50];
			resolve(data);
		}else {
			//reject(new Error("获取数据失败"));
			reject("获取数据失败");
		}
	});
	return promise;
}

//说明:Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
//const p = Promise.all([p1, p2, p3]);
//只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled
//只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected

//示例一:
const promises = [200, 404, 505].map(code => getJSON(code));
Promise.all(promises).then(arr => print(arr)).catch(err => print(err));

//示例二
//注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]
//解释:上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，
//p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，
//因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

//如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。

