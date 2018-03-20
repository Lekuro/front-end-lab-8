var n = prompt("Please enter natural number 0<N<=20 N=", "");
var sSpace = "   ";
var sSymbol = "[~]";
var sEnter = "\n";
var sBuilde = "";
//alert(n);
if (!isNaN(n) && isFinite(n)) n = parseFloat(n);
if (Number.isInteger(n) && 0 < n && n <= 20) {
  for (var j = 1; j <= n; j++) {
    for (var i = 1; i <= n - j; i++) sBuilde += sSpace;
    for (i = 1; i <= 2 * j - 1; i++) sBuilde += sSymbol;
    for (i = 1; i <= n - j; i++) sBuilde += sSpace;
    sBuilde += sEnter;
  }
  console.log(sBuilde);
} else {
  console.log("Incorrect data!");
}
//alert("Thanks. Please looke in console (Press F12)");
