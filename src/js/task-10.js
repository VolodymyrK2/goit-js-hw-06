const WIDTH_BOX = 30;
const HEIGTH_BOX = 30;
const STEP_SIZE = 10;
let amountBoxes = 0;
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
inputEl.addEventListener('input', (event) => {
  amountBoxes = event.currentTarget.value;
});
btnCreate.addEventListener('click', () => createBox(amountBoxes));
btnDestroy.addEventListener('click', () => boxesEl.innerHTML = ""
);
function createBox(amount) {
  let width = WIDTH_BOX;
  let height = HEIGTH_BOX;
  const boxes = [];
  for (let i = 0; i < amount; i++){
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    width += STEP_SIZE;
    height += STEP_SIZE;
    boxes.push(box);
  }
boxesEl.append(...boxes);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}