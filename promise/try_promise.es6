function print(msg) {
	console.log(msg);
}

//示例一
const f = () => print('now');
Promise.resolve().then(f);
print('next');
// next
// now
//解释:f是同步函数，它会在本轮事件循环的末尾执行。

//希望:
//让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API
Promise.try(f);
console.log('next');
// now
// next