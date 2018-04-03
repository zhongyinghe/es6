function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

f1()
//解释:有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。


{{{{
  {let insane = 'Hello World'}
  //console.log(insane); // 报错
}}}};

{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};