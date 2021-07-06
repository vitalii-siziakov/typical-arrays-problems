
exports.min = function min (array = []) {
  let result = 0;

  if (array.length !== 0 && Array.isArray(array)) {
    result = array[0];
    array.forEach(element => result > element ? result = element : result);
  };

  return result;
};

exports.max = function max (array = []) {
  let result = 0;

  if (array.length !== 0 && Array.isArray(array)) {
    result = array[0];
    array.forEach(element => result < element ? result = element : result);
  };

  return result;
};

exports.avg = function avg (array = []) {
  let result = 0;

  if (array.length !== 0 && Array.isArray(array)) {
    let sum = 0;
    array.forEach(element => sum += element);
    result = sum/array.length;
  };

  return result;
};
