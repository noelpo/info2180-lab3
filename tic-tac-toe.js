 
document.addEventListener('DOMContentLoaded' , ()=>{

var size = document.getElementById('board').children;
const X_PLAYER = 'X';
const O_PLAYER = 'O';
let clicked ;
var counter;
let turn = 0;
const restartButton = document.getElementsByClassName('btn')
const winningMessageElement = document.getElementById('status')
const winningMessageTextElement = document.querySelector('you-won')

//restartButton.addEventListener('click', handleClick)


const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
//function checkWin(status) {
  //return WINNING_COMBINATIONS.some(combination => {
   // return combination.every(index => {
    //return size[counter].classList.contains(status)
    //  winningMessageTextElement.innerText = `${status ? " Congratulation O" : " Congratulations X's"} Wins!`
   // })
  ///})
//}

for(counter =0;counter  <  size.length; counter++){
   

     size[counter].setAttribute("class","square");
     size[counter].addEventListener('click',handleClick)
     size[counter].addEventListener('mouseover',handleClick)
     //size[counter].addEventListener('mouseout',handleClick)

      
}
function handleClick(event){

  if(turn ==  0){
    event.target.innerHTML= X_PLAYER;
    event.target.classList.add("hover");
    event.target.classList.add("X");
    clicked = X_PLAYER;
    


  }else  if(clicked == X_PLAYER){
    event.target.innerHTML= O_PLAYER;
    event.target.classList.add("hover");
    event.target.classList.add("O");
    clicked = O_PLAYER;

  }else{
    event.target.innerHTML = X_PLAYER;
    event.target.classList.add("X");
    clicked = X_PLAYER;
  }
  
}
  turn +=1;

})