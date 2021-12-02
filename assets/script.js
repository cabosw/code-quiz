

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

//start quiz button 
document.querySelector('#start-quiz').addEventListener('click',function() {
	revealHidden();
	timer();
});

