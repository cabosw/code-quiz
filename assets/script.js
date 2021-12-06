
//variables for question content and input labels
var question = document.getElementById("question");
var choiceOne = document.getElementById("a");
var choiceTwo = document.getElementById("b");
var choiceThree = document.getElementById("c");
var choiceFour = document.getElementById("d");
var score = [];
var timeLeft = 60;
var timeInterval;
var scoreList = document.getElementById('scoreList');
const storedHighScores = 'highScores'
var highScores;
//array of question content objects
var questionList = [
	{
		question: "What data type returns a value of true or false?",
		a: "Symbol",
		b: "Boolean",
		c: "String",
		d: "BigInt",
		correct: "Boolean"
	},
	{
		question: "Which of the following is NOT a correct way to declare a variable?",
		a: "let",
		b: "var",
		c: "new",
		d: "const",
		correct: "new"
	},
	{
		question: "What does the sort() method do?",
			a: "Retrieve a specific element from an array",
			b: "Combines all array elements into a string",
			c: "Adds a new item to an array",
			d: "Sorts an array alphabetically",
			correct: "Sorts an array alphabetically"
	},
	{
		question: "Which of the following math functions returns a rounded integer?",
		a: "Math.max()",
		b: "Math.abs()",
		c: "Math.round()",
		d: "Math.pow()",
		correct: "Math.round()"
	}
]
//countdown timer function
function timer() {
	var countdownEl = document.getElementById("countdown");
	//countdown function
	var timeInterval = setInterval(function() {
		
  //adds timer
	if (timeLeft >= 0){
    countdownEl.textContent= 'Time left: ' + timeLeft ;
    timeLeft --;
    }else{
      clearInterval(timeInterval);
      alert('Time is up');
    }
	if (questionCount >= questionList.length){
		clearInterval(timeInterval);
	}

  },1000);   
}

//function to reveal hidden question content
function revealHidden() {
	document.getElementById("initial").style.display='none';
	document.getElementById("highScore").style.display='none';
	for (let element of document.getElementsByClassName("hidden")){
		element.style.display="block";
 }
}

function revealHighScore() {
	quiz.style.display='none';
	highScore.style.display='block';
	countdown.style.display='none';
	yourScore.textContent= 'You scored ' + score + ' out of 4';
}
var questionCount = 0;

function generateQuestion() {

	var i = questionCount
	if (questionCount >= questionList.length ) {
		alert('quiz over');
		// hideQuiz();
		revealHighScore();
		// localStorage.setItem("score", JSON.stringify(scoreList));
	} else {

		questionTitle = questionList[i].question;
		question.textContent = questionTitle;
	
		choiceOne.textContent = questionList[i].a;
		choiceTwo.textContent = questionList[i].b;
		choiceThree.textContent = questionList[i].c;
		choiceFour.textContent = questionList[i].d;
	}
}

function checkAnswer(event) {
	
	var response = event.target.textContent
	var answer = questionList[questionCount].correct;
		if (response === answer) {
		alert("correct");
		score++ ;
		console.log(score);
	} else if (response != answer) {
		alert ('Incorrect! 10 second penalty');
		timeLeft = timeLeft - 10;
	}
	questionCount++;
	console.log(questionCount);
	generateQuestion();
}

function submitScore() {
	const newScore = {
		name: document.querySelector("input[name='initials']").value,
		score: score
	};

	
	const highScoreString = localStorage.getItem(storedHighScores);
	highScores = 	JSON.parse(highScoreString) ?? [];
	highScores.push(newScore);
	highScores.splice(5);
	localStorage.setItem(storedHighScores, JSON.stringify(highScores));
	console.log(highScores);

	var name = document.querySelector("input[name='initials']").value;
	var highScoreEl = document.createElement("li");
	highScoreEl.textContent = name + " scored " + score + " out of 4";
	scoreList.appendChild(highScoreEl);
	getScores()
}

function getScores() {
	var localHighScoresString = localStorage.getItem(storedHighScores);
	var localHighScores = 	JSON.parse(localHighScoresString) ;
	for (var i=0; i<localHighScores.length; i++) {
		var createLi = document.createElement("li");
		createLi.textContent = localHighScores[i].name + " scored " + localHighScores[i].score + " out of 4";
		scoreList.appendChild(createLi);
	}
}


//start quiz button 
document.querySelector('#start-quiz').addEventListener('click',function() {
	revealHidden();
	timer();
	generateQuestion();
});

document.querySelectorAll('button[name="answer"]').forEach((elem) => {
	elem.addEventListener("click", checkAnswer);
})

document.querySelector('#submitScore').addEventListener('click', function(event) {
	event.preventDefault();
	submitScore()
});