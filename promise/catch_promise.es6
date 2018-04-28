function print(msg) {
	console.log(msg);
}

//catch示例
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
//示例一
getJSON(404).then(arr => {
	for (v of arr){
		print(v);
	}
}).catch(err => print(err));


//示例二
getJSON(200).then(arr => {
	for (v of arr){
		print(v);
	}
	return new Promise(function(resolve, reject){
		reject("执行后再抛错误");
	});
}).catch(err => print(err));

//解释:then抛出的错误,catch也能够捕获到

//示例三
const p = new Promise(function(resolve, reject){
	reject('报错报错报错');
});
p.catch(err => print(err));

//示例四
//如果 Promise 状态已经变成resolved，再抛出错误是无效的
const promise = new Promise(function(resolve, reject){
	resolve('ok');
	throw new Error('test');
});
promise.then(value => print(value)).catch(err => print(err));
//解释:上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了

//示例五
//Promise 对象的错误具有“冒泡”性质
/*
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
*/
//解释:上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。

//示例六
//探讨错误捕获
new Promise((resolve, reject) => {
	resolve(x + 2);
}).catch(err => print(err)).then(() => print('carry on'));
//ReferenceError: x is not defined
//carry on
//解释:上面代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。如果没有报错，则会跳过catch方法。
//例如:
//示例七
Promise.resolve().catch(() => print('hello')).then(() => print('world'));//world

//示例八
//探讨连续catch错误
Promise.reject('hello world').catch(err => {
	print(err);
	y + 2;
}).catch(err => print(err)); //ReferenceError: y is not defined

