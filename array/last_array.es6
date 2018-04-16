//6、fill()方法
let arr = ['a', 'b', 'c'].fill(7); // [7, 7, 7]
console.log(arr);

let arr2 = new Array(3).fill(7);// [7, 7, 7]
console.log(arr2);

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
let arr3 = ['a', 'b', 'c'].fill(7, 1, 2); // ['a', 7, 'c']
console.log(arr3);
//解释:上面代码表示，fill方法从 1 号位开始，向原数组填充 7，到 2 号位之前结束

//注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
let arr4 = new Array(3).fill({name: "Mike"});
arr4[0].name = "Ben";
console.log(arr4);// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr5 = new Array(3).fill([]);
arr5[0].push(5);
console.log(arr5);// [[5], [5], [5]]

//总结:fill主填充

//7、entries()，keys()和values()
//说明:entries()，keys()和values()——用于遍历数组.
//唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

//总结:entries()，keys()和values()——用于遍历数组

//8、includes()方法
//说明:返回一个布尔值，表示某个数组是否包含给定的值

let has2 = [1, 2, 3].includes(2);     // true
let has4 = [1, 2, 3].includes(4);    // false
let hasN = [1, 2, NaN].includes(NaN); // true
console.log(has2, has4, hasN);

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
//解释:该方法的第二个参数表示搜索的起始位置，默认为0

[NaN].indexOf(NaN);
// -1
//解释:ndexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。
//二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判

[NaN].includes(NaN);
// true

//总结:
//includes判断数组是否包含某个元素，返回true/false 

//9、数组空位
let empty = Array(3);//// [ , , ]
console.log(empty);

0 in [undefined, undefined, undefined]; // true
0 in [, , ,]; // false
//解释:注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。

//注意:ES6 则是明确将空位转为undefined

let arrE = [, ,];
for (let i of arrE) {
  console.log(1);
}
// 1
// 1

//总结:
//数组空位注意在各个函数或者语句中识别情况

//综合总结:
//fill填充方法
//entries()，keys()和values()——用于遍历数组.
//includes判断数组是否包含某个元素，返回true/false 
//数组空位注意在各个函数或者语句中识别情况
