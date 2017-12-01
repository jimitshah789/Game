var spanP1 = document.getElementById("spanP1");
var spanP2 = document.getElementById("spanP2");
var spanP = document.getElementById("spanP");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var gameOver = false;
var winningScore = 5;


player1.addEventListener("click", function(){
	if(!gameOver){
	scorePlayer1++;
	spanP1.textContent = scorePlayer1;
	if(scorePlayer1 === winningScore){
		gameOver = true;
		spanP1.classList.add("green");
	}
}
});

player2.addEventListener("click", function(){
	if(!gameOver){
	scorePlayer2++;
	spanP2.textContent = scorePlayer2;
	if(scorePlayer2 === winningScore){
		gameOver = true;
		spanP2.classList.add("green");
	}
}
});

reset.addEventListener("click", function(){
	spanP1.textContent = 0;
	spanP2.textContent = 0;
	scorePlayer2 = 0;
	scorePlayer1 = 0;
	gameOver = false;
	spanP1.classList.remove("green");
	spanP2.classList.remove("green");
});

			