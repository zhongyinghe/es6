//3、Number.parseInt和()Number.parseFloat
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

//解释:这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。

console.log("=========================")

//4、Number.isInteger()
Number.isInteger(25) // true
Number.isInteger(25.1) // false

Number.isInteger(25) // true
Number.isInteger(25.0) // true
//解释:整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。

Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
//解释:如果参数不是数值，Number.isInteger返回false

Number.isInteger(3.0000000000000002) // true
//解释:Number.isInteger的参数明明不是整数，但是会返回true。
//原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。

Number.isInteger(5E-324) // false
Number.isInteger(5E-325) // true
//解释:5E-325由于值太小，会被自动转为0，因此返回true。

console.log("=========================")

//5、Number.EPSILON
//说明:Number.EPSILON实际上是 JavaScript 能够表示的最小精度。
//误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

console.log("=========================")

//6、安全整数和 Number.isSafeInteger() 
//说明:Number.isSafeInteger()则是用来判断一个整数是否落在Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量范围之内
Number.isSafeInteger(9007199254740992) //false 
Number.isSafeInteger(9007199254740991) // true
console.log(Math.pow(2, 53))

//总结:判断一个数是否为整数Number.isInteger()