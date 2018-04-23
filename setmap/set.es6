function print(msg) {
	console.log(msg);
}

//1、Set
//1)基本用法
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
	print(i);
}

//Set 函数可以接受一个数组作为参数，用来初始化。
const set = new Set([1, 2, 3, 4, 4]);
print(set);//输出的是Set集合
let arr = [...set];//这个输出的是数组.所以扩展运算符可以把Set变成数组
print(arr);

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
let size = items.size; // 5
print(size);

//应用:可以作为去除数组重复元素的方法
print('--------上面示例:数组作为Set的参数-----------')

//向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值
//Set 内部判断两个值是否不同,使用的类似于精确相等运算符（===）
let set2 = new Set();
let a = NaN;
let b = NaN;
set2.add(a);
set2.add(b);
print(set2);// Set {NaN}

//两个对象总是不相等的
let s2 = new Set();
s2.add({});
print(s2);//Set{{}}
s2.size; // 1

s2.add({});
print(s2);//Set{{},{}}
s2.size; // 2

print('--------上面示例:Set的相等判断-----------')

//总结:
//set是元素不可重复的集合
//数组可作为Set的参数
//Set的相等判断方法