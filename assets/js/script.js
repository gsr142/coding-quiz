var body = document.body;
//Create answer buttons
var startButton = document.createElement("button");
startButton.setAttribute("style", "font-size: 16px; background: blue; color: white");
startButton.textContent = "Begin quiz";

var button2 = document.createElement("button");
button2.setAttribute("style", "font-size: 16px; background: blue; color: white");

var button3 = document.createElement("button");
button3.setAttribute("style", "font-size: 16px; background: blue; color: white");

var button4 = document.createElement("button");
button4.setAttribute("style", "font-size: 16px; background: blue; color: white");

var clock = document.querySelector(".clock");
var quiz = document.querySelector(".quiz");
var timeLeft = 10;
//clock.setAttribute("style", "width: 50px; height: 20px");
var dummy = document.createElement("div");

quiz.appendChild(startButton);
startButton.addEventListener("click", setTime)
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



