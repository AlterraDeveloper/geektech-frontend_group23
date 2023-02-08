//Operators - операторы
// unary унарные
// binary бинарные
// тернарный

//String
// binary + (Concatenation)

var bookPrice = "9";
console.log("I buy i books. Total", bookPrice + bookPrice);

//Number
//unary: + -
// binary: + - * / % **
var accountBalance = 500;
console.log(accountBalance);
// accountBalance = accountBalance + 100;
// accountBalance += 100; //shorthand
// accountBalance -= 100; //shorthand
// accountBalance *= 100; //shorthand
// accountBalance /= 100; //shorthand
// accountBalance %= 100; //shorthand
// accountBalance **= 100; //shorthand
// accountBalance++; // accountBalance = accountBalance + 1
// accountBalance--; // accountBalance = accountBalance - 1
// console.log(accountBalance++); //postfix
// console.log(++accountBalance); //prefix
// console.log(accountBalance);

//Boolean
// unary : ! !!
// binary: && ||
// binary: > < >= <= != == !== ===

//Falsy(ложноподобные): false, 0, NaN, undefined, null, ""

var customerIsResident = false;
var creditRequestSum = 30000;

if (customerIsResident || creditRequestSum <= 100000) {
  console.log("Credit issue allowed");
} else {
  console.log("Credit issue not allowed");
}

var depositPeriod = 24; // in monthes

if (depositPeriod > 0 && depositPeriod < 24) {
  console.log("SHORT-TERM");
} else if (depositPeriod >= 24 && depositPeriod < 60) {
  console.log("MIDDLE-TERM");
} else if (depositPeriod >= 60) {
  console.log("LONG-TERM");
} else {
  console.log("ERROR");
}

var internetBankingUser = true;
var isMobileBankingUser = false;

if (internetBankingUser && isMobileBankingUser) {
  accountBalance += 100;
}

var customerCardType = "vIsA";

// if (customerCardType === "VISA") {
//   console.log("Send request to VISA");
// } else if (customerCardType === "ELCARD") {
//   console.log("Send request to IPC");
// } else if (
//   customerCardType === "MasterCard" ||
//   customerCardType === "Maestro"
// ) {
//   console.log("Send request to MasterCard");
// }

switch (customerCardType.toUpperCase()) {
  case "VISA":
    console.log("Send request to VISA");
    break;
  case "ELCARD":
    console.log("Send request to IPC");
    break;
  case "MASTERCARD":
  case "MAESTRO":
    console.log("Send request to MasterCard");
    break;
  default:
    console.log("unknown card processing");
}

var numberFromUser = "5";

switch (numberFromUser) {
  case 5: // "5" === 5 -> false
    console.log("V");
    break;
  default:
    console.error("not valid number");
}

var customerContactPhones = ["+996500112233", "+996555112233", "+79161112233"];
// indexes                          0                  1            i

//for(;;)
//цикл с счетчиком
for (var i = 0; i < 3; i++) {
  if (customerContactPhones[i].startsWith("+996")) {
    console.log(customerContactPhones[i], "KG number");
  } else if (customerContactPhones[i].startsWith("+7")) {
    console.log(customerContactPhones[i], "RU number");
  } else {
    console.log(customerContactPhones[i], "another number");
  }
}

var depositsPeriods = [25, 14, 4, 2, 78, 5, 55, 14];

var depositsTypes = [];

for (var depositPeriod of depositsPeriods) {
  if (depositPeriod > 0 && depositPeriod < 24) {
    depositsTypes.push("SHORT-TERM");
  } else if (depositPeriod >= 24 && depositPeriod < 60) {
    depositsTypes.push("MIDDLE-TERM");
  } else if (depositPeriod >= 60) {
    depositsTypes.push("LONG-TERM");
  } else {
    console.log("ERROR");
  }
}

console.log(depositsTypes);

var customerInn = "10505199512345";
var result = 0;
for (var digit of customerInn) {
  // if (digit >= "0" && digit <= "9") {
  //   result++;
  // }
  if(!isNaN(Number(digit))){
    result++;
  }
}
console.log(result === 14 ? "INN valid" : "INN invalid");
// if (result === 14) {
//   console.log("INN valid");
// } else {
//   console.warn("INN invalid");
// }

var boolValue = false;
console.log(boolValue ? "Да" : "Нет");
