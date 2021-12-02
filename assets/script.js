var countdownEl = document.getElementById("timer");

  document.querySelector('#start-quiz').addEventListener('click',function() {
  var timeLeft = 300;

  var timeInterval = setInterval(function() {
    document.getElementById("initial").style.visibility='hidden';
    document.getElementById("high-score").style.visibility='hidden';
    if (timeLeft > 0){
    countdownEl.textContent= 'Time left: ' + timeLeft ;
    timeLeft--;
    }else{
      clearInterval(timeInterval);
      countdownEl.textContent ='Time:';
    }
  },1000); 
  console.log(timeInterval);
});

