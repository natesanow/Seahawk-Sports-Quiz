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

var questionArray = [
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



