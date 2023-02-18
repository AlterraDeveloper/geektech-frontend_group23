var passwordInput = document.querySelector("#password");
var passwordInput2 = document.querySelector("#password2");
var linesContainer = document.getElementById("lines");
var showHideBtn = document.querySelector("#showHideBtn");

passwordInput.addEventListener("input", function (event) {
  var enteredPassword = event.target.value;
  var strength = calculatePasswordStrenght(enteredPassword);
  var indicators = createIndicators(strength);
  linesContainer.innerHTML = "";
  linesContainer.append(...indicators);
});

// showHideBtn.addEventListener("mouseover", function () {
//   passwordInput.setAttribute("type", "text");
// });

// showHideBtn.addEventListener("mouseleave", function () {
//   passwordInput.setAttribute("type", "password");
// });

showHideBtn.addEventListener("click", function () {
  var icon = showHideBtn.children[0];
  console.log(icon.classList);
  if (icon.classList.contains("fa-eye")) {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
});

function passwordHas8Length(passwordText) {
  return passwordText.length >= 8;
}

function passwordHasLowerCase(passwordText) {
  for (var char of passwordText) {
    if (char >= "a" && char <= "z") return true;
  }
  return false;
}

function passwordHasUpperCase(passwordText) {
  for (var char of passwordText) {
    if (char >= "A" && char <= "Z") return true;
  }
  return false;
}

function passwordHasDigits(passwordText) {
  for (var char of passwordText) {
    if (char >= "0" && char <= "9") return true;
  }
  return false;
}

function passwordHasSpecialSymbols(passwordText) {
  for (var char of passwordText) {
    if (["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"].includes(char))
      return true;
  }
  return false;
}

function calculatePasswordStrenght(password) {
  var strength = 0;
  strength += passwordHas8Length(password);
  strength += passwordHasLowerCase(password);
  strength += passwordHasUpperCase(password);
  strength += passwordHasDigits(password);
  strength += passwordHasSpecialSymbols(password);
  return strength;
}

function createIndicators(count) {
  var indicators = [];
  for (var i = 0; i < count; i++) {
    var indicator = document.createElement("div");
    indicator.classList.add("line");
    indicators.push(indicator);
  }
  return indicators;
}

passwordInput2.addEventListener("input", function () {
  setTimeout(function () {
    var pass2 = passwordInput2.value;
    passwordInput2.value = "*".repeat(pass2.length);
  }, 250); // 0.5 sec
});
