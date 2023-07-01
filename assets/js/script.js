var body = document.body;
var button = document.createElement("button");
button.setAttribute("style", "width: 40px; font-size: 16px; background: blue");

var clock = document.querySelector(".clock");
var quiz = document.querySelector(".quiz");
var timeLeft = 10;
clock.setAttribute("style", "width: 50px; height: 20px");
body.quiz.appendChild(button);

//setTime runs timer element inside clock class. Currently functional. Don't change it.
function setTime() {
    
    var timerInterval = setInterval(function() {
      timeLeft--; //decrements time left by 1, every 1000ms
      clock.textContent = "You have " + timeLeft + " seconds remaining"; //displays time remaining 
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      } 
    }, 1000);
  }
clock.appendChild(setTime());


