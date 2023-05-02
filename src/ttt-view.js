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
        ul.appendChild(li);

    }
  }
  }
  
  handleClick(e) {

    
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;