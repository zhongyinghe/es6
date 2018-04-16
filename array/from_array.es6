//2、Array.from

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1)

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2)

//只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组
let strArr = Array.from('hello');//['h', 'e', 'l', 'l', 'o']
console.log(strArr)

let namesSet = new Set(['a', 'b'])
let setArr = Array.from(namesSet) // ['a', 'b']
console.log(setArr)

//如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。
let newArr = Array.from([1, 2, 3]);// [1, 2, 3]
console.log(newArr)

//比较扩展运算符和Array.from
//比较:扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换
//比较:Array.from方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。
//因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
//例如:
Array.from({ length: 3 });// [ undefined, undefined, undefined ]
//解释:Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。扩展运算符转换不了这个对象。

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
let arrmap = Array.from([1, 2, 3], x => x * x);// [1, 4, 9]
console.log(arrmap)

let barr = Array.from([1, , 2, , 3], (n) => n || 0); // [1, 0, 2, 0, 3]
console.log(barr)

//Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。
//因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。
function countSymbols(string) {
  return Array.from(string).length;
}

//总结:
//能够把类数组对象转化为数组
//只要是部署了 Iterator 接口的数据结构，Array.from都能将其转为数组
//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
//比较总结:扩展运算符和Array.from如果想转为数组，尽量使用Array.from