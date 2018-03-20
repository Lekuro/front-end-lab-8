function getFilteredArray(arr, predicate) {
  let arrNew = [];
  let i = 0;
  forEach(arr, elem => {
    if (predicate(elem)) {
      arrNew[i] = elem;
      i++;
    }
  });
  return arrNew;
}
