
//portal to render the js.  Grabs the document by the 
// id from index.html

import Game from "../ttt_node/game.js";
import View from "./ttt-view.js";

// We can put in invocation of a game in this file


// Load up index.html and then render the js

document.addEventListener("DOMContentLoaded", () => {
  const g = new Game();   
  const el1 = document.querySelector('.ttt')
  const v1 = new View(g, el1)

  //.queryselector


});


// select the figure or canvas class - it can be any HTML node
// and ensure that we are passing that into the view .  This is like the yield
//mapped onto the figure node via the event listener.

// DOM content loaded waits for the HTML to load and then maps the JS on