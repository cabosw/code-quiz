
//variables for question content and input labels
var question = document.getElementById("question");
var one = document.getElementById("a");
var two = document.getElementById("b");
var three = document.getElementById("c");
var four = document.getElementById("d");


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
		correct: "Math.max()"
	}
]
//countdown timer function
function timer() {
	var countdownEl = document.getElementById("timer");
	
	//hides quiz start page content
	document.getElementById("initial").style.display='none';
	document.getElementById("high-score").style.display='none';
	
	//defines initial start time for countdown
	var timeLeft = 300;
	
	//countdown function
	var timeInterval = setInterval(function() {
		
  //adds timer
	if (timeLeft > 0){
    countdownEl.textContent= 'Time left: ' + timeLeft ;
    timeLeft--;
    }else{
      clearInterval(timeInterval);
      countdownEl.textContent ='Time is up';
    }
  },1000);   
}

//function to reveal hidden question content
function revealHidden() {
	for (let element of document.getElementsByClassName("hidden")){
		element.style.display="block";
 }
}

function generateQuestion() {
	var i = 0;
	var question = document.getElementById("question");
	var one = document.getElementById("a");
	var two = document.getElementById("b");
	var three = document.getElementById("c");
	var four = document.getElementById("d")
	questionTitle = questionList[i].question;
	choiceOne = questionList[i].a;
	choiceTwo = questionList[i].b;
	choiceThree = questionList[i].c;
	choiceFour = questionList[i].d;

	question.textContent = questionTitle;
	one.textContent = choiceOne
	two.textContent = choiceTwo;
	three.textContent = choiceThree;
	four.textContent = choiceFour;


}

//start quiz button 
document.querySelector('#start-quiz').addEventListener('click',function() {
	revealHidden();
	timer();
	generateQuestion();
});

//submit button
document.querySelector('#submit').addEventListener('click',function() {
	window.alert("test");
});