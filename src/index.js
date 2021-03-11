
exports.min = function min (array) {
  return !array || array.length == 0 ? 0 : Math.min.apply(null, array);
}

exports.max = function max (array) {
  return !array || array.length == 0 ? 0 : Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let sum = 0;
  if (!array || array.length == 0) return 0;
  for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
return sum / array.length;
}
