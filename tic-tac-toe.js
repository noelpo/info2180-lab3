
window.onload = function () {

  var boxes = document.getElementById("board");
    var box_tag = boxes.getElementsByTagName("div");
    let circleAtempt;
    const x_class = "X";
    const o_class= "O";
    let winner = document.getElementById("status");
    var button_Stat = document.getElementsByClassName("btn")[0];
    const winning_Combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    var counter;
    for ( counter = 0; counter < box_tag.length; counter++) {
       var box = box_tag[counter];
        box.setAttribute("class","square");
    
    box.addEventListener("click",clicked,{once:true});
    
    
}

    function clicked(e) {
        const box = e.target
        const activePlayer = circleAtempt ? x_class : o_class
        placeMark(box,activePlayer)
        swapTurns()
         win()
        
    }

    function placeMark(box,activePlayer) {
        
        box.classList.add(activePlayer)
        if (box.className == "square O") {
            box.innerHTML = "O"
        } else {
            box.innerHTML = "X"
        }
        
    }

    function swapTurns() {
        circleAtempt = !circleAtempt
    }

    
    function win() {
       
       
        
       if (box_tag[0].className == "square X" && box_tag[1].className == "square X" && box_tag[2].className == "square X") {
           winner.classList.add("you-won")
           winner.innerHTML = "Congratulations! X is the Winner!";
       }

       if (box_tag[0].className == "square O" && box_tag[1].className == "square O" && box_tag[2].className == "square O") {
        winner.classList.add("you-won")
        winner.innerHTML = "Congratulations! O is the Winner!";
    }
    
    if (box_tag[3].className == "square X" && box_tag[4].className == "square X" && box_tag[5].className == "square X") {
        winner.classList.add("you-won")
        winner.innerHTML = "Congratulations! X is the Winner!";
    }

    if (box_tag[3].className == "square O" && box_tag[4].className == "square O" && box_tag[5].className == "square O") {
        winner.classList.add("you-won")
        winner.innerHTML = "Congratulations! O is the Winner!";
 }
 
 if (box_tag[6].className == "square X" && box_tag[7].className == "square X" && box_tag[8].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[6].className == "square O" && box_tag[7].className == "square O" && box_tag[8].className == "square O") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! O is the Winner!";
}

if (box_tag[0].className == "square X" && box_tag[3].className == "square X" && box_tag[6].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[0].className == "square O" && box_tag[3].className == "square O" && box_tag[6].className == "square O") {
    winner.classList.add("you-won")
   winner.innerHTML = "Congratulations! O is the Winner!";
}


if (box_tag[1].className == "square X" && box_tag[4].className == "square X" && box_tag[7].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[1].className == "square O" && box_tag[4].className == "square O" && box_tag[7].className == "square O") {
  winner.classList.add("you-won")
   winner.innerHTML = "Congratulations! O is the Winner!";
}


if (box_tag[2].className == "square X" && box_tag[5].className == "square X" && box_tag[8].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[2].className == "square O" && box_tag[5].className == "square O" && box_tag[8].className == "square O") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! O is the Winner!";
}


if (box_tag[0].className == "square X" && box_tag[4].className == "square X" && box_tag[8].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[0].className == "square O" && box_tag[4].className == "square O" && box_tag[8].className == "square O") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! O is the Winner!";
}


if (box_tag[2].className == "square X" && box_tag[4].className == "square X" && box_tag[6].className == "square X") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! X is the Winner!";
}

if (box_tag[2].className == "square O" && box_tag[4].className == "square O" && box_tag[6].className == "square O") {
    winner.classList.add("you-won")
    winner.innerHTML = "Congratulations! O is the Winner!";
}

}

button_Stat.addEventListener("click",clearBoard);
function clearBoard() {
    for ( let p = 0; p < box_tag.length; p++) {
    box_tag[p].innerHTML = '';
    box_tag[p].classList.remove("X");
    box_tag[p].classList.remove("O");
    
    winner.classList.remove("you-won");
    winner.innerHTML = "Move your mouse over a square and click to play an X or an O";
    }
}





} 