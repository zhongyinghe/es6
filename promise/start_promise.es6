function print(msg) {
	console.log(msg);
}

//promise入门示例
function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(100).then((value) => {
	print(value);//done
});

//示例二
const getJSON = function(code) {
	const promise = new Promise(function(resolve, reject){
		if (code == 200) {
			let data = `{name: "张三", sex: "男", height: "167cm"}`;
			resolve(data);
		}else {
			//reject(new Error("获取数据失败"));
			reject("获取数据失败");
		}
	});
	return promise;
}

getJSON(200).then(value => void print(value), err => void print(err));

//示例三
const p1 = new Promise(function(resolve, reject){
	//setTimeout(() => reject(new Error("fail")), 3000);
	setTimeout(() => reject("fail"), 3000);
});

const p2 = new Promise(function(resolve, reject){
	setTimeout(() => resolve(p1), 1000);
});

p2.then(result => print(result)).catch(error => print(error));


//注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
new Promise(function(resolve, reject){
	resolve(2);
	print(1);
}).then(rs => print(rs));