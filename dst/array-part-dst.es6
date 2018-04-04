//不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
let [x, y] = [1, 2, 3]
console.log(x, y)

let [a, [b], d] = [1, [2, 3], 4];

console.log(a, b, d);

//如果等号的右边不是数组,那么将会报错
//let [foo] = {};//1,false,NaN,undefined,null, {}

//对于 Set 结构，也可以使用数组的解构赋值。
let [x1, y1, z1] = new Set(['a', 'b', 'c'])
console.log(x1, y1, z1)