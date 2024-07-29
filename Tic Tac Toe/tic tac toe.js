let boxes = document.querySelectorAll(".box");
let second = document.querySelector(".new");
let reset = document.querySelector(".reset");

let turnO = true;

const winPatterns = [
 [0, 1, 2],
 [0, 3, 6],
 [0, 4, 8],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [3, 4, 5],
 [6, 7, 8]
];

second.addEventListener('click', () => {
 let game = document.querySelector(".game");
 game.classList.remove("hide");
 let reset = document.querySelector(".reset");
 reset.classList.remove("hide");
 let newGame = document.querySelector(".second");
 newGame.classList.add("hide");
 for (const box of boxes) {
  box.innerHTML = "";
  box.disabled = false; 
 }
});

reset.addEventListener('click', () => {
 for (const box of boxes) {
  box.innerHTML = "";
  box.disabled = false;
 }
});

function disable() {
 for (const box of boxes) {
  box.disabled = true;
 }
}

function clear() {
 let game = document.querySelector(".game");
 game.classList.add("hide");
 let reset = document.querySelector(".reset");
 reset.classList.add("hide");
 let newGame = document.querySelector(".second");
 newGame.classList.remove("hide");
}

function checkWinner() {
 for (const Patterns of winPatterns) {
  let val1 = boxes[Patterns[0]].innerHTML;
  let val2 = boxes[Patterns[1]].innerHTML;
  let val3 = boxes[Patterns[2]].innerHTML;
  if (val1 != "" && val2 != "" && val3 != "") {
   if (val1 == val2 && val2 == val3) {
    document.querySelector(".result").innerHTML = `${val1} is winner`;
    disable();
    clear();
   }
  }
 }
}

boxes.forEach((box) => {
 box.addEventListener('click', () => {
  if (turnO) {
   box.innerHTML = 'O';
   turnO = false;
  }
  else {
   box.innerHTML = 'X';
   turnO = true;
  }
  box.disabled = true;
  checkWinner();
 });
});

