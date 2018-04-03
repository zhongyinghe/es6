console.log(foo);//这里输出undefined,正常输出,若没有下面那个var foo = 2也会报错的
var foo = 2;

console.log(bar);
let bar = 5  //这里输出bar is not defined,直接报错的

//解析:let的变量必须先声明后使用;var的变量可以先使用后声明，但这样它是undefined