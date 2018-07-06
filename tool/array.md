1、遍历多维数组的方法
```
function* eachArray(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let item = arr[i]
    if(typeof item === 'array'){
      yield* eachArray(item)
    }else {
      yield item
    }
  }
}
```
