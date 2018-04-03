//隐蔽的"死区"
function bar(x = y, y = 2) {
	return [x, y]
}

//修正方法是:
function bar(y = 2, x = y) {
	return [x, y]
}

//解析:必须先声明，后使用。