// import { makeGrid } from "../ttt_node/board";

class View {
  constructor(game, el) {

    this.game = game
    this.el = el
    this.setupBoard();
  
  }
  
  setupBoard() {

    const ul =  document.createElement("ul")
    ul.classList.add('grid');
    this.el.appendChild(ul);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement('li');
        li.dataset.pos = JSON.stringify([i,j])
        ul.appendChild(li);

      }
    }
    this.el.addEventListener('click', this.handleClick)
  }
  
  handleClick(e) {
    debugger
    const square = e.target 
    if (nodeName === li) {
      makeMove(square)
    } 
  }

  makeMove(square) {
    // const cell = square.target.closest
    // if () {
    //   return; 
    // }

    // if () {
      
    // } else {
      
    // }

    // square.dataset.pos
  }
  
  handleGameOver() {
  }
}

export default View;