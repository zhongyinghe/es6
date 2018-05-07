1、如何理解Generator?
```
Generator是一种异步编程的解决方案
Generator是状态机
```
2、Generator形式
```
function* funcName() {
  yield value1;
  yield value2;
  return value3;
}
```
3、Generator函数是分段执行的
```
yield 表达式 是暂停执行的标记
next()方法可以恢复执行
返回值是: {value: val, done:false/true}
```
4、next()方法的运行逻辑
```
next()一次，就会在第一个yield表达式出停止，并返回{value:xxx, done:false/true}
next()第二次，则在第二个yield处停止
以此类推
当执行到return时把return的表达式作为value的值，done为true返回，结束Generator函数的遍历
```
