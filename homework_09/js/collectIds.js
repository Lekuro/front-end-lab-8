function collectIds(arr) {
  let arrFiltered = getFilteredArray(arr, elem => elem.rating > 3);
  let arrResult = getTransformedArray(arrFiltered, elem => elem.id);
  return arrResult;
}
