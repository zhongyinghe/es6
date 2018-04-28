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

//说明:不管 Promise 对象最后状态如何，都会执行的操作

getJSON(200).then(arr => print(arr)).catch(err => print(err)).finally(() => print('无论如何都会执行操作'));
//解释:上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
//注意:finally方法的回调函数不接受任何参数