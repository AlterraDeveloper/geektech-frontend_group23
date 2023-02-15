var container = document.querySelector(".container");

function createCell() {
  var cell = document.createElement("div"); //<div></div>
  cell.classList.add("cell"); //<div class="cell"></div>
  cell.addEventListener("mouseover", cellFocused);
  cell.addEventListener("mouseleave", cellUnfocused);
  return cell;
}

var colors = ["#c41212", "#2ed80c", "#dbde1f", "#3428d1", "#ffffff"];

function cellFocused(event) {
  var randomIndex = getRandomInt(0, 4);
  event.target.style.backgroundColor = colors[randomIndex];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cellUnfocused(event) {
  setTimeout(function () {
    event.target.style.backgroundColor = "#4a4848";
  }, 300); //1 sec
}

for (var i = 0; i < 256; i++) {
  container.append(createCell());
}
