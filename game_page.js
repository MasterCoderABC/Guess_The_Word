var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
   var get_word = document.getElementById("word").value;
   var word = get_word.toLowerCase();

   if (word.length >= 5){
   var charAt1 = word.charAt(1);

   var lengthDivide2 = Math.floor(word.length/2);
   var charAt2 = word.charAt(lengthDivide2);

   var lengthMinus1 = word.length - 1;
   var charAt3 = word.charAt(lengthMinus1);
    
   var removeCharAt1 = word.replace(charAt1, "_");
   var removeCharAt2 = removeCharAt1.replace(charAt2, "_");
   var removeCharAt3 = removeCharAt2.replace(charAt3, "_");

   var questionWord = "<h4 id='word_display'> Q." + removeCharAt3 + "</h4>";
   var inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
   var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   var row = questionWord + inputBox + checkButton;
   document.getElementById("output").innerHTML = row;

   document.getElementById("label").style.visibility = "hidden";
   document.getElementById("word").style.visibility = "hidden";
   document.getElementById("button").style.visibility = "hidden";
   }
   else{
      alert("Please try putting a word which has 5 or more letters");
   }
}

var questionTurn = "player1";
var answerTurn = "player2";
var questionTurns = 0;
var round = 1;

function check(){
   var getAnswer = document.getElementById("word").value;
   var answer = getAnswer.toLowerCase();
   var word = document.getElementById("input_check_box").value;
   console.log("answer " + answer + " word " + word);
   if (answer == word){
      if (answerTurn == "player1"){
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML = player1_score;
      }
      else{
         player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = player2_score;
      }
   }
   if (questionTurn == "player1"){
      questionTurn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
      questionTurns = questionTurns + 1;
      answerTurn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
   }
   else{
      questionTurn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
      questionTurns = questionTurns + 1;
      answerTurn = "player2";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
   }
   

   document.getElementById("output").innerHTML = "";
   document.getElementById("word").value = "";
   document.getElementById("label").style.visibility = "visible";
   document.getElementById("word").style.visibility = "visible";
   document.getElementById("button").style.visibility = "visible";

   if (questionTurns == 2){
      round = 2;
      document.getElementById("round").innerHTML = "Round 2 of 10";
   }
}