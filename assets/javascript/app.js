// setup variables here

var timeLeft = 60;
var correct = 0;
var wrong = 0;
var questionNumber;

// var questions = [q1, q2, q3, q4];

// start the game function

$(document).ready(function() {
  $("#loadquiz").on(click, function() {
    console.log("something");

    var start = function() {
      q1();
      questionNumber = 1;
      timeLeft = 60;
      correct = 0;
      wrong = 0;
      questionAmount = 0;

      $("correct").text(correct);
    };
  });
});

// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");

// function buildQuiz() {}

function showResults() {}

// Upon the page loading the player will click a button to load the quiz questions and the timer will start .and

// Load a page with direction on the trivia game quiz

// display quiz right away

// on submit, show results
// submitButton.addEventListener("click", showResults);

// var questions [

// q1 {

// }

// ]
