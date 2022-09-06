/* It's generating a random color. */
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

/* It's generating a random color. */
function newPaletteColors() {
  const numCol = generateColor();
  const strCol = 'rgb(' + numCol[0] + ', ' + numCol[1] + ', ' + numCol[2] + ')';
  return strCol;
}
/* It's saving the color palette generated randomly. */
function assignNewColors() {
  let cBl = JSON.stringify('rgb(0, 0, 0)');
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
  button.addEventListener('click', function () {
    if (localStorage.length === 0) {
      saveColor();
    } else {
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
    }
  });
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

// Função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página;

function saveColor() {
  const p1 = 'rgb(0, 0, 0)';
  const p2 = 'rgb(255, 0, 0))';
  const p3 = 'rgb(255, 165, 0)';
  const p4 = 'rgb(0, 0, 139)';
  const colorsId = [p1, p2, p3, p4];
  localStorage.setItem('colorPalette', JSON.stringify(colorsId));
  const localFirst = JSON.parse(localStorage.getItem('colorPalette'));
  const saveB = document.getElementsByClassName('color')[0];
  saveB.style.backgroundColor = localFirst[0];
  const save2 = document.getElementsByClassName('color')[1];
  save2.style.backgroundColor = localFirst[1];
  const save3 = document.getElementsByClassName('color')[2];
  save3.style.backgroundColor = localFirst[2];
  const save4 = document.getElementsByClassName('color')[3];
  save4.style.backgroundColor = localFirst[3];
  return localFirst;
}

// Função que permite preencher um pixel do quadro com a cor selecionada na paleta de cores;

// Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco;

// Crie uma função para salvar e recuperar o seu desenho atual no localStorage;

clickButton();
clearButton();
clickPalette();
