const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const TEMPLATE = "Anonymous";
inputEl.addEventListener("input", (event) => {
    const inputString = event.currentTarget.value.trim();
    if (inputString !== "") {
        outputEl.textContent = inputString;
    } else {outputEl.textContent = TEMPLATE;}
});