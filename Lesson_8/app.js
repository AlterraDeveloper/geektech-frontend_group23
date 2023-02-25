//Pure functions

import chroma from "chroma-js";
// import ColorBlockFunc from "./components/ColorBlock/ColorBlock.func";
import ColorBlockClass from "./components/ColorBlock/ColorBlock.class";

// function someFunc(){
//     return true;
// }

// someFunc();
// console.log("Func result = ", someFunc());

//SOLID

const state = {
  blocks: [],
};

state.blocks.length = 4;
state.blocks.fill(new ColorBlockClass(chroma.random()));
renderFromState();

document.body.addEventListener("keydown", (event) => {
  if (event.code.toUpperCase() !== "SPACE") return;

  state.blocks.forEach((block, index) => {
    if (block.isLocked) return;
    block = new ColorBlockClass(chroma.random());
    state.blocks[index] = block;
  });
  renderFromState();
});

document.body.addEventListener("click", (event) => {
  if (event.target.dataset.type !== "lock") return;
  console.log(event.target.tagName);
  const targetElement =
    event.target.tagName === "I" ? event.target : event.target.children[0];
    console.log(targetElement);
  targetElement.classList.toggle("fa-lock");
  targetElement.classList.toggle("fa-lock-open");
});

function renderFromState() {
  document.body.innerHTML = state.blocks
    .map((block) => block.render())
    .join("");
}

import { AccountC as AccountClass, AccountF } from "./models/Account";

console.log(new AccountF());
console.log(new AccountClass());
