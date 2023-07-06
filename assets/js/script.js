//declare global variables. Not completed in this order
var body = document.body;
var clock = document.querySelector(".clock");
var questionElement = document.getElementById("questions");
//text for the start button
var h1 = document.createElement("h1");
h1.textContent = "Welcome to the Full Stack Code Quiz!"
var h2 = document.createElement("h2");
h2.textContent = "Test your knowledge of the tools used for full stack web develpment. Click anywhere in this box to begin.";
//create start button
var startButton = document.createElement("button");
startButton.setAttribute("style", "background: lightcyan; color: black;");
startButton.appendChild(h1);
startButton.appendChild(h2);

var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "input");
nameInput.setAttribute("style", "width: 50%; margin-right: 50%; margin-bottom: 3px");
var enterButton = document.createElement("button");
enterButton.textContent = "OK";
// sets time limit for quiz
let timeLeft = 20;
//begins the questions at index 0
let questionIndex = 0;

let score = 0;
//question and answer array. correct shows the index of the correct answer.
var quiz = [
    {
      question: "Which programming language is used to build the basic framework of a web page?",
      choices: ["JavaScript", "HTML", "CSS", "Python"],
      correctAnswer: "button2"
    },
    {
      question: "Which pogramming language is used to add style elements like fonts, colors, and sizing to a webpage?",
      choices: ["JavaScript", "HTML", "CSS", "Python"],
      correctAnswer: "button3"
    },
    {
      question: "Which element is not a proper CSS selector?",
      choices: ["#footer", "footer", "%footer", ".footer"],
      correctAnswer: "button3"
    },
    {
      question: "Which element is a Class Selector?",
      choices: ["#footer", "footer", "%footer", ".footer"],
      correctAnswer: "button4"
    },
    {
      question: "Which element is an ID Selector?",
      choices: ["#footer", "footer", "%footer", ".footer"],
      correctAnswer: "button1"
    },
    {
      question: "Which language is used to add interactivity to a webpage built with HTML?",
      choices: ["CSS", "JavaScript", "R", "Kotlin"],
      correctAnswer: "button2"
    },
    {
      question: "Which of the following is the preferred declaration of a JavaScript variable that will never change?",
      choices: ["var x = 1", "const x = 1", "x = 1", "let x = 1"],
      correctAnswer: "button2"
    },
    
  ];

//Functions

//shows the time remaining in the upper right corner
//this part still works. for now.
function setTime() {  
    var timerInterval = setInterval(function() {
      timeLeft--; //decrements time left by 1, every 1000ms
      clock.textContent = "You have " + timeLeft + " seconds remaining"; //displays time remaining 
      if(timeLeft < 1) {
        clearInterval(timerInterval);
        endQuiz();
      } 
    }, 1000);
  }

//sets beginning score to 0



function displayQuestion () {
    var currentQuestion = quiz[questionIndex];
    var questionElement = document.getElementById("questions")
    var choiceElements = [
      document.getElementById("button1"),
      document.getElementById("button2"),
      document.getElementById("button3"),
      document.getElementById("button4")
    ];

    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.choices.length; i++) {
      choiceElements[i].innerHTML = currentQuestion.choices[i];
      choiceElements[i].setAttribute("style", "border: black 1px");
      choiceElements[i].addEventListener("click", answerCounter);
    }
    
  }

//adds points to score when user answers correctly.
function answerCounter (event) {
    var userAnswer = event.target;
    //console.log(userAnswer.id)
    var currentQuestion = quiz[questionIndex];
    if (userAnswer.id === currentQuestion.correctAnswer){
      score++;
    } else {
      timeLeft = timeLeft - 5
    }
    
    
    var choiceElements = [
      document.getElementById("button1"),
      document.getElementById("button2"),
      document.getElementById("button3"),
      document.getElementById("button4")
    ];

    for (i = 0; i < choiceElements.length; i++) {
      choiceElements[i].removeEventListener("click", answerCounter);
    }

    questionIndex++;

    //Check to see if there are any more questions, and if any time remains.
    if (questionIndex < quiz.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

function endQuiz() {
    
    questionElement.textContent = `All done! You scored ${score} out of 7. Enter your name and click OK to see the leader board.`;
    document.getElementById("answers").setAttribute("style", "display: none");
    questionElement.appendChild(nameInput);
    questionElement.appendChild(enterButton); 
    enterButton.addEventListener("click", showHighScores)
  }

function syncTimer() {
  setTime();
  displayQuestion();
}

function start(){
    var quizbox = document.getElementById("questions")
    quizbox.appendChild(startButton)
    startButton.addEventListener("click", syncTimer);
    
  }

start()

let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
function addScore (userName, userScore) {
  leaderboard.push({userName, userScore});
  
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}


function displayScores() {

  var leaderboardElement = document.getElementById("highScores");

  //leaderboardElement.innerHTML = "";

  leaderboard.forEach((entry, index) => {
    var row = document.createElement("tr");

    var rankCell = document.createElement('td');
    rankCell.textContent = index + 1;
    row.appendChild(rankCell);
    
    var usernameCell = document.createElement("td");
    usernameCell.textContent = entry.userName;
    row.appendChild(usernameCell);

    var scoreCell = document.createElement("td");
    scoreCell.textContent = entry.userScore;
    row.appendChild(scoreCell);

    leaderboardElement.appendChild(row);
  });
  
  enterButton.removeEventListener("click", showHighScores);
  var table = document.getElementById("table");
  table.setAttribute("style", "display: table");
  
}

function showHighScores() {
  addScore(nameInput.value, score);
  displayScores();
}



