function reverseNumber(a) {
  var str = parseInt(a).toString();
  var reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return parseInt(reverse) * Math.sign(a);
}
