// setup variables here

var timeLeft = 60;
var correctA = 0;
var wrong = 0;
var questionNumber = 1;
var interval;
var questionAmount = 0;
// var questions = [q1, q2];
// start the game function

$(document).ready(function() {
  $("#loadQuiz").on("click", function() {
    startClock();
    loadQuestions();
    q1();

    //   questionNumber = 1;
    //   timeLeft = 60;
    //   correct = 0;
    //   wrong = 0;
    //   questionAmount = 0;

    $("#correct").text(correctA);
    $("#wrong").text(wrong);
    // $("#");
  });

  function loadQuestions() {
    $("#questions").html(
      "<br><br>" +
        "<div class='col col-xs-12 col-lg-12'>" +
        "<h2 id='questionLine'></h2>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer1radio'> <span id='answer1text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer2radio'> <span id='answer2text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer3radio'> <span id='answer3text'></span> " +
        "</label><br>" +
        "<label>" +
        "<input type='radio' name='choice' value='1' id='answer4radio'> <span id='answer4text'></span> " +
        "</label><br>" +
        "</div>" +
        "</div>"
    );
  }

  function countDown() {
    timeLeft--;
    $("#clock").html(timeLeft);
    if (timeLeft == 0) {
      alert("Game Over");

      timeLeft = 60;
      clearInterval(interval);
    }
  }

  function startClock() {
    interval = setInterval(countDown, 1000);
    timeLeft = 60;
  }

  // });

  // array of objects  with functions

  // function buildQuiz() {}

  // function showResults() {}

  // Upon the page loading the player will click a button to load the quiz questions and the timer will start .and

  // Load a page with direction on the trivia game quiz

  // display quiz right away
  function q1() {
    loadQuestions();
    $("#questionLine").text(
      "In order to be considered bourbon, where does bourbon need to be distilled?"
    );
    $("#answer1text").html("Kentucky");
    $("#answer1radio").val(1);
    $("#answer2text").html("Tenessee");
    $("#answer2radio").val(1);
    $("#answer3text").html("Virginia");
    $("#answer3radio").val(1);
    $("#answer4text").html(
      "It does not matter, as long other parameters are met"
    );
    $("#answer4radio").val(0);
  }

  function q2() {
    loadQuestions();
    $("#questionLine").text("Test?");

    $("#answer1text").html("Kentucky");
    $("#answer1radio").val(1);
    $("#answer2text").html("Tenessee");
    $("#answer2radio").val(1);
    $("#answer3text").html("Virginia");
    $("#answer3radio").val(1);
    $("#answer4text").html(
      "It does not matter, as long other parameters are met"
    );
    $("#answer4radio").val(0);
  }

  function nextQuestion() {
    $("#next").onclick(next);
    for (var i = 0; i < 10; i++)
    if 

  getBubblevalue()  {
    console.log(something);

    questionAmount = questionAmount + 1;
  }

  function status() {
    getBubblevalue();
    console.log(something);

    if (bubbleValue == 0) {
      correct();
    } else if (bubbleValue == 1) {
      inCorrect();
    }
  }

  function score() {
    for (var i = 0; i < 4; i++); {}
  

  function correct() {
    correct = correctA + 1;
  }

  function inCorrect() {
    inCorrect = wrong + 1;
  }
  }

  //    wrong answers = wrong answers + 1
  //    correct answers = correct answers +1
  // }
});
