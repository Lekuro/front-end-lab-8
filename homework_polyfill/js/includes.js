function includes(arr, value, index = 0) {
  if (index < 0) {
    index = arr.length + index;
  }
  for (let i = index; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
