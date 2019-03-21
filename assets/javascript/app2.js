var timeLeft = 60;
var correctA = 0;
var wrong = 0;
var questionNumber = 0;
var interval;
var questionAmount = 0;

$(document).ready(function() {
  $("#loadQuiz").on("click", function() {
    startClock();
    loadQuestionFrame();

    //   loadQuestionArray();
  });
});

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

function loadQuestionFrame() {
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

  var questionArray = [
    {
      q1:
        "In order to be considered bourbon, where does bourbon need to be distilled?"
    },

    { q2: "test sample 1" }
  ];
  //   console.log(questionArray[1].q2);
  //   q2,
  //   q3,
  //   q4,
  //   q5

  //   var answers = [answers1,
  //     , answers2, answers3, answers4, answers5];

  //   this will load the questions in the frame
  var questionActive = 1;

  function quizStart() {
    if (questionActive === 1) {
      $("#questionLine").get(questionArray[0].q1);
      questionActive++;
    } else if (questionActive === 2) {
      $("#questionLine").get(questionArray[1].q2);
      questionActive++;
    }
  }

  quizStart();
}
