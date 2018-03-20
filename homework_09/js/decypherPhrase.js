function decypherPhrase(obj, str) {
  let objNew = {};
  for (let key in obj) {
    objNew[obj[key]] = key;
  }
  return cypherPhrase(objNew, str);
}
