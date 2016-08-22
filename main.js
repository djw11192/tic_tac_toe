//
// var playerTurn= 1;
// var applyX = function(){
// var theBox1 = document.getElementById("box1");
// var changeColor = function(){
//   if(playerTurn == 1){
//   theBox1.innerHTML ='<p>X</p>';
//   playerTurn -= 1;
// } else{
//   theBox1.innerHTML ='<p>O</p>';
//   playerTurn += 1;
// }
// };
// theBox1.addEventListener("click", changeColor);
//
//
// var theBox2 = document.getElementById("box2");
// var changeColor = function(){
//   theBox2.innerHTML ='<p>X</p>';
// };
// theBox2.addEventListener("click", changeColor);
//
// var theBox3 = document.getElementById("box3");
// var changeColor = function(){
//   theBox3.innerHTML ='<p>X</p>';
// };
// theBox3.addEventListener("click", changeColor);
//
// var theBox4 = document.getElementById("box4");
// var changeColor = function(){
//   theBox4.innerHTML ='<p>X</p>';
// };
// theBox4.addEventListener("click", changeColor);
// }
//
// var player = 1;
//
// var play = function(){
//   if(player === 1){
//     applyX;
//     player= player -1;
//   } else{
//     document.getElementById('box1').innerHTML = '<p>O</p>';
//   }
// }
//
// play();
//create board
var letters = ["1","2","3","4","5","6","7","8","9"]
var lettersInPlay = [];
var player = 0;

var getBoard = document.getElementById('container');
var createBoard = function(){
  for(var i =0; i <9; i++){
  var boxes = document.createElement('div');
  boxes.className = 'boxStyle';
  boxes.setAttribute('data-card', letters[i]);
  boxes.addEventListener('click', switchTurns);
  getBoard.appendChild(boxes);
}
}
// var showLetter = function{
//
// }
var switchTurns = function(){
  // lettersInPlay.push(this.getAttribute('data-card'));
  // console.log(this.getAttribute('data-card'));
lettersInPlay.push(this.getAttribute('data-card'));
console.log(this.getAttribute('data-card'));
  if(player %2 ==0){
    this.innerHTML = "<p>X</p>";
    this.className = 'boxStyle red';
  } else{
    this.innerHTML = "<p>O</p>";
    this.className = 'boxStyle blue';
  }
  player = player +1;

  isWinner(lettersInPlay);
  if(lettersInPlay.length >= 9){
    alert("Tie Game, Try Again");
    boxes.removeEventListener('click', switchTurns);
  }

}

function isWinner(){
  // var move = //get specific div
  if(lettersInPlay[0] == "X"&& lettersInPlay[1] == "X" && lettersInPlay[3] =="X"){
    alert("X wins")
  }
}

createBoard();




// var changeTwo = function(){
// var theBox2 = document.getElementById("box2");
// var changeColor = function(){
//   theBox2.innerHTML ='<p>O</p>';
// };
//
// this.addEventListener("click", changeColor);
// }
//
// changeTwo();
// var cards = ['queen', 'queen', 'king', 'king'];
//
// var cardsInPlay = [];
//
// var getGameBoard = document.getElementById('game-board');
//
// var createBoard = function(){
// for(var i = 0; i < cards.length; i++){
//   var cardDivs = document.createElement('div');
//   cardDivs.className = 'card';
//   cardDivs.setAttribute('data-card', cards[i]);
//   cardDivs.addEventListener('click', isTwoCards);
//   getGameBoard.appendChild(cardDivs);
//
//
// }
// };
//
//
// function isTwoCards(){
//   cardsInPlay.push(this.getAttribute('data-card'));
//   console.log(this.getAttribute('data-card'));
//   if (this.getAttribute('data-card') === 'king') {
//     this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
//   } else {
//     this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
//   }
//
//
//
//   // if you have two cards in play check for a match
//   if (cardsInPlay.length === 2) {
//
//     // pass the cardsInPlay as an argument to isMatch function
//     isMatch(cardsInPlay);
//
//     // clear cards in play array for next try
//     cardsInPlay = [];
//     if(cardsInPlay = []){
//     cardsInPlay.push(this.getAttribute('data-card'));
//   console.log(this.getAttribute('data-card'));
//   if (this.getAttribute('data-card') === 'king') {
//     this.innerHTML = ""; // king
//   } else {
//     this.innerHTML = ""; //queen
//   }
//     }
//   }
// }
//  function isMatch(cards){
//    if(cards[0]===cards[1]){
//      alert("You found a match!");
//    } else {
//      alert("sorry, try again");
//    }
//  }
//
//
//
//
//   createBoard();
