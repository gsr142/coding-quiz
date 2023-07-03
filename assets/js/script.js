var body = document.body;
var clock = document.querySelector(".clock");
var quiz = document.querySelector(".quiz");

var startButton = document.createElement("button");
startButton.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");
startButton.textContent = "Begin quiz";

//Create answer buttons
var button1 = document.createElement("button");
button1.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");

var button2 = document.createElement("button");
button2.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");

var button3 = document.createElement("button");
button3.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");

var button4 = document.createElement("button");
button4.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");


answerButtons = [button1, button2, button3, button4]


var timeLeft = 20;

//set up welcome screen with start button
var welcome = document.createElement("h1");
welcome.textContent = "Welcome to the Full Stack Code quiz!";
var welcome2 = document.createElement("h2")
welcome2.textContent = "Answer the questions before time runs out. Be careful, wrong answers recieve a time penalty. Compete with your friends, coworkers, or even yourself."
var lineBreak = document.createElement("br")
quiz.appendChild(welcome);
quiz.appendChild(lineBreak);
quiz.appendChild(lineBreak);
quiz.appendChild(welcome2);
quiz.appendChild(startButton);





startButton.addEventListener("click", runQuiz)



//shows the time remaining in the upper right corner
function setTime() {
    
    var timerInterval = setInterval(function() {
      timeLeft--; //decrements time left by 1, every 1000ms
      clock.textContent = "You have " + timeLeft + " seconds remaining"; //displays time remaining 
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      } 
    }, 1000);
  }

var question1 = document.createElement("h2")
question1.textContent = "Which symbol is used to denote HTML tags?";  
var question1Answers = ['<>', '{}', '[]', "::"];

var question2 = document.createElement("h2")
question2.textContent = "Which programming language is used to build the basic framework of a web page?";
var question2Answers = ['JavaScript', 'HTML', 'CSS', 'Python']

function answersToButtons (answers) {
  for (let i=0; i < answerButtons.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      answerButtons[i].textContent = answers[i]
    }
  }
}

function postNewQuestion (question, answers) {
  quiz.appendChild(question);
  answersToButtons(answers);
  quiz.appendChild(button1);
  quiz.appendChild(button2);
  quiz.appendChild(button3);
  quiz.appendChild(button4);
}

//clears element of child elements. used to switch questions
function clearElements (element){
  while  (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}


function runQuiz () {
  clearElements(quiz);
  setTime();
  postNewQuestion(question1, question1Answers)
  
}



