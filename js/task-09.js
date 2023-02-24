const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('button.change-color');
const nameOfBgColorEl = document.querySelector('span.color');
btnEl.addEventListener('click', handleBtnChangeColor);
function handleBtnChangeColor(event) {
  const randomBgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomBgColor;
nameOfBgColorEl.textContent=randomBgColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}