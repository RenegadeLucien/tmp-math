function startGame() {
    document.getElementById("mainScreen").style.display = "none";
	document.getElementById("gameScreen").style.display = "inline";
	document.getElementById("resultsScreen").style.display = "none";
	document.getElementById("correct").innerHTML = 0;
	document.getElementById("incorrect").innerHTML = 0;
	setTimeout(showResults, 30000);
	newQuestion();
}

function newQuestion() {
	document.getElementById("choice1").style.display = "inline";
	document.getElementById("choice2").style.display = "inline";
	document.getElementById("choice3").style.display = "inline";
	document.getElementById("choice4").style.display = "inline";
	num1 = Math.floor(Math.random()*19)-9;
	num2 = Math.floor(Math.random()*19)-9;
	add = Math.floor(Math.random()*2);
	correctAnswer = -99;
	displayString = "";
	if (add) {
		correctAnswer = num1 + num2;
		displayString = "" + num1 + " + " + num2;
	} else {
		correctAnswer = num1 - num2;
		displayString = "" + num1 + " - " + num2;
	}
	incorrectAnswer1 = Math.floor(Math.random()*37)-18;
	if (incorrectAnswer1 == correctAnswer) {
		incorrectAnswer1++;
	}
	incorrectAnswer2 = Math.floor(Math.random()*37)-18;
	if (incorrectAnswer2 == correctAnswer) {
		incorrectAnswer2++;
	}
	if (incorrectAnswer2 == incorrectAnswer1) {
		incorrectAnswer2++;
	}
	incorrectAnswer3 = Math.floor(Math.random()*37)-18;
	if (incorrectAnswer3 == correctAnswer) {
		incorrectAnswer3++;
	}
	if (incorrectAnswer3 == incorrectAnswer1) {
		incorrectAnswer3++;
	}
	if (incorrectAnswer3 == incorrectAnswer2) {
		incorrectAnswer3++;
	}
	correctChoice = Math.floor(Math.random()*4);
	document.getElementById("question").innerHTML = displayString;
	if (correctChoice == 0) {
		document.getElementById("choice1").innerHTML = correctAnswer;	
		document.getElementById("choice2").innerHTML = incorrectAnswer1;		
		document.getElementById("choice3").innerHTML = incorrectAnswer2;
		document.getElementById("choice4").innerHTML = incorrectAnswer3;
		document.getElementById("choice1").onclick = correctAnswerHandler;
		document.getElementById("choice2").onclick = incorrectAnswerHandler;
		document.getElementById("choice3").onclick = incorrectAnswerHandler;
		document.getElementById("choice4").onclick = incorrectAnswerHandler;
	} else if (correctChoice == 1) {
		document.getElementById("choice1").innerHTML = incorrectAnswer1;
		document.getElementById("choice2").innerHTML = correctAnswer;
		document.getElementById("choice3").innerHTML = incorrectAnswer2;
		document.getElementById("choice4").innerHTML = incorrectAnswer3;
		document.getElementById("choice1").onclick = incorrectAnswerHandler;
		document.getElementById("choice2").onclick = correctAnswerHandler;
		document.getElementById("choice3").onclick = incorrectAnswerHandler;
		document.getElementById("choice4").onclick = incorrectAnswerHandler;
	} else if (correctChoice == 2) {
		document.getElementById("choice1").innerHTML = incorrectAnswer1;
		document.getElementById("choice2").innerHTML = incorrectAnswer2;
		document.getElementById("choice3").innerHTML = correctAnswer;
		document.getElementById("choice4").innerHTML = incorrectAnswer3;
		document.getElementById("choice1").onclick = incorrectAnswerHandler;
		document.getElementById("choice2").onclick = incorrectAnswerHandler;
		document.getElementById("choice3").onclick = correctAnswerHandler;
		document.getElementById("choice4").onclick = incorrectAnswerHandler;
	} else {
		document.getElementById("choice1").innerHTML = incorrectAnswer1;
		document.getElementById("choice2").innerHTML = incorrectAnswer2;
		document.getElementById("choice3").innerHTML = incorrectAnswer3;
		document.getElementById("choice4").innerHTML = correctAnswer;
		document.getElementById("choice1").onclick = incorrectAnswerHandler;
		document.getElementById("choice2").onclick = incorrectAnswerHandler;
		document.getElementById("choice3").onclick = incorrectAnswerHandler;
		document.getElementById("choice4").onclick = correctAnswerHandler;
	} 
}

