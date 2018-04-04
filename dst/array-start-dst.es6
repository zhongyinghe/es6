//什么是数组解构
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let [foo, [[bar], baz]] = [4, [[5], 6]]
console.log(foo, bar, baz)

let [,,third] = ["foo", "bar", "baz"]
console.log(third)

let [x, , y] = [1, 2, 3];
console.log(x, y)

let [head, ...tail] = [1, 2, 3, 4]
console.log(head, tail)

let [x1, y1, ...z1] = ['a'];
console.log(x1) //a
console.log(y1) //undefined;如果解构不成功，变量的值就等于undefined。
console.log(z1) //[]