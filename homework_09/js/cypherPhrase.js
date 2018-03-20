function cypherPhrase(obj, str) {
  let arr = str.split("");
  let arrTransform = getTransformedArray(arr, elem => obj[elem] || elem);
  let strRezult = arrTransform.join("");
  return strRezult;
}
