//目的:表明let只能在代码块内有效,而var不一样
{
	let a = 10 
	var b = 1
}
//console.log(a)//报错
console.log(b) //正常