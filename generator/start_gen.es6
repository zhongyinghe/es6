function print(msg) {
	console.log(msg);
}

//generator入门
//示例一
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

let hw = helloWorldGenerator();
print(hw.next());
print(hw.next());
print(hw.next());
print(hw.next());

print('-------上面示例1-----------');

//示例2
function* f() {
	print('执行了');
}

var generator = f();
setTimeout(function(){
	generator.next();
}, 2000);

print('-------上面示例2-----------');


//示例3
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {
	var length = a.length;
	for (var i=0; i < length; i++) {
		var item = a[i];
		
		if (typeof item !== 'number') {
			yield* flat(item);
		} else {
			yield item;
		}
	}
};

for (let v of flat(arr)) {
	print(v);
}

print('-------上面示例3-----------');

//示例4:yield用在表达式中必须使用(),否则报错
function* demo() {
	print('hello' + (yield));
	print('world' + (yield 123));
}

for(let vv of demo()) {
	print(vv);
}