function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  // Задаємо колір фону для <body>
  body.style.backgroundColor = randomColor;

  // Задаємо текстовий вміст для span.color
  colorSpan.textContent = randomColor;

});
