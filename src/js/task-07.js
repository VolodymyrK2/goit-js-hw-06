const inputFontSizeEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
inputFontSizeEl.addEventListener("input", (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
})