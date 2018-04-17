function print(msg) {
	console.log(msg);
}
//4、Object.is()
print(Object.is('foo', 'foo'));//true
print(Object.is({}, {}));//false

print(+0 === -0);//true
print(NaN === NaN);//false
print(Object.is(+0, -0));//false
print(Object.is(NaN, NaN));//true

//总结:Object.is()主要用来判断两个值是否相等的