function generateColor() {
  function rgb(_color2, _color3, _color4) {
  }
  const a = parseInt((Math.random() * 255), 0);
  const b = parseInt((Math.random() * 255), 0);
  const c = parseInt((Math.random() * 255), 0);
  rgb(a, b, c);
  if (a === b === c === 0 || a === b === c === 255) {
    rgb(a, b, c);
  }
  const newColor = [a, b, c];
  return newColor;
}

function newPaletteColors() {
  const numCol = generateColor();
  const strCol = 'rgb(' + numCol[0] + ', ' + numCol[1] + ', ' + numCol[2] + ')';
  return strCol;
}

function assignNewColors() {
  let cA = '"' + newPaletteColors() + '"';
  const colors2 = document.getElementById('color2');
  let cB = '"' + newPaletteColors() + '"';
  const colors3 = document.getElementById('color3');
  let cC = '"' + newPaletteColors() + '"';
  const colors4 = document.getElementById('color4');

  if (cA === cB === cC || cA === cB || cB === cC || cA === cC) {
    cA = '"' + newPaletteColors() + '"';
    cB = '"' + newPaletteColors() + '"';
    cC = '"' + newPaletteColors() + '"';
  }
  colors2.style.backgroundColor = JSON.parse(cA);
  colors3.style.backgroundColor = JSON.parse(cB);
  colors4.style.backgroundColor = JSON.parse(cC);
}

function removeSelected() {
  const divClass = document.getElementsByClassName('color');
  for (let index = 0; index < divClass.length; index += 1) {
    if (divClass[index].classList.contains('selected')) {
      divClass[index].classList.remove('selected');
    }
  }
}

const selected = 'color selected';
function colorSelectedBlack() {
  removeSelected();
  const selblack = document.getElementById('black');
  selblack.className = selected;
}

function colorSelected2() {
  removeSelected();
  const sel2 = document.getElementById('color2');
  sel2.className = selected;
}

function colorSelected3() {
  removeSelected();
  const sel3 = document.getElementById('color3');
  sel3.className = selected;
}

function colorSelected4() {
  removeSelected();
  const sel4 = document.getElementById('color4');
  sel4.className = selected;
}

function allWhite() {
  const whitePx = document.getElementsByClassName('pixel');
  for (let index = 0; index < whitePx.length; index += 1) {
    whitePx[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  return whitePx;
}

function clickButton() {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', assignNewColors);
}

function clearButton() {
  const clearPx = document.getElementById('clear-board');
  clearPx.addEventListener('click', allWhite);
}

function clickPalette() {
  const buttonColorBlack = document.getElementById('black');
  buttonColorBlack.addEventListener('click', colorSelectedBlack);

  const buttonColor2 = document.getElementById('color2');
  buttonColor2.addEventListener('click', colorSelected2);

  const buttonColor3 = document.getElementById('color3');
  buttonColor3.addEventListener('click', colorSelected3);

  const buttonColor4 = document.getElementById('color4');
  buttonColor4.addEventListener('click', colorSelected4);
}

clickButton();
clearButton();
clickPalette();
