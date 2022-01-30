// These variables represent the html elements in main. They will be reused as needed as the quiz goes from page to page.
var mainContainer = document.querySelector("#main-container");
// var pageHeading = document.getElementById("#page-heading");
// var quizText = document.querySelector("#quiz-text");
// var answerButtons = document.querySelector("#answer-buttons");
// var easyButton = document.querySelector("#easy-button");
const pageHeading = document.createElement("h1");
const quizText = document.createElement("p");

// buttons to navigate game 
const easyButton = document.createElement("button");
const saveButton = document.createElement('button');
const restartButton = document.createElement('button');

//Answer buttons 
const oneAns = document.createElement("button");
const twoAns = document.createElement("button");
const threeAns = document.createElement("button");
const fourAns = document.createElement("button");
const fiveAns = document.createElement("button");
const sixAns = document.createElement("button");
const sevenAns = document.createElement("button");
const eightAns = document.createElement("button");
const nineAns = document.createElement("button");
const tenAns = document.createElement("button");
const elevenAns = document.createElement("button");
const twelveAns = document.createElement("button");

//Save Initials 
const yourInitials = document.createElement("input");





// When the start button is pushed leave start page, ask three questions, input initials to save score, view highscore and restart. 
// function codingQuiz() {
//   console.log("quiz");
//   question1();

// };

//default page with button that starts codingQuiz function
function startPage() {
  pageHeading.innerText = "Coding Assessment";
  document.body.appendChild(pageHeading);
  quizText.innerText = "Click Start to Begin";
  document.body.appendChild(quizText);
  easyButton.innerText = "Start Assessment";
  document.body.appendChild(easyButton);
  easyButton.addEventListener( 'click', question1);
  restartButton.remove();
  saveButton.remove();
  scoreList.remove();

console.log("hello");
};



function question1() {
  pageHeading.innerText = "Question 1";
  quizText.innerText = "Is this a question?";
  easyButton.remove();

  // could turn into a for loop 
  oneAns.innerText = "Answer 1";
  document.body.appendChild(oneAns);
  twoAns.innerText = "Answer 2";
  document.body.appendChild(twoAns);
  threeAns.innerText = "Answer 3";
  document.body.appendChild(threeAns);
  threeAns.addEventListener('click', question2);
  fourAns.innerText = "Answer 4";
  document.body.appendChild(fourAns);

};

function question2() {
  pageHeading.innerText = "Question 2";
  quizText.innerText = "Is this a different question?";
  easyButton.remove();
  oneAns.remove();
  twoAns.remove();
  threeAns.remove();
  fourAns.remove();


  fiveAns.innerText = "Answer 5";
  document.body.appendChild(fiveAns);
  sixAns.innerText = "Answer 6";
  document.body.appendChild(sixAns);
  sixAns.addEventListener('click', question3);
  sevenAns.innerText = "Answer 7";
  document.body.appendChild(sevenAns);
  eightAns.innerText = "Answer 4";
  document.body.appendChild(eightAns);
};

function question3() {
  pageHeading.innerText = "Question 3";
  quizText.innerText = "Is this question the same?";
  fiveAns.remove();
  sixAns.remove();
  sevenAns.remove();
  eightAns.remove();


  nineAns.innerText = "Answer 9";
  document.body.appendChild(nineAns);
  tenAns.innerText = "Answer 10";
  document.body.appendChild(tenAns);
  elevenAns.innerText = "Answer 11";
  document.body.appendChild(elevenAns);
  twelveAns.innerText = "Answer 12";
  document.body.appendChild(twelveAns);
  twelveAns.addEventListener('click', saveScore);
};

function saveScore() {
  pageHeading.innerText = "Save Score";
  quizText.remove();
  nineAns.remove();
  tenAns.remove();
  elevenAns.remove();
  twelveAns.remove();


  document.body.appendChild(yourInitials);
  saveButton.innerText = "Save"
  document.body.appendChild(saveButton);

  saveButton.addEventListener('click', endPage);
  
};

// var scoreInfo = {
//   name: yourInitials,
//   score: ""
// }


function endPage() {
  yourInitials.remove();
  saveButton.remove();
  pageHeading.innerText = "High Score";
  restartButton.innerText = "Play Again?";
  console.log(yourInitials.value);

  var scoreList = document.createElement("ul");
  scoreList.className ="score-list";
  // scoreList.innerText = (yourInitials.value);

  var scoreItem = document.createElement("li");
  scoreItem.className = "score-item";
  scoreItem.innerText =  (yourInitials.value);

  scoreList.appendChild(scoreItem);

  document.body.appendChild(scoreList);

  document.body.appendChild(restartButton);
  restartButton.addEventListener('click', startPage);
}



startPage();
//research data attributes- apply data att to button- whatever the class is should have same data att but each button has a different number
//crate an array that has an array nested inside of it that stores the responses for the questionaire [question 1[incoorect, incorrect,correct,incoorect], question 2[...]]
