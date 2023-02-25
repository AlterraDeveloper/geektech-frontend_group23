import chroma from "chroma-js";

export default class ColorBlock {
  constructor(color, isLock = false) {
    this.color = color;
    this.isLock = isLock;
  }

  render() {
    return `
  <div class="col" style="background-color: ${this.color}">
      <h2 id="colorText" data-type="copy" style="color: ${
        chroma(this.color).luminance() > 0.5 ? "black" : "white"
      }">${this.color}</h2>

      <button data-type="lock">
        <i class="fa-solid ${
          this.isLock ? "fa-lock" : "fa-lock-open"
        }" data-type="lock"></i>
      </button>
    </div>`;
  }
}
