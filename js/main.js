const width = 40

const shapes = [ // O, L, J, T, S, Z, I
  [
    [1, 1],
    [1, 1]
  ],

  [
    [2, 0, 0],
    [2, 2, 2]
  ],

  [
    [0, 0, 3],
    [3, 3, 3]
  ],

  [
    [0, 4, 0],
    [4, 4, 4]
  ],

  [
    [0, 5, 5],
    [5, 5, 0]
  ],

  [
    [6, 6, 0],
    [0, 6, 6]
  ],

  [
    [7, 7, 7, 7]
  ]
]

const colours = ['#F3F3F3','#EB3535', '#65B6E3', '#5B63F5', '#E365D4', '#F5F05B', '#F5AC5B', '#35EB44']
const button = document.getElementById("start");
button.addEventListener("click", drawFigures);
const canvas = document.getElementById("game");

function drawFigures() {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = colours[0]
    ctx.fillRect(0, 0, 360, 720)
    let posY = 0
    for (let shape of shapes){
      for (let row of shape){
        let posX = 0
        for (let block of row){
          if (block){
            ctx.fillStyle = colours[block]
            ctx.fillRect(posX, posY, width, width);
          }
          posX += width
        }
        posY += width
      }
      // posY += 40
    }
    drawBoard()
  }
}


function drawBoard(){
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    for(let posX = width; posX < 360; posX += width){
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.moveTo(posX, 0);
      ctx.lineTo(posX, 720);
      ctx.stroke();
    }
    for(let posY = width; posY < 720; posY += width){
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.moveTo(0, posY);
      ctx.lineTo(360, posY);
      ctx.stroke();
    }
  }
}