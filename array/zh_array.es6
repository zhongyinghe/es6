//3、Array.of
//说明:用于将一组值，转换为数组。它的目的:弥补数组构造函数Array()的不足
let arr = Array.of(3, 11, 8);
console.log(arr)

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
//解释:上面代码中，Array方法没有参数、一个参数、三个参数时，返回结果都不一样。
//只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。

//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

//总结:可以用来创建数组

//4、copyWithin
let arr2 = [1, 2, 3, 4, 5].copyWithin(0, 3);
console.log(arr2) //// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
let arr3 = [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
console.log(arr3);
//[4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

//总结:复制指定位置的数据来覆盖指定位置的数据

//5、find()方法和findIndex()方法
let rs = [1, 4, -5, 10].find((n) => n < 0);
console.log(rs);// -5
//解释:它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
//如果没有符合条件的成员，则返回undefined。

let rr = [1, 5, 10, 15].find(value => value > 9);
console.log(rr);

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
//解释:上面代码中，find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

let index = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
});// 2;是索引位置
console.log(index);
//解释:数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

//这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
let age = [10, 12, 26, 15].find(f, person);    // 26
console.log(age)
//解释:上面的代码中，find函数接收了第二个参数person对象，回调函数中的this对象指向person对象。

//这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足
let a = [NaN].indexOf(NaN);
// -1

let b = [NaN].findIndex(y => Object.is(NaN, y));
// 0
//解释:面代码中，indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。

//总结:
//Array.of拥有创建新数组
//copyWithin复制数组元素到指定位置
//find()和findIndex()寻找符合条件的数组(分别返回数据和索引)