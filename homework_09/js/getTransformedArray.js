function getTransformedArray(arr, myFunction) {
  let arrNew = [];
  forEach(arr, (elem, i) => (arrNew[i] = myFunction(elem)));
  return arrNew;
}
