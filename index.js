
function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() { 
  stroke("black");
  fill("white");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }


}// if(mouseX < 50) {
  //   let palavra = "C";
  //   text(palavra, 200, 200);
  // } else if(mouseX < 100) {
  //   let palavra = "Ca";
  //   text(palavra, 200, 200);
  // } else {
  //   let palavra = "Caminhante
";
  //   text(palavra, 200, 200);
  // }

}
