import chroma from "chroma-js";

export default function ColorBlock(color, isLock = false) {

    

  return `
  <div class="col" style="background-color: ${color}">
      <h2 id="colorText" data-type="copy" style="color: ${
        chroma(color).luminance() > 0.5 ? "black" : "white"
      }">${color}</h2>

      <button data-type="lock">
        <i class="fa-solid ${
          isLock ? "fa-lock" : "fa-lock-open"
        }" data-type="lock"></i>
      </button>
    </div>`;
}
