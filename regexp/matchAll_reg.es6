var reg = /t(e)(st(\d?))/g;
var str = 'test1test2test3';
var matches = [];
var match;
while(match = reg.exec(str)) {
	matches.push(match)
}

console.log(matches)

console.log("------------------------")

const string = 'test1test2test3';

// g 修饰符加不加都可以
const regex = /t(e)(st(\d?))/g;

for (const match2 of string.matchAll(regex)) {
  console.log(match2);
}

console.log("------------------------")

//转化为数组
console.log([...string.matchAll(regex)])

console.log("------------------------")

console.log(Array.from(string.matchAll(regex)))