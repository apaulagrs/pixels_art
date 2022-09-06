const color0 = document.querySelectorAll('.color')[0];
const color1 = document.querySelectorAll('.color')[1];
const color2 = document.querySelectorAll('.color')[2];
const color3 = document.querySelectorAll('.color')[3];
const bgColor = 'background-color';
const gtBgC0 = window.getComputedStyle(color0, null);
const gtBgC1 = window.getComputedStyle(color1, null);
const gtBgC2 = window.getComputedStyle(color2, null);
const gtBgC3 = window.getComputedStyle(color3, null);
const c0 = gtBgC0.getPropertyValue(bgColor);
const c1 = gtBgC1.getPropertyValue(bgColor);
const c2 = gtBgC2.getPropertyValue(bgColor);
const c3 = gtBgC3.getPropertyValue(bgColor);

// Função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página;
function saveLocal() {
  const localColors = [c0, c1, c2, c3];
  localStorage.setItem('colorPalette', JSON.stringify(localColors));
}

function getLocalColors() {
  const getColors = JSON.parse(localStorage.getItem('colorPalette'));
  if (localStorage.getItem('colorPalette') === null) {
    saveLocal();
  } else {
    color0.style.backgroundColor = getColors[0];
    color1.style.backgroundColor = getColors[1];
    color2.style.backgroundColor = getColors[2];
    color3.style.backgroundColor = getColors[3];
  }

}getLocalColors();

// botão para gerar cores aleatórias para a paleta de cores;
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
  const cBl = JSON.stringify('rgb(0, 0, 0)');
  const colorsBlack = document.getElementById('black');
  let cA = JSON.stringify(newPaletteColors());
  const colors2 = document.getElementById('color2');
  let cB = JSON.stringify(newPaletteColors());
  const colors3 = document.getElementById('color3');
  let cC = JSON.stringify(newPaletteColors());
  const colors4 = document.getElementById('color4');
  if (cBl === cA === cB === cC || cA === cB || cB === cC || cA === cC) {
    cA = JSON.stringify(newPaletteColors());
    cB = JSON.stringify(newPaletteColors());
    cC = JSON.stringify(newPaletteColors());
  }
  colorsBlack.style.backgroundColor = JSON.parse(cBl);
  colors2.style.backgroundColor = JSON.parse(cA);
  colors3.style.backgroundColor = JSON.parse(cB);
  colors4.style.backgroundColor = JSON.parse(cC);
  return [cBl, cA, cB, cC];
}

function clickButton() {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', function () {
    const newRandom = assignNewColors();
    const s1 = JSON.parse(newRandom[0]);
    const s2 = JSON.parse(newRandom[1]);
    const s3 = JSON.parse(newRandom[2]);
    const s4 = JSON.parse(newRandom[3]);
    const allNew = [s1, s2, s3, s4];
    localStorage.setItem('colorPalette', JSON.stringify(allNew));
    const localData = JSON.parse(localStorage.getItem('colorPalette'));
    const random1 = document.getElementsByClassName('color')[0];
    random1.style.backgroundColor = localData[0];
    const random2 = document.getElementsByClassName('color')[1];
    random2.style.backgroundColor = localData[1];
    const random3 = document.getElementsByClassName('color')[2];
    random3.style.backgroundColor = localData[2];
    const random4 = document.getElementsByClassName('color')[3];
    random4.style.backgroundColor = localData[3];
  });
}clickButton();

// cor preta como cor inicial da paleta de cores;

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

function clickPalette() {
  const buttonColorBlack = document.getElementById('black');
  buttonColorBlack.addEventListener('click', colorSelectedBlack);

  const buttonColor2 = document.getElementById('color2');
  buttonColor2.addEventListener('click', colorSelected2);

  const buttonColor3 = document.getElementById('color3');
  buttonColor3.addEventListener('click', colorSelected3);

  const buttonColor4 = document.getElementById('color4');
  buttonColor4.addEventListener('click', colorSelected4);
}clickPalette();

// função para selecionar uma cor na paleta de cores e preencha os pixels no quadro;
function pixelPaint() {
  const pixelColor = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelColor.length; index += 1) {
    pixelColor[index].addEventListener('click', function () {
      const clickColor = document.querySelector('.color.selected').style.backgroundColor;
      pixelColor[index].style.backgroundColor = clickColor;
    });
  }
}pixelPaint();
// botão que retorne a cor do quadro para a cor inicial;
function allWhite() {
  const whitePx = document.getElementsByClassName('pixel');
  for (let index = 0; index < whitePx.length; index += 1) {
    whitePx[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  return whitePx;
}

function clearButton() {
  const clearPx = document.getElementById('clear-board');
  clearPx.addEventListener('click', allWhite);
}clearButton();
