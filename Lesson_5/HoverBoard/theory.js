//URL - universal resource locator
//URI - universal resource identifier

//HTML - Hyper Text Markup Language
//HTTP(S) - Hyper Text Transfer Protocol (Secured)
// https://www.google.com/

//IP - Internet Protocol 0.0.0.0 - 255.255.255.255
//google.com -> 8.8.8.8
//yandex.ru -> 142.52.11.47
//localhost:5500

// 100.10.10.100
// 100.10.10.100:5000 -> www.gazeta.kg
// 100.10.10.100:5001 -> www.tazalyk.kg

var number = Number.parseInt("0.5");
// var document = ViewEngine.parse("index.html")

//DOM - Document Object Model

var button = document.querySelector("#clickme");
console.log(button);

//JSON - JavaScript Object Notation
var currenciesListJson = `
[
    {
        "currencyFrom": "USD",
        "currencyTo": "KGS",
        "rate": 86.5
    },
    {
        "currencyFrom": "EUR",
        "currencyTo": "KGS",
        "rate": 101.25
    },{
        "currencyFrom": "RUB",
        "currencyTo": "KGS",
        "rate": 1.14
    }
]`;

var currenciesList = JSON.parse(currenciesListJson);

console.log(currenciesList);
