
exports.min = function min (array) {
	if (!array || !(array instanceof Array) || array.length == 0)
		return 0;
	
	//let list = [array];
	return array.reduce((min, current) => { return min < current ? min : current; }, array[0]);
}

exports.max = function max (array) {
  if (!array || !(array instanceof Array) || array.length == 0)
		return 0;
	
	//let list = [array];
	return array.reduce((max, current) => { return max > current ? max : current; }, array[0]);
}

exports.avg = function avg (array) {
  if (!array || !(array instanceof Array) || array.length == 0)
		return 0;
	
	//let list = [array];
	return array.reduce((sum, current) => { return sum + current; }, 0) / array.length;
}
