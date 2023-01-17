//setting variables

const choices = ["rock", "paper", "scissors"];
const settings = document.createElement("h1");
const options = document.getElementById("options");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerRecord = 0;
let aiRecord = 0;
let round = 1;
let playerChoice = "";
let rounds = 3;
let aiChoice = "";

var win;
var tie;
var settingsUp = false;

document.body.appendChild(settings);
settings.id = "settings";

//css

options.style.display = "inline-flex";
options.style.listStyle = "none";
options.style.fontSize = "100px";

paper.style.padding = "0px 50px 0px 50px";
paper.style.cursor = "pointer";

rock.style.cursor = "pointer";

scissors.style.cursor = "pointer";

settings.style.cursor = "pointer";
settings.style.border = "5px solid white";
settings.style.padding = "5px";

//changing innerhtml

rock.innerHTML = "rock";

paper.innerHTML = "paper";

scissors.innerHTML = "scissors";
settings.innerHTML = "settings";

//game functions

function reset () {
	settings.innerHTML = "settings";
	settings.style.border = "5px solid white";

	if (document.getElementById("roundsPick")) {
		document.getElementById("roundsPick").remove();
	}
	if (document.getElementById("youChose")) {
		document.getElementById("youChose").remove();
	}
	if (document.getElementById("backButton")) {
		document.getElementById("backButton").remove();
	}
	if (document.getElementById("roundCount")) {
		document.getElementById("roundCount").remove();
	}
	document.getElementById("result").innerHTML = "Rock Paper Scissors vs AI";
	const roundCount = document.createElement("h1");
	document.body.appendChild(roundCount);
	roundCount.id = "roundCount";
	if (round > 1) roundCount.innerHTML = "Round: " + round;
	rock.innerHTML = "rock";
	scissors.innerHTML = "scissors";
	paper.innerHTML = "paper";
	if (document.getElementById("again")) {
		document.getElementById("again").remove();
	}
	if (document.getElementById("choice1")) {
		document.getElementById("choice1").remove();
	}
}

function playAgain () {
	if (document.getElementById("again")) {
		document.getElementById("again").remove();
	}
	const again = document.createElement("h1");
	document.body.appendChild(again);
	again.id = "again";
	again.style.border = '5px solid white';
	again.style.bottom = '10%';
	again.style.cursor = "pointer";
	again.style.padding = "5px";

	if (playerRecord == 3 && rounds == 5) {
		again.innerHTML = "click to start new game (settings will be reset)";
		again.addEventListener("click", function () {
			window.location.reload();
		});
	} else if (aiRecord == 3 && rounds == 5) {
		again.innerHTML = "click to start new game (settings will be reset)";
		again.addEventListener("click", function () {
			window.location.reload();
		});
	} else if (aiRecord == 2 && rounds == 3) {
		again.innerHTML = "click to start new game (settings will be reset)";
		again.addEventListener("click", function () {
			window.location.reload();
		});
	} else if (playerRecord == 2 && rounds == 3) {
		again.innerHTML = "click to start a new game (settings will be reset)";
		again.addEventListener("click", function () {
			window.location.reload();
		});
	} else if (round == rounds){
		again.innerHTML = "click to start a new game (settings will be reset)";
		again.addEventListener("click", function () {
			window.location.reload();
		});
	} else {
		again.innerHTML = "click to play next round (" + round + "/" + rounds + ")";
		again.addEventListener("click", function () {
			round++;
			reset();
		});
	}
}

settings.addEventListener("click", function () {
	settings.innerHTML = "";
	settings.style.border = "none";
	rock.innerHTML = "";
	paper.innerHTML = "";
	scissors.innerHTML = "";
	document.getElementById("result").innerHTML = "Settings";
	document.getElementById("pick").innerHTML = "";
	backButton = document.createElement("h1");
	backButton.id = "backButton";
	backButton.style.cursor = "pointer";
	document.body.appendChild(backButton);
	backButton.innerHTML = "Back";
	backButton.style.border = "5px solid white";
	backButton.style.padding = "5px";
	settingsUp = true;

	const roundsPick = document.createElement("h1");
	document.body.appendChild(roundsPick);
	roundsPick.innerHTML = "5 rounds";
	roundsPick.style.border = "5px solid white";
	roundsPick.style.cursor = "pointer";
	roundsPick.id = "roundsPick";

	roundsPick.addEventListener("click", function () {
		rounds = 5;
		roundsPick.innerHTML = "5 rounds (refresh to turn off) | on";
	});
	
	backButton.addEventListener("click", function () {
		reset();
		settingsUp = false;
	});
});

function game (e) {
	let aiChoice = choices[Math.floor(Math.random() * choices.length)];
	document.getElementById("pick").innerHTML = "";
	settings.innerHTML = "";
	settings.style.border = "none";
	
	if (e === document.getElementById("rock")) {
		paper.innerHTML = "";
		scissors.innerHTML = "";
		playerChoice = "rock";
	}
	if (e === document.getElementById("paper")) {
		rock.innerHTML = "";
		scissors.innerHTML = "";
		playerChoice = "paper";
	}
	if (e === document.getElementById("scissors")) {
		rock.innerHTML = "";
		paper.innerHTML = "";
		playerChoice = "scissors";
	}
	if (aiChoice === e.innerHTML) {
		e.innerHTML = "Tie game. (" + playerRecord + " to " + aiRecord + ")";
		win = "T";
		tie = true;
	}
	if (e.innerHTML === "rock" && aiChoice === "scissors") {
		playerRecord++;
		e.innerHTML = "You win! (" + playerRecord + " to " + aiRecord + ")";
		win = "W";
	}
	if (e.innerHTML === "rock" && aiChoice === "paper") {
		aiRecord++;
		e.innerHTML = "You lost. (" + playerRecord + " to " + aiRecord + ")";
		win = "L";
	}
	if (e.innerHTML === "scissors" && aiChoice === "paper") {
		playerRecord++;
		e.innerHTML = "You won! (" + playerRecord + " to " + aiRecord + ")";
		win = "W";
	}
	if (e.innerHTML === "scissors" && aiChoice === "rock") {
		aiRecord++;
		e.innerHTML = "You lost. (" + playerRecord + " to " + aiRecord + ")";
		win = "L";
	}
	if (e.innerHTML === "paper" && aiChoice === "rock") {
		playerRecord++;
		e.innerHTML = "You won! (" + playerRecord + " to " + aiRecord + ")";
		win = "W";
	}
	if (e.innerHTML === "paper" && aiChoice === "scissors") {
		aiRecord++;
		e.innerHTML = "You lost. (" + playerRecord + " to " + aiRecord + ")";
		win = "L";
	}

	playAgain();
	const score = document.createElement("li");
	document.getElementById("scoreboard").appendChild(score);
	score.id = "score";
	score.innerHTML = "game " + round + " | AI's " + aiChoice + " to your " + playerChoice + " | " + win;
}