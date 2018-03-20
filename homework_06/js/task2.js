var euro = parseFloat(prompt("Please write amount of EURO", ""));
var dollar = parseFloat(prompt("Please write amount of USD", ""));
var courseEuro = 33.2324; //33.8565 33.4602
var courseUsd = 27.124; //27.4609 27.1196
if (euro >= 0 && dollar >= 0) {
  console.log(
    "",
    euro,
    "euros are equal",
    parseFloat((euro * courseEuro).toFixed(2)),
    "UAH,",
    dollar,
    "dollars are equal",
    parseFloat((dollar * courseUsd).toFixed(2)),
    "UAH, one euro is equal",
    parseFloat((courseUsd / courseEuro).toFixed(2)),
    "dollars.",
    euro
  );
} else {
  console.log("Incorrect data");
}

