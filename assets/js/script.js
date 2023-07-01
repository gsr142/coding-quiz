var clock = document.querySelector(".clock");
var quiz = document.querySelector(".quiz");

var timeLeft = 10;


function quizTimer () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        clock.textContent = "Time remaining: " + timeLeft + " seconds";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //add function to end quiz here

        
        }
    }, 1000);
}
quizTimer();
