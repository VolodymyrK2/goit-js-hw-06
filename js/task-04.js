const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;
function handleCount(event) {
    counterValue += Number(event.currentTarget.textContent);
    valueEl.textContent = counterValue;
}
decrementBtn.addEventListener('click', handleCount);
incrementBtn.addEventListener('click', handleCount);
