window.onload() {
  function clickButton() {
    const button = document.querySelectorAll("#button-random-color");
    button.addEventListener("click", assignNewColors());
  }
  
  function generateColor() {
    function rgb(color2, color3, color4) {
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
    const strCol = "rgb" + "(" + numCol[0] + ", " + numCol[1] + ", " + numCol[2] + ", " + ");";
    return strCol;
  }
  
  function assignNewColors() {
    function run1() {
      let newCol2 = document.getElementById("color2").style.backgroundColor;
      newCol2 = newPaletteColors();
    }
    function run2() {
      let newCol3 = document.getElementById("color3").style.backgroundColor;
      newCol3 = newPaletteColors();
    }
    function run3() {
      let newCol4 = document.getElementById("color4").style.backgroundColor;
      newCol4 = newPaletteColors();
    }
    run1();
    run2();
    run3();
  }
  clickButton();
}


