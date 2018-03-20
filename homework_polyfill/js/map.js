function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arrr.length; i++) {
    newArr[i] = callback(arr[i], i, arr);
  }
  return newArr;
}
