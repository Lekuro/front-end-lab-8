if (confirm("Do you want to play a game?")) {
  do {
    var prizeTotal = 0;
    var prize = 10;
    var orderRandom = 5;
    var orderPrize = 1;
    do {
      var number = Math.round(Math.random() * orderRandom);
      //alert(number);
      for (var i = 3; i > 0; i--) {
        var userNumber = prompt(
          "Enter a number from 0 to " +
            orderRandom +
            "\nAttempts left: " +
            i +
            "\nTotal prize: " +
            prizeTotal +
            "$\nPossible prize on current attempt: " +
            Math.floor(prize * orderPrize / Math.pow(2, 3 - i)) +
            "$",
          ""
        );
        if (!isNaN(userNumber) && isFinite(userNumber))
          userNumber = parseFloat(userNumber);
        if (userNumber === number) {
          prizeTotal += Math.floor(prize * orderPrize / Math.pow(2, 3 - i));
          orderRandom *= 2;
          orderPrize *= 3;
          break;
        }
      }
      if (i === 0) break;
    } while (confirm("Do you want to continue a game?"));
    console.log("Thank you for a game. Your prize is: ", prizeTotal);
  } while (confirm("Do you want to play a game again?"));
} else {
  console.log("You did not become a millionaire");
}
//alert("Thanks. Please looke in console (Press F12)");
