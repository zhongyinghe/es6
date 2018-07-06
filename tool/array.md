1、遍历多维数组的方法
```
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}

function* eachArray(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let item = arr[i]
    if(isArray(item)){
      yield* eachArray(item)
    }else {
      yield item
    }
  }
}
```