function correctAnswerHandler() {
	document.getElementById("correct").innerHTML++;
	newQuestion();
}

function incorrectAnswerHandler() {
	document.getElementById("incorrect").innerHTML++;
	document.getElementById("choice1").style.display = "none";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("question").innerHTML = "Stunned!";
	window.setTimeout(newQuestion, 3000);
}

function showResults() {
	document.getElementById("gameScreen").style.display = "none";
	document.getElementById("resultsScreen").style.display = "inline";
	correct = document.getElementById("correct").innerHTML;
	incorrect = document.getElementById("incorrect").innerHTML;
	accuracy = (+correct / (+correct + +incorrect))*100;
	document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
	document.getElementById("incorrect").innerHTML = "Incorrect Answers: " + incorrect;
	document.getElementById("accuracy").innerHTML = "Accuracy: " + accuracy + "%";
	if (correct >= 40 && accuracy == 100) {
		document.getElementById("grade").innerHTML = "Grade: SSS";
		document.getElementById("resultText").innerHTML = "Are you serious right now?! I hope you took a video of this so I can watch it and then just sit there in stunned silence that someone actually pulled this off.";
	} else if (correct >= 35 && accuracy == 100) {
		document.getElementById("grade").innerHTML = "Grade: S+";
		document.getElementById("resultText").innerHTML = "...This is about the point where I will kindly ask you to slow the heck down, because you're scaring me."
	} else if (correct >= 30 && accuracy == 100) {
		document.getElementById("grade").innerHTML = "Grade: S";
		document.getElementById("resultText").innerHTML = "Dang, I hope I don't actually have to face you in a game of TMP.";
	} else if (correct >= 25 && accuracy >= 95) {
		document.getElementById("grade").innerHTML = "Grade: A+";
		document.getElementById("resultText").innerHTML = "I'm impressed! You probably don't have to worry about getting killed by this minigame anymore.";
	} else if (correct >= 20 && accuracy >= 90) {
		document.getElementById("grade").innerHTML = "Grade: A";
		document.getElementById("resultText").innerHTML = "Good job! This should be enough to survive most instances of the minigame. But perhaps you can still do better?";
	} else if (correct >= 15 && accuracy >= 80) {
		document.getElementById("grade").innerHTML = "Grade: B";
		document.getElementById("resultText").innerHTML = "Pretty solid run there! I've seen many a survivor score around this range. A little further and you could become unstoppable! Want to try again?"
	} else if (correct >= 10 && accuracy >= 70) {
		document.getElementById("grade").innerHTML = "Grade: C";
		document.getElementById("resultText").innerHTML = "It's definitely possible to survive with this. I wouldn't count on it in a full game, though. Care to try again?"
	} else if (correct >= 5 && accuracy >= 60) {
		document.getElementById("grade").innerHTML = "Grade: D";
		document.getElementById("resultText").innerHTML = "I've definitely seen worse, but this score would probably get you killed in an actual game. Want to give it another go?"
	} else {
		document.getElementById("grade").innerHTML = "Grade: E";
		document.getElementById("resultText").innerHTML = "Ah. Well...it's a good thing your life wasn't actually on the line here. Perhaps you'd like to try again?"
	}
}

function returnToMain() {
	document.getElementById("mainScreen").style.display = "inline";
	document.getElementById("gameScreen").style.display = "none";
	document.getElementById("resultsScreen").style.display = "none";
}