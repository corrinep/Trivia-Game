$(document).ready(function() {
  console.log("Ikuze!!")
 });

//Make question bank
var questionBank = {
  question: "What is known to many as 'The Worst Video Game of All Time'? ",
  choices: ["The Legend of Zelda: Majora's Mask", "The Lion King", "E.T."],
  answer: "E.T.",

  question: "What console had 16-bit graphics and had classic games like 'Sonic the Hedgehog' and 'Toejam and Earl'?",
  choices: ["Turbo-Grafx 16", "Super Nintendo Entertainment System", "Sega Genesis"],
  answer: "Sega Genesis",

  question: "	In the game ‘Mortal Kombat’, what phrase is heard when Scorpion uses his spear?",
  choices: ["Go over there!", "Get over here!", "Shoryuken!"],
  answer: "Get over here!",

  question: "Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centres on a boy named Link?",
  choices: ["Bubble Bobble", "The Legend of Zelda", "Contra"],
  answer: "The Legend of Zelda",

  question:"What are the names of the ghosts in Pac Man?",
  choices: ["Inky, Blinky, Pinky and Sue", "Bob, Anne, Jeff and Mike", "They didn't have names"],
  answer: "Inky, Blinky, Pinky and Sue"

}
function printQuestions(questionsList){

  for (var i = 0; i < questionsList.length; i++) {
    var quiz = $("<div>")
    var quizText = $("<h2>");
    quizText.text(questionsList[i].question);
    quiz.append(quizText);

    for (var k = 0; k < questionsList[i].choices.length; k++) {
      
      var radioDiv = $("<div>");
      radioDiv.addClass("form-check form-check-inline");

      var radioInput = $("<input");
      radioInput.attr({class: "form-check-input", type: "radio", name: i, value: questionsList[i].choices[k]})
      var radioLabel = $("<label>");
      radioLabel
        .addClass("form-check-label")
        .text(questionList[i].choices[k]);

      radioDiv.append(radioInput, radioLabel);

      quiz.append(radioDiv);
    }

    $("form").append(quiz);
  }
  
}
//Print questions

$(document).on("change", ".form-check-input", function() {

  var questionAnsweredIndex = $(this).attr("name");
  var answerPicked = $(this).val();

  console.log(questionAnsweredIndex);
  console.log(answerPicked);
})
