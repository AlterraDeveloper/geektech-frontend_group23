//ECMAScript 2015 (6)

// var -> let, const

let a = 5;
a = 10;
const b = 5;
// b++; // b = b + 1

//JSdoc
/**
 * @deprecated
 */
const array = [1, 2, 3, 4, 5];
array.push(6);

const me = {
  name: "Eugene",
  surname: "Kiselev",
};

me["Father-name"] = "Dmitrievich";

me.name = "Ivan";

// me = {};

const generateButton = document.querySelector("#generate");
const resultElement = document.querySelector("#result");
const clipboardButton = document.querySelector("#clipboard");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomUppercase = () => {
  const codeA = 65;
  const codeZ = 90;
  return String.fromCharCode(getRandomInt(codeA, codeZ));
};

const getRandomLowercase = () => {
  const codeA = 97;
  const codeZ = 122;
  return String.fromCharCode(getRandomInt(codeA, codeZ));
};

const getRandomDigit = () => `${getRandomInt(0, 9)}`;
// function getRandomDigit(){
//     return getRandomInt(0, 9).toString();
// }

const getRandomSpecialSymbol = () => {
  const specialSymbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
  ];
  const randomIndex = getRandomInt(0, specialSymbols.length - 1);
  return specialSymbols[randomIndex];
};

generateButton.onclick = () => {
  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const passwordLengthElement = document.getElementById("length");
  const rules = {
    uppercase: uppercaseCheckbox.checked,
    lowercase: lowercaseCheckbox.checked,
    numbers: numbersCheckbox.checked,
    symbols: symbolsCheckbox.checked,
  };
  let password = "";
  const passwordLength = Number(passwordLengthElement.value);
  while (password.length < passwordLength) {
    for (const rule in rules) {
      if (!rules[rule]) continue;
      switch (rule) {
        case "uppercase":
          password += getRandomUppercase();
          break;
        case "lowercase":
          password += getRandomLowercase();
          break;
        case "numbers":
          password += getRandomDigit();
          break;
        case "symbols":
          password += getRandomSpecialSymbol();
          break;
      }
    }
  }
  resultElement.innerText = password.substring(0, passwordLength);
};

clipboardButton.onclick = () => {
  const password = resultElement.innerText;
  navigator.clipboard.writeText(password);
  alert("Copied!");
};
