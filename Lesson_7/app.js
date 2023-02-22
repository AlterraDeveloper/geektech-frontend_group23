//var -> let,const

// const numbers = [1,2,3];

// numbers = [4,5,6];

// const number = 5;
// number++; // number = number + 1

const transferType = "output";

console.log(`TRANSFER_TYPE: ${GetTransferType(transferType)}`);

// var myName;

let myName = "Eugene";
console.log(`My name is ${myName}`);

//hoisting - поднятие всплытие

function GetTransferType(transferType) {
  switch (transferType) {
    case "output":
      return "G";
    case "incoming":
      return "O";
  }
}

for (const num of [1, 2, 3]) {
  let myName = "Semen";
}

console.log(`My name is ${myName}`);

// console.log("My FIO is", getMyFIO());

// var getMyFIO = () => "Kiselev Eugene Dmitrievich";

var document = {
  Title: "Account_statement",
  FileType: "xlsx",
  Size: 2568,
  Body: {},
};

console.log(document);

const getNationalCurrency = () => "TJS";

function createAccount(
  balanceGroup,
  currency = getNationalCurrency(),
  balance = 0
) {
  //   currency = currency || "KGS";
  //   balance = balance || 0;
  const accountNo = getRandomInt(1, 1000).toString();
  return {
    accountNo: `${balanceGroup}${accountNo.padStart(9, "0")}`,
    currency: currency,
    balance: balance,
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
