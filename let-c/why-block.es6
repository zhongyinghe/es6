//为什么要使用块作用域
var tmp = new Date()

function f() {
	console.log(tmp)
	
	if(false) {
		var tmp = "hello, world"//如果这样设置了，则变量提升；它会覆盖了外部变量造成tmp为undefined
								//如果没有这段代码，则会使用外部变量
	}
}

f()

var s = "hello"

for(var i = 0; i < s.length; i++) {
	console.log(s[i])
}

console.log(i)//5
//解释:变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。