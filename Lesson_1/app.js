/*
Урок 1
Автор: Евгений Киселев
Группа: 23
Тема урока: основы JavaScript
*/

// var a = 5
// console.log(a)
// console.log("Hello JavaScript")

// Я однострочный комментарий блабалаблабалабалаал
/*
Я
многострочный
комментарий
*/

// 1) String - текстовый
var customerFullName = "Eugene Kiselev"; //Camel case
var customerINN = "20101199012345";

console.log(typeof "", "completed");

//2) Number - числовой
var customerCurrentBalance = 500;
var customerCurrentBalance2 = -1000.24;
var customerScoring = 3.451518;
console.log(typeof 5, "completed");

//3) Boolean - логический
var customerIsResident = true;
var customerUseMobileBanking = false;
console.log(typeof true, "completed");

//4) undefined - неопределенный
var customerBirthDay;
console.log(typeof undefined, "completed");

//5) null - нулевой
var customerContactPhone = null;
// console.log(typeof null, "completed") // баг JS
console.log("null completed");

//6) object - объектный (комплесный)
var customerPassport = {
  series: "AN",
  number: 12345,
  expiryDate: null,
  isUnlimited: true,
};
console.log(typeof {}, "completed");

//7) Symbol - символьный
//8) BigInt - длинная арифметика

// var customerCountry = prompt("Type your country");
// var customerCity = prompt("Type your city");
// var customerStreet = prompt("Type your street");
// var customerHouse = prompt("Type your house");

//Concatenation - конкатенация
// var customerLocation =
//   customerCountry +
//   " " +
//   customerCity +
//   " " +
//   customerStreet +
//   " " +
//   customerHouse;

// alert("Your location is :" + customerLocation);
// console.log("Your location is :" + customerLocation);

var customerCardType = "MIR";

switch (customerCardType) {
    case "VISA":
        console.log("Send request to VISA");
        break;
    case "ELCART" : 
        console.log("Send request to IPC");
        break;
    default:
        console.log("Unknown card type");
        break;
}


