const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener("input", (event) => {
    const inputString = event.currentTarget.value.trim();
    if (inputString !== "") {
        outputEl.textContent = inputString;
    }
});