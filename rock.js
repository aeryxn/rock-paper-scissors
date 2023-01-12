const choices = ["rock", "paper", "scissors"];
const aiChoice = Math.floor(Math.random() * choices.length);
playButton = document.getElementById("play");

playButton.addEventListener("click", function () {
	playButton.remove();

	const options = document.createElement("ul");
	const rock = document.createElement("li");
	const paper = document.createElement("li");
	const scissors = document.createElement("li");

	options.id = "options";

	document.body.appendChild(options);
	options.appendChild(rock);
	options.appendChild(paper);
	options.appendChild(scissors);

	options.style.display = "inline-flex";
	options.style.listStyle = "none";
	options.style.fontSize = "100px";
	paper.style.padding = "0px 50px 0px 50px";
	rock.style.cursor = "pointer";
	paper.style.cursor = "pointer";
	scissors.style.cursor = "pointer";

	rock.innerHTML = "Rock";
	paper.innerHTML = "Paper";
	scissors.innerHTML = "Scissors";

	function result() {
		gameOver = document.createElement("h1");
		document.body.appendChild(result);
		gameOver.innerHTML = "You Lost";
	}

	rock.addEventListener("click", function () {
		if (aiChoice == "rock") {
		}
	});
});
