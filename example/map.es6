//map工具和应用示例

//map转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

//对象转map
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

//map转json
function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

//json转map
function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}