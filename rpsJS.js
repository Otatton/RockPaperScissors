/*
author: otatton
date: 11/26/16
javascript file for RPS.htm

*/

var list = ["rock", "paper", "scissors"];

function rps(player){
   
	 var choice = list[player];
	 var computer = Math.floor(Math.random() * 3);
	 var compImg = list[computer];
	 compImg += ".jpg";
	 document.getElementById("question").src = compImg;
	 //compare player choice to random computer choice
	 compare(player, computer);
	 
	 //check for victory conditions
	 var win = parseInt(document.getElementById("win").innerHTML);
	 var lose = parseInt(document.getElementById("lose").innerHTML);
	 if((win + lose) >= 3){
	    if(win > lose){
				 document.getElementById("gameOver").src = "winner.gif";
			}
	    else{
				 document.getElementById("gameOver").src = "loser.gif";
			}
			document.getElementById("result").style.display = "block";
			document.getElementById("nextRound").style.visibility = "hidden";
			document.getElementById("newGame").style.visibility = "visible";
	 }
}

function compare(p, c){
   //compare player vs computer choices and updates the score
	 var lose = parseInt(document.getElementById("lose").innerHTML);
	 var win = parseInt(document.getElementById("win").innerHTML);
	 var text;
   if(p == c){
	    //alert("That was a draw!");
			text = "That was a draw </br>Your score is still " + win + " while your opponent has a score of " + lose;
	 }
	 else if((p == 0 && c == 1) || (p == 1 && c == 2) || (p == 2 && c == 0)){
	    
			lose += 1;
			document.getElementById("lose").innerHTML = lose;
			text = "You lost </br>Your score is " + win + " while your opponent has a score of " + lose; 
	 }
	 else{
	    
			win += 1;
			document.getElementById("win").innerHTML = win;
			text = "You won </br>Your score is " + win + " while your opponent has a score of " + lose;
	 }
	 document.getElementById("info").innerHTML = text;
}


function unHide(){
   document.getElementById('rock').style.visibility = "visible";
	 document.getElementById('paper').style.visibility = "visible";
	 document.getElementById('scissors').style.visibility = "visible";
}

function hide(a, b){
   document.getElementById(list[a]).style.visibility = "hidden";
	 document.getElementById(list[b]).style.visibility = "hidden";
}

function reset(){
   document.getElementById("question").src = "question.jpg";
   document.getElementById("win").innerHTML = 0;
	 document.getElementById("lose").innerHTML = 0;
	 document.getElementById("gameOver").src = "";
	 document.getElementById("nextRound").style.visibility = "visible";
	 unHide();
	 document.getElementById("newGame").style.visibility = "hidden";
	 document.getElementById("info").innerHTML = "";
}

