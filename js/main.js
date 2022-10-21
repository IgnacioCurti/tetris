const width = 40

const shapes = [ 
  // O, L, J, T, S, Z, I
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

const button = document.getElementById("start");
button.addEventListener("click", play);

// class Piece {
//   constructor() {

//   }
// }

class Board { 
  constructor(ctx, shapes) {
    this.ctx = ctx;   
    this.area = this.initializeArea()
    this.colours = ['#F3F3F3','#EB3535', '#65B6E3', '#5B63F5', '#E365D4', '#F5F05B', '#F5AC5B', '#35EB44']
    this.playing = true
  }

  initializeArea(){
    let area = []
    for (let i = 0; i < 18; i++){
      area.push(Array(9).fill(0))
    }
    return area
  }

  draw() {
    let posY = 0
    for (let i = 0; i < 10; i++){
      for (let row of this.area){
        let posX = 0
        for (let block of row){
          this.ctx.fillStyle = this.colours[block]
          this.ctx.fillRect(posX, posY, width, width)
          posX += width
        }
        posY += width
      }
    }
  }

  gameOver(){
    return true
  }

  piecePlaced(){
    return false
  }

  newPiece() {
    let piece = getShape()
    let posY = 0
    for (let row of piece){
      let posX = 6 - piece[0].length // para que la pieza aparezca arriba y en el medio
      for (let block of row){
        this.area[posY][posX] = block
        posX++
      }
      posY++
    }
  }

  movePiece(dir){
    console.log(dir)
  }

  rotate(){
    console.log('rotate')
  }

  drop(){
    console.log('drop')
  }
}

function getShape(){
    return shapes[Math.floor(Math.random() * 7)]
}

function handleKeydown(){
  
}

function play(){
  const canvas = document.getElementById("game")
  const board = new Board(canvas.getContext("2d"))
  const stop = document.getElementById('stop')
  stop.addEventListener('click', stopGame)
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowDown':
        board.drop()
        break;
      case 'ArrowLeft':
        board.movePiece('left')
        break;
      case 'ArrowRight':
        board.movePiece('right')
        break;
      case 'ArrowUp':
        board.rotate()
        break;
      default:
        break;
    }
  })
  if (board.piecePlaced()) {
    board.newPiece()
  }
  board.draw()
  if (board.gameOver()){
    board.playing = false
  }
}

function stopGame(){
  document.getElementById('alert').style.visibility = 'visible'
}