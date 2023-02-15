// var number = Number(prompt("Enter number"));
// var number2 = number;

// 5 -> 5 + 4 + 3 + 2 + 1
// var sum = 0;
// var text = ''
// while (number > 0) {
//   text += number + " + "
//   sum += number; // sum = sum + number
//   number--; // number = number - 1
// }
// console.log(text, " = ", sum);

// 5 -> 1 + 2 + 3 + 4 + 5
// var sum2 = 0;
// var text2 = ''
// for (var i = 1; i <= number2; i++) {
//   sum2 += i;
//   text2 += i + " + ";
// }
// console.log(text2, " = ", sum2);

function printDelimiter() {
  console.log("-".repeat(20));
}

function checkHomeWork(studentName, hwNumber) {
  printDelimiter();
  console.log("Download zip-archive");
  console.log("Open VS code");
  console.log("Find js file))");
  console.log("Checking ", hwNumber, " HW...");
  console.log("Write comments in chat with", studentName);
  console.log("Write grade in google sheet");
  printDelimiter();
}

// checkHomeWork("Aziret", 2);
// checkHomeWork("Anna", 2);
// checkHomeWork("Vadim", 1);
// checkHomeWork("Vadim", 2);

//function declaration
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 7));

function finalizeDay() {
  finalizeCashierModule();
  finalizeCardModule();
}

function finalizeCashierModule() {
  console.group("finalizeCashierModule");
  finalizeCashierBags();
  finalizeConvertations();
  console.groupEnd();
}

function finalizeCashierBags() {
  return;
  console.error("finalizeCashierBags");
}
function finalizeConvertations() {
  console.log("finalizeConvertations");
}
function finalizeCardsOperations() {
  console.log("finalizeCardsOperations");
}
function finalizeCardModule() {
  console.group("finalizeCardModule");
  finalizeCardsOperations();
  console.groupEnd();
}

finalizeDay();

var validateByLuhn = function (cardPan) {
  cardPan = onlyDigits(cardPan);
  var isSecond = false;
  var cardPanSum = 0;
  for (var i = cardPan.length - 1; i >= 0; i--) {
    var cardDigit = Number(cardPan[i]);
    var doubledDigit;
    if (isSecond) {
      doubledDigit = cardDigit * 2; //2 -> 02 -> 0 + 2; 16-> 1 + 6
      var doubledDigitAsString = doubledDigit.toString().padStart(2, "0");
      var secondSum =
        Number(doubledDigitAsString[0]) + Number(doubledDigitAsString[1]);
      cardPanSum += secondSum;
      // console.log(cardDigit, doubledDigit, doubledDigitAsString, secondSum);
    } else {
      cardPanSum += cardDigit;
      // console.log(cardDigit);
    }
    isSecond = !isSecond;
  }
  return cardPanSum % 10 === 0;
};

var cards = ["4215890112029332", "4215890114471858", "4212850114971858"];

console.group("Card validation");
for (const card of cards) {
  if (validateByLuhn(card)) {
    console.log(formatCardPan(card), "OK");
  } else {
    console.error(formatCardPan(card), "ERROR");
  }
}
console.groupEnd();

var cardPanInput = document.getElementById("cardPanInput");
var messageDiv = document.querySelector(".message");
console.log(cardPanInput);
console.log(messageDiv);

cardPanInput.addEventListener("input", function () {
  messageDiv.classList.remove("success");
  messageDiv.classList.remove("error");
  cardPanInput.value = formatCardPan(cardPanInput.value);
  if(cardPanInput.value.length === 19 && validateByLuhn(cardPanInput.value)){
    messageDiv.innerHTML = "OK";
    messageDiv.classList.add('success');
  }else{
    messageDiv.innerHTML = "ERROR";
    messageDiv.classList.add('error');
  }
});
 
function formatCardPan(cardPan) {
  var groups = [];
  cardPan = onlyDigits(cardPan);
  for (var i = 0; i < cardPan.length; i += 4) {
    var group = cardPan.substring(i, i + 4);
    groups.push(group.trim());
  }
  return groups.join(" ");
}

function onlyDigits(text){
  var onlyDigitText = "";
  for(var char of text){
    if(char >= "0" && char <= "9"){
      onlyDigitText += char;
    }
  }
  return onlyDigitText;
}
