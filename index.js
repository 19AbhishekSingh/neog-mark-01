var readLineSync=require("readline-sync"); 
var chalk=require("chalk");
var print= console.log;
var score=0;
var userName=readLineSync.question("Hello! Enter your name :\n->");
print(chalk.white.bgCyan("\nWelcome ")+chalk.white.bgCyan(userName)+chalk.white.bgCyan(" To 'Do you know Abhishek? Quiz '\n"));

//function play is created 
function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    print(chalk.green("\n You're right :)"));
    score=score+1;
  }
  else{
    print(chalk.red("\nOops! You're wrong :("));

  }
print(chalk.red("Your current score is : "+score));
  print(chalk.yellow.bold("\n------------------------\n"));
  
}

// array of highscores 
var highScores=[{
  name:"Abhishek",
  score:6
},{
  name:"Utkasrh",
  score:5
}
]

// array of questions 
var questions = [{
  question:"1) Where do I live?\n-->",
  answer:"Kanpur"
},{
  question:"2) What's my age?\n-->",
  answer:"22"
},{
  question:"3) Which sport do I like the most?\n-->",
  answer:"Cricket"
},{
  question:"4) Which is my favourite IPL team?\n-->",
  answer:"Csk"
},{
  question:"5) My favorite rapper duo (in DHH)?\n-->",
  answer:"Seedhe Maut"
},{
  question:"6)  Out of summer, winter and rainy, which season do I like the most?n-->",
  answer: "Winter"
}
]

 for(var i=0;i<questions.length;i++){
   var currentQuestion=questions[i];
   play(currentQuestion.question,currentQuestion.answer)
 }
 print("Your Final score is", score + " out of 6");
 print("\n--------------------------------");
 print(chalk.grey("Here is the Leaderboard - "));
 print("--------------------------------");
   

 for(var j=0;j<highScores.length;j++){
   var currentHighScore=highScores[j];
   print(currentHighScore.name);
   print(currentHighScore.score);
 }

//  leaderboard
 if(score >= highScores[0,1].score) {
    print(chalk.magenta.bold("\nfamily hai aap hamari!!\n"));
    print("*************************************");
   print(chalk.yellow("Since you are one of the highscorers, If want your name on the leaderboard, send me a screenshot..."));
  } else {
   print(chalk.red("\nSorry, You don't know me well, Thank you for playing the quiz!)\n"));
}

