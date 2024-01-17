var answersContainerEl = document.querySelector("#answers");
var correctIncorrectText = document.querySelector("#correct-incorrect");
var countdownEl = document.querySelector("#time");
var finishedContainerEl = document.querySelector("#finished");
var introductionContainerEl = document.querySelector("#Intro");
var questionContainerEl = document.querySelector("#question");
var quizContainerEl = document.querySelector("#quiz");
var scoreContainerEl = document.querySelector("#score");
var startQuizButtonEl = document.querySelector("#btn-start-quiz");
var clearScoresButtonEl = document.querySelector("#btn-clear-high-scores");
var initialsInputEl = document.querySelector("#initials");
var formEl = document.querySelector("#form");
var restartButtonEl = document.querySelector("#btn-restart");
var highScoresContainerEl = document.querySelector("#high-scores-container");
var scoresContainer = document.querySelector("#high-scores");

var currentQuestionIndex = 0;
var timeRemaining = 75;

var scoresArray;
if (localStorage.getItem("scores")) {
    scoresArray = JSON.parse(localStorage.getItem("scores"));
} else {
    scoresArray = [];
}
localStorage.setItem("scores", JSON.stringify(scoresArray));
var data = JSON.parse(localStorage.getItem("scores"));

var viewHighScoresLinkEl = document.querySelector("#view-high-scores");

var questionsArray = [
    {
        question: "What year did the Seahawks win the Super Bowl?",
        answers: ["2006", "2012", "2014", "2018"],
        correct: "2014",
    },
    {
        question: "Who won Super Bowl MVP in their Super Bowl win?",
        answers: ["Russell Wilson", "Richard Sherman", "Malcolm Smith", "Marshawn Lynch"],
        correct: "Malcolm Smith",
    },
    {
        question: "Who has the most Receptions in Seahawks history?",
        answers: ["Tyler Lockett", "Doug Baldwin", "Darrell Jackson", "Steve Largent"],
        correct: "Steve Largent",
    },
    {
        question: "Which Seahawks running back was famously known as Beast Mode?",
        answers: ["Shaun Alexander", "Marshawn Lynch", "Ricky Watters", "Chris Warren"],
        correct: "Marshawn Lynch",
    },
    {
        question: "Who has the most touchdowns in Seahawks history?",
        answers: ["Shaun Alexander", "Steve Largent", "Marshawn Lynch", "Tyler Lockett"],
        correct: "Shaun Alexander"
    },
];

viewHighScoresLinkEl.addEventListener("click", function() {
    scoreContainerEl.classList.remove("hidden");
    introductionContainerEl.classList.add("hidden");
    quizContainerEl.classList.add("hidden");
    finishedContainerEl.classList.add("hidden");
});

startQuizButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    introductionContainerEl.classList.add("hidden");
    quizContainerEl.classList.remove("hidden");
    startTimer();
    renderQuestion();
  }
  

function startTimer() {
    countdownEl.textContent = timeRemaining;
    var timeInterval = setInterval(function () {
        timeRemaining--;
        countdownEl.textContent = timeRemaining;
        if (timeRemaining == 0 || currentQuestionIndex == questionsArray.length) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

function renderQuestion () {
    var currentQuestion = questionsArray[currentQuestionIndex];
    questionContainerEl.textContent = currentQuestion.question;
    answersContainerEl.innerHTML = "";
    currentQuestion.answers.forEach(function (answer) {
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answersContainerEl.appendChild(answerButton);
        answerButton.addEventListener("click", nextQuestion);
    });
  }

  function nextQuestion() {
    if (this.innerHTML === questionsArray[currentQuestionIndex].correct) {
        correctIncorrectText.innerHTML = "Correct";
        timeRemaining += 10;
    } else {
        correctIncorrectText.innerHTML = "Incorrect";
        timeRemaining -= 10;
    }
    currentQuestionIndex++;
    if (timeRemaining == 0 || currentQuestionIndex == questionsArray.length) {
        endQuiz();
    }   else {
        renderQuestion();
    }
  }

  function endQuiz() {
    quizContainerEl.classList.add("hidden");
    finishedContainerEl.classList.remove("hidden");
    scoreContainerEl.innerHTML = timeRemaining;
  }

  function makeLi(text) {
    var li = document.createElement("li");
    li.textContent = text;
    highScoresContainerEl.appendChild(li);
  }

  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    scoresArray.push(initialsInputEl.value + " - " + timeRemaining);
    localStorage.setItem("scores", JSON.stringify(scoresArray));
    makeLi(initialsInputEl.value = " - " + timeRemaining);
    initialsInputEl.value = "";
    finishedContainerEl.classList.add("hidden");
    scoreContainerEl.classList.remove("hidden");
  });

  data.forEach((item) => {
    makeLi(item);
  });

  restartButtonEl.addEventListener("click", function () {
    location.reload();
  });

  clearScoresButtonEl.addEventListener("click", function() {
    localStorage.clear();
    while (highScoresContainerEl.firstChild) {
        highScoresContainerEl.removeChild(
            highScoresContainerEl.firstChild
        )
    }
  });





