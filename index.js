var noQuestions = 0;
var notStarted = true;

var answer = 0;

var totalCorrectAns = 0;

var pegMemItems = ["tie", "noah","ma","rye","law","shoe","cow","ivy","bee", "toes","tot","tin","tomb","tire","towel","dish","tack","dove","tub","nose","net","nun","name","nero","nail","notch","neck","knife","knob","mouse","mat","moon","mummy","mower","mule","match","mug","movie","mop","rose","rod","rain","ram","rower","roll","roach","rock","roof","rope","lace","lot","lion","loom","lure","lily","leech","log","lava","lip","cheese","sheet","chain","chum","cherry","jail","choo choo","chalk","chef","ship","case","cot","coin","comb","car","coal","cage","coke","cave","cob","fuzz","fit","phone","foam","fur","file","fish","fog","fife","fob","bus","bat","bone","bum","bear","bell","beach","book","puff","pipe","disease"];




$("button").click(function() {

  whichType(this.id);

});

function whichType(key) {

  switch (key) {
    case "addB":

      $("#addB").addClass("pressed");
      $("#subB").removeClass("pressed");
      $("#multiB").removeClass("pressed");
      $("#pegB").removeClass("pressed");


      $(".startB").click(function() {
        if ($(".noQ:checked").val() === "10" || $(".noQ:checked").val() === "20") {
          if (notStarted) {
            answer = nextQuestionA();
            noQuestions = 1;
            notStarted = false;
          }
        }
      });

      $(".nextB").click(function() {
        checkAnswer(answer);
        if (!notStarted & noQuestions < $(".noQ:checked").val()) {
          $("#ans").val("");
          answer = nextQuestionA();
          noQuestions++;
        } else {
          $(".qDisplay1").text("The End You have " + totalCorrectAns + "/" + noQuestions);
          $(".questionAns").addClass("notStarted");
        }
      });

      break;
    case "subB":

      $("#subB").addClass("pressed");
      $("#addB").removeClass("pressed");
      $("#multiB").removeClass("pressed");
      $("#pegB").removeClass("pressed");

      $(".startB").click(function() {
        if ($(".noQ:checked").val() === "10" || $(".noQ:checked").val() === "20") {
          if (notStarted) {
            answer = nextQuestionS();
            noQuestions = 1;
            notStarted = false;
          }
        }
      });

      $(".nextB").click(function() {
        checkAnswer(answer);
        if (!notStarted & noQuestions < $(".noQ:checked").val()) {
          $("#ans").val("");
          answer = nextQuestionS();
          noQuestions++;
        } else {
          $(".qDisplay1").text("The End You have " + totalCorrectAns + "/" + noQuestions);
          $(".questionAns").addClass("notStarted");
        }
      });
      break;
    case "multiB":

      $("#multiB").addClass("pressed");
      $("#addB").removeClass("pressed");
      $("#subB").removeClass("pressed");
      $("#pegB").removeClass("pressed");

      $(".startB").click(function() {
        if ($(".noQ:checked").val() === "10" || $(".noQ:checked").val() === "20") {
          if (notStarted) {
            answer = nextQuestionM();
            noQuestions = 1;
            notStarted = false;
          }
        }
      });

      $(".nextB").click(function() {
        checkAnswer(answer);
        if (!notStarted & noQuestions < $(".noQ:checked").val()) {
          $("#ans").val("");
          answer = nextQuestionM();
          noQuestions++;
        } else {
          $(".qDisplay1").text("The End You have " + totalCorrectAns + "/" + noQuestions);
          $(".questionAns").addClass("notStarted");
        }
      });
      break;
    case "pegB":

      $("#multiB").removeClass("pressed");
      $("#addB").removeClass("pressed");
      $("#subB").removeClass("pressed");
      $("#pegB").addClass("pressed");

      $(".startB").click(function() {
        if ($(".noQ:checked").val() === "10" || $(".noQ:checked").val() === "20") {
          if (notStarted) {
            answer = nextQuestionP()+1;
            noQuestions = 1;
            notStarted = false;
          }
        }
      });

      $(".nextB").click(function() {
        checkAnswer(answer);
        if (!notStarted & noQuestions < $(".noQ:checked").val()) {
          $("#ans").val("");
          answer = nextQuestionP()+1;
          noQuestions++;
        } else {
          $(".qDisplay1").text("The End You have " + totalCorrectAns + "/" + noQuestions);
          $(".questionAns").addClass("notStarted");
        }
      });


      break;

    default:
      console.log(key);

  }



}

function checkAnswer(correctAnsAdd) {


  if (parseInt($("#ans").val()) === correctAnsAdd) {

    totalCorrectAns++;

  } else {
    playSound();

    alert("Correct Answer is " + answer);

  }


}

function nextQuestionA() {

  var number1 = Math.floor(Math.random() * 100);
  var number2 = Math.floor(Math.random() * 100);
  var number3 = Math.floor(Math.random() * 100);

  var ansAdd = number1 + number2 - number3;

  while (ansAdd < 0){
    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);
    number3 = Math.floor(Math.random() * 100);

    ansAdd = number1 + number2 - number3;

  }

  $(".qDisplay1").text(number1 + " + " + number2 + " - " + number3 + " = ");
  $(".questionAns").removeClass("notStarted");


  return ansAdd;
}

function nextQuestionS() {

  var number1 = Math.floor(Math.random() * 100);
  var number2 = Math.floor(Math.random() * 11);
  var ansAdd = number1/number2;
  var ansRem = number1%number2;

  while (ansRem != 0){
    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 11);
    ansAdd = number1/number2;
    ansRem = number1%number2;
  }
  $(".qDisplay1").text(number1 + " / " + number2 + " = ");
  $(".questionAns").removeClass("notStarted");


  return ansAdd;



}

function nextQuestionM() {

  var number1 = Math.floor(Math.random() * 10);
  var number2 = Math.floor(Math.random() * 10);

  $(".qDisplay1").text(number1 + " x " + number2 + " = ");
  $(".questionAns").removeClass("notStarted");

  var ansAdd = number1 * number2;

  return ansAdd;
}

function nextQuestionP() {

  var number1 = Math.floor(Math.random() * 100);



  $(".qDisplay1").text(pegMemItems[number1]);
  $(".questionAns").removeClass("notStarted");



  return number1;
}




function playSound() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
