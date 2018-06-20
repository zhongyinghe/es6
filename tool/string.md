1、字符串截取-substr
```
let str = "abcdefg"
let rs = substr(1, 3)//bcd
//解释:第一个是索引;第二个参数是长度
```
2、字符串截取-substring
```
let str = "abcdefg"
let rs = substring(1, 5) //bcde
//解释:第一个参数是索引;第二个参数也是索引;但字符不包括第二个参数的索引
```
3、字符串替换
```
string.replace(str/regexp, str)
```
```
//如:
let str = "|------|------he--llo"
//如果想替换|------则使用如下
let rs = str.replace(/|------/g, '') //输出:he--llo
//如果想替换所有的|和-,则
let rs = str.replace(/[\||-]/g, '') //输出:hello
```
