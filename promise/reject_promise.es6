function print(msg) {
	console.log(msg);
}

//Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
Promise.reject('出错了').catch(err => print(err));//出错了 

//Promise.reject()传入具有then方法的对象
let thenable = {
	then(resolve, reject) {
		reject('出错了');
	}
}

Promise.reject(thenable).catch(err => print(err === thenable));//true
//解释:上面代码中，Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。