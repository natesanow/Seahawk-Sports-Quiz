var answersContainerEl = document.querySelector("#answers");
var correctIncorrectText = document.querySelector("#correct-incorrect");
var countdownEl = document.querySelector("#time");
var completedContainerEl = document.querySelector("#finished");
var introductionContainerEl = document.querySelector("#Intro");
var questionContainerEl = document.querySelector("question");
var quizContainerEl = document.querySelector("quiz");
var scoreContainerEl = document.querySelector("score");
var startQuizButtonEl = document.querySelector("btn-start-quiz");
var clearScoresButtonEl = document.querySelector("btn-clear-high-scores");
var initialsInputEl = document.querySelector("#intials");
var formEl = document.querySelector("#form");
var restartButton = document.querySelector("#btn-restart");
var highScoresContainerEl = document.querySelector("#high-scores-container");
var scoresContainer = document.querySelector("#high-scores");

var currentQuestionIndex = 0;
var timeRemaining = 60;

var scoresArray;
if (localStorage.getItem("scores")) {
    scoresArray = JSON.parse(localStorage.getItem("scores"));
} else {
    scoresArray = [];
}
localStorage.setItem("scores", JSON.stringify(scoresArray));
var data = JSON.parse(localStorage.getItem("scores"));

var viewHighScoresLinkEl = document.querySelector("#view-high-scores");

