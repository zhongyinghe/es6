//函数参数的解构赋值
function add([x,y]) {
	return x + y
}

let z = add([1,2])
console.log(z);


console.log([[1,2],[3,4]].map(([a, b]) => a + b))//[3, 7]

//函数参数的解构也可以使用默认值
function move({x = 0, y = 0} = {}) {
	return [x, y]
}

console.log(move({x: 3, y: 8}))  // [3, 8]
console.log(move({x: 3})) // [3, 0]
console.log(move({})) // [0, 0]
console.log(move()) // [0, 0]

console.log("=================================")
//它与上个函数不同，这个的x,y没有默认值
function leave({x, y} = {x: 0, y:0}) {
	return [x, y]
}

console.log(leave({x: 3, y: 8})) // [3, 8]
console.log(leave({x: 3})) // [3, undefined]
console.log(leave({})) // [undefined, undefined]
console.log(leave()) // [0, 0]

//undefined就会触发函数参数的默认值
let k = [1, undefined, 3].map((x = 'yes') => x)
console.log(k)