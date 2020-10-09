 
document.addEventListener('DOMContentLoaded' , ()=>{

const boxes = document.querySelectorAll("board");
const X_PLAYER = 'X';
const O_PLAYER = 'O';
let clicked ;
let turn = 0;

var size = document.getElementById('board').children;


var counter;

//const restartButton = document.getElementsByClassName('btn')
//const winningMessageElement = document.getElementById('status')
//const winningMessageTextElement = document.querySelector('you-won')

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
    //return size[counter].classList.contains(status
    //  winningMessageTextElement.innerText = `${status ? " Congratulation O" : " Congratulations X's"} Wins!`
   // })
  ///})
//}

for(counter =0;counter  <  size.length; counter++){
   

     size[counter].setAttribute("class","square");
     size[counter].addEventListener('click',handleClick);
     size[counter].addEventListener('mouseover',hoverr);
     size[counter].addEventListener('mouseout',nohoverr);
     size[counter].addEventListener('click',checkWin)
     //size[counter].addEventListener('mouseout',handleClick)

      
}
function handleClick(event){
   var b_array= Array.from(boxes)
   var index = b_array.indexOf(event.target)
   console.log(b_array)

  if(turn ==  0){
    event.target.innerHTML= X_PLAYER;
    //event.target.classList.add("hover");
    event.target.classList.add("X");
    clicked = X_PLAYER;
    


  }else  if(clicked == X_PLAYER){
    event.target.innerHTML= O_PLAYER;
    //event.target.classList.add("hover");
    event.target.classList.add("O");
    clicked = O_PLAYER;

  }else{
    event.target.innerHTML = X_PLAYER;
    event.target.classList.add("X");
    clicked = X_PLAYER;
  }
  
}
  turn +=1;
  function hoverr(event){
    event.target.classList.add('hover');
  }
  function nohoverr(event){
    event.target.classList.remove('hover');
  }
  function checkWin(){
    if( b_array[0].textContent === "X" && b_array[1].textContent === "X" && b_array[2].textContent === "X"){
      alert('you-won')
    }else if(b_array[3].textContent === "X" && b_array[4].textContent === "X" && b_array[5].textContent === "X"){
      alert('you-won')
    }else if (b_array[6].textContent === "X" && b_array[7].textContent === "X" && b_array[8].textContent === "X"){
      alert('you-won')
    }   else if (b_array[0].textContent === "O" && b_array[1].textContent === "O" && b_array[2].textContent === "O"){
       alert('you-won')
    } else  if (b_array[3].textContent === "O" && b_array[4].textContent === "O" && b_array[5].textContent === "O"){
      alert('you-won')
    }else if (b_array[6].textContent === "O" && b_array[7].textContent === "O" && b_array[8].textContent === "O"){

    }
  }
})
