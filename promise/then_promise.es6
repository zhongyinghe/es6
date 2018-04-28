function print(msg) {
	console.log(msg);
}

//then示例1
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

getJSON(200).then(arr => {
	return arr.map(x => x * 2);
}).then(arr => {
	for (let v of arr) {
		print(v);
	}
});

//示例2
getJSON(404).then(arr => {
	return arr.map(x => x * 2);
}, 
() => {
	return getJSON(200);
}).then(arr => {
	for (let v of arr) {
		print(v);
	}
});

//如果返回新的promise对象,后一个回调函数，就会等待新的Promise对象的状态发生变化，才会被调用