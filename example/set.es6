//set工具和应用示例

//去除数组重复元素函数
function unique(array) {
	if (isArray(array)) {
		let set = new Set(array);
		return [...set];
	}
	return array;
}

//去除数组元素重复的另一种方法
function dedupe(array) {
	if (isArray(array)) {
		return Array.from(new Set(array));
	}
	return array;
}

//并集(array和Set都可以并集)
function union(seta, setb) {
	let result = new Set([...seta, ...setb]);
	if (isArray(seta) && isArray(setb)){
		return [...result];
	}
	return result;
}

//交集(array和set)
function intersect(seta, setb) {
	let set = new Set();
	if (isArray(setb)) {
		set = new Set(setb);
	}else {
		set = setb
	}
	
	let result = new Set([...seta].filter(x => set.has(x)));
	if (isArray(seta)) {
		return [...result];
	}
	return result;
}

//差集(array和set)
function difference(seta, setb) {
	let set = new Set();
	if (isArray(setb)) {
		set = new Set(setb);
	}else {
		set = setb
	}
	
	let result = new Set([...seta].filter(x => !set.has(x)));
	if (isArray(seta)) {
		return [...result];
	}
	return result;
}

/**
 * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
 *
 * @param {Object} arg 需要测试是否为数组的对象
 * @return {Boolean} 传入参数是数组返回true，否则返回false
 */
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}