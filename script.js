// Functionize BasketBall Quiz
//Event Listner
document.getElementById("answer").addEventListener("click", quiz);
//HTML Variables
// let inputOne = document.getElementById("questionOne");
// let inputTwo = document.getElementById("questionTwo");
// let inputThree = document.getElementById("questionThree");
// let inputFour = document.getElementById("questionFour");
// Event Function (quiz)
function quiz() {
  let inputOne = document.getElementById("questionOne");
  let inputTwo = document.getElementById("questionTwo");
  let inputThree = document.getElementById("questionThree");
  let inputFour = document.getElementById("questionFour");
  let inputOneValue = inputOne.value.toLowerCase();
  let inputTwoValue = inputTwo.value.toLowerCase();
  let inputThreeValue = inputThree.value.toLowerCase();
  let inputFourValue = inputFour.value.toLowerCase();
  let scoreEl = document.getElementById("score");
  let score = 0;
  if (
    inputOneValue == "lebron james" ||
    inputOneValue == "legoat" ||
    inputOneValue == "sunshine"
  ) {
    inputOne.style.border = " 2px solid green";
    document.getElementById("showAnswer1").style.color = "green";
    document.getElementById("showAnswer1").innerHTML = "Correct";
  } else {
    inputOne.style.border = " 2px solid red";
    document.getElementById("showAnswer1").style.color = "red";
    document.getElementById("showAnswer1").innerHTML = "Incorrect";
  }

  if (inputTwoValue == "lakers" || inputTwoValue == "bostion celtics") {
    inputTwo.style.border = "2px solid green";
    document.getElementById("showAnswer2").style.color = "green";
    document.getElementById("showAnswer2").innerHTML = "Correct";
  } else {
    inputTwo.style.border = "2px solid red";
    document.getElementById("showAnswer2").style.color = "red";
    document.getElementById("showAnswer2").innerHTML = "Incorrect";
  }

  if (inputThreeValue == "steph curry") {
    inputThree.style.border = "2px solid green";
    document.getElementById("showAnswer3").style.color = "green";
    document.getElementById("showAnswer3").innerHTML = "Correct";
  } else {
    inputThree.style.border = "2px solid red";
    document.getElementById("showAnswer3").style.color = "red";
    document.getElementById("showAnswer3").innerHTML = "Incorrect";
  }

  if (inputFourValue == "yes") {
    inputFour.style.border = "2px solid green";
    document.getElementById("showAnswer4").style.color = "green";
    document.getElementById("showAnswer4").innerHTML = "Correct";
  } else {
    inputFour.style.border = "2px  solid red";
    document.getElementById("showAnswer4").style.color = "red";
    document.getElementById("showAnswer4").innerHTML = "Incorrect";
  }

  if (
    inputOneValue == "" ||
    inputTwoValue == "" ||
    inputThreeValue == "" ||
    inputFourValue == ""
  ) {
    scoreEl.innerHTML = "";
  } else {
    console.log(score);
    let percentage = (score / 4) * 100;
    scoreEl.innerHTML = `Score: ${score} /4 ${percentage}%`;
  }
}
