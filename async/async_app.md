1、async函数的使用，有步骤地处理事情.<br>
如:http请求
```
async function request() {
  await init()
  let rs1 = await func1()
  let rs2 = await func2(rs1)
  let rs3 = await func3(rs2)
  return axios.psot(url,rs3).then(rs => rs.data)
}
```
