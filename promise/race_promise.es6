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

//说明:Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
//const p = Promise.race([p1, p2, p3]);
//只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变

//示例一:
const promises = [200, 404, 505].map(code => getJSON(code));
Promise.race(promises).then(arr => print(arr)).catch(err => print(err));

//应用示例:
/*
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p
.then(console.log)
.catch(console.error);
*/
//解释:上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。