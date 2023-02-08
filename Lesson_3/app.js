console.log([] == []), console.log([] == []);
var a = 5,
  b = a;
console.log("a = ", a, "b = ", b), (b = 10), console.log("a = ", a, "b = ", b);
var a2 = [1, 2, 3],
  b2 = a2;
console.log("a2 = ", a2, "b2 = ", b2),
  b2.push(4),
  a2.push(5),
  console.log("a2 = ", a2, "b2 = ", b2),
  console.log("a2 == b2 ?", a2 === b2),
  console.log(document.all);
for (
  var numbers = [5, 4, 7, 1, 2, 8, 4], i = 0;
  i < numbers.length && (console.log(numbers[i]), 2 !== numbers[i]);

)
  i++;
var balances = [0, 0.5, -200, 0, 110, 12, 4, -500],
  sum = 0,
  debts = 0,
  debtsSum = 0;
for (const balance of balances.reverse()) {
  if (balance >= 0) {
    sum += balance;
    continue;
  }
  debts++, (debtsSum += balance);
}
console.log("Bank income = ", sum, "Debts = ", debts, "DEbts sum = ", debtsSum);

var cardPan = "4215890114971858"; //PAN - Personal Access Number
//CVC - Customer Verification Code
//BIN - Bank Identification Number

var isSecond = false;
var cardPanSum = 0;
console.log(cardPan);
for (var i = cardPan.length - 1; i >= 0; i--) {
  var cardDigit = Number(cardPan[i]);
  var doubledDigit;
  if (isSecond) {
    doubledDigit = cardDigit * 2; //2 -> 02 -> 0 + 2; 16-> 1 + 6
    var doubledDigitAsString = doubledDigit.toString().padStart(2, "0");
    var secondSum =
      Number(doubledDigitAsString[0]) + Number(doubledDigitAsString[1]);
    cardPanSum += secondSum;
    console.log(cardDigit, doubledDigit, doubledDigitAsString, secondSum);
  } else {
    cardPanSum += cardDigit;
    console.log(cardDigit);
  }
  isSecond = !isSecond;
}
console.log("Card PAN result:", cardPanSum % 10 === 0 ? "OK" : "ERROR");
