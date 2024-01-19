function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const destroyBoxes = () => boxes.textContent = '';

function createBoxes(amount) {
  destroyBoxes();
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      let size = 30 + i * 10;
      const box = `<div style="width: ${size}px; height:${size}px; background-color: ${getRandomHexColor()};"></div>`;
      boxes.insertAdjacentHTML('beforeend', box);       
    } input.value = '';
}
}

createBtn.addEventListener('click', () => {
    createBoxes(input.value);
})
createBtn.style.backgroundColor = '#FF4E4E';
createBtn.style.color = 'white'

destroyBtn.addEventListener('click', destroyBoxes);
destroyBtn.style.backgroundColor = '#4E75FF';
destroyBtn.style.color = 'white'

