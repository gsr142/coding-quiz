//declare global variables. Not completed in this order
var body = document.body;
var clock = document.querySelector(".clock");
var questions = document.querySelector(".questions")

//create start button
var startButton = document.createElement("button");
startButton.setAttribute("style", "font-size: 16px; background: blue; color: white; margin: 5px");
startButton.textContent = "Begin quiz";
// sets time limit for quiz
var timeLeft = 20;
//begins the questions at index 0
let questionIndex = 0;

let score = 0;
//question and answer array. correct shows the index of the correct answer.
var quiz = [
  {
    question: "Which symbol is used to denote HTML tags",
    choices: ['<>', '{}', '[]', "::"],
    correctAnswer: '<>'
  },
  {
    question: "Which programming language is used to build the basic framework of a web page?",
    choices: ['JavaScript', 'HTML', 'CSS', 'Python'],
    correctAnswer : 'HTML'
  },
];

//Functions

//shows the time remaining in the upper right corner
//this part still works. for now.
function setTime() {  
  var timerInterval = setInterval(function() {
    timeLeft--; //decrements time left by 1, every 1000ms
    clock.textContent = "You have " + timeLeft + " seconds remaining"; //displays time remaining 
    if(timeLeft === 0) {
      clearInterval(timerInterval);
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
    choiceElements[i].textContent = currentQuestion.choices[i];
    choiceElements[i].addEventListener("click", answerCounter);
  }
  
}

//adds points to score when user answers correctly.
function answerCounter (event) {
  var userAnswer = event.target;
  var currentQuestion = quiz[questionIndex];
  if (userAnswer.id === `choice${currentQuestion.correctAnswer + 1}`){
    score++;
  }
  
  var choiceElements = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4")
  ];

  //for (i = 0; i < choiceElements.length; i++) {
    //choiceElements[i].removeEventListener("click", answerCounter)
  //}
  console.log(document.getElementById("button1"))
  console.log(document.getElementById("button2"))
  console.log(document.getElementById("button3"))
  console.log(document.getElementById("button4"))
  questionIndex++;

  //Check to see if there are any more questions, and if any time remains.
  if (questionIndex < quiz.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  var questionElement = document.getElementById("questions");
  questionElement.textContent = `All done! You scored ${score}. Enter your name to see the leader board.`;
}

function start(){
  var quizbox = document.getElementById("questions")
  quizbox.appendChild(startButton)
  startButton.addEventListener("click", displayQuestion)
}

start()






