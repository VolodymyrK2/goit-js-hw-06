const WIDTH_BOX = 30;
const HEIGTH_BOX = 30;
const STEP_SIZE = 10;
 let width = WIDTH_BOX;
  let height = HEIGTH_BOX;
let amountBoxes = 0;
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
inputEl.addEventListener('input', () => {
  amountBoxes = inputEl.value;
   if (amountBoxes > 100 || amountBoxes < 0) {
    alert("Введіть число в діапазоні від 1 до 100");
    inputEl.value = "";
    amountBoxes = 0;
  }
});
 
btnCreate.addEventListener('click', () => createBox(amountBoxes));
btnDestroy.addEventListener('click', () => {
  inputEl.value ="";
  boxesEl.innerHTML = ""
  width = WIDTH_BOX;
  height = HEIGTH_BOX;
});
function createBox(amount) {
  
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