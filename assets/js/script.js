// These variables represent the html elements in main. They will be reused as needed as the quiz goes from page to page.
var sectionOne = document.querySelector("#section-one");
var sectionTwo = document.querySelector("#section-two");
var sectionThree = document.querySelector("#section-three");
var timer = document.querySelector("#timer");

//Page content variables 
const pageHeading = document.createElement("h1");
const quizText = document.createElement("p");

// buttons to navigate game 
const easyButton = document.createElement("button");
const saveButton = document.createElement('button');
const restartButton = document.createElement('button');

//Answer buttons 

var answerText = [
 'no', 'yes','no','no',
'no','no', 'no', 'yes',
 'yes', 'no', 'yes', 'yes'
];

var ansButtons = [];
var taskIdCounter = 0;

//Save Initials 
const yourInitials = document.createElement("input");
yourInitials.setAttribute("id", "my-initials");
var scoreList = document.createElement("ul");
scoreList.className ="score-list";

var count = 0; 


// When the start button is pushed leave start page, ask three questions, input initials to save score, view highscore and restart. 
function startPage() {
  pageHeading.innerText = "Coding Assessment";
  sectionOne.appendChild(pageHeading);
  quizText.innerText = "Click Start to Begin";
  sectionOne.appendChild(quizText);
  easyButton.innerText = "Start Assessment";
  sectionThree.appendChild(easyButton);
  easyButton.addEventListener( 'click', question1);
 
  restartButton.remove();
  saveButton.remove();
  
  scoreList.remove();
  answerButtons();
  taskIdCounter = 0;
  count = 20;
  timer.innerText = count;
  console.log("hello");
};

var test2 = 0;

function answerButtons() {
  for (var i = 0; i < 13; i++) {
    ansButtons[i] = document.createElement ("button");
    ansButtons[i].innerText = answerText[i];
    ansButtons[i].className ="ansBtn";
    ansButtons[i].setAttribute("data-ans-id", taskIdCounter);
    taskIdCounter++;
    
  };
  
};

function question1() {
  var intervalOne = setInterval(function(){
    timer.innerText = count;
    if (count > 0) {
      count = count - 1;
    } else {
      count = 0;
    }
    timer.innerText = count;
    console.log('COUNT ', count);
    if (count === 0 || count < 0){
      console.log('interval:', intervalOne);
      clearInterval(intervalOne);
      saveScore();
    }
  }, 1000);

  pageHeading.innerText = "Question 1";
  quizText.innerText = "Is this a question?";
  easyButton.remove();
  
  for (var i = 0; i < 4; i++) {
    sectionTwo.appendChild(ansButtons[i]);
    ansButtons[i].addEventListener("click", function(event) {
      var ansId = event.target.getAttribute("data-ans-id");
      console.log(event.target);
      console.log("clicked");
      console.log(ansId);
      if (ansId == 1) {
        console.log("eureka!");
        question2();
      } else {
        console.log("nope!");
        count = count - 2;
        if (count <= 0) {
          timeTest = 0;
        }
      }
    });

    
    
  };
};

function question2() {
  pageHeading.innerText = "Question 2";
  quizText.innerText = "Is this a different question?";
  easyButton.remove();
  
  ansButtons[0].remove();
  ansButtons[1].remove();
  ansButtons[2].remove();
  ansButtons[3].remove();

  for (var i = 4; i < 8; i++) {
    sectionTwo.appendChild(ansButtons[i]);
    ansButtons[i].addEventListener("click", function(event) {
      var ansId = event.target.getAttribute("data-ans-id");
      console.log(event.target);
      console.log("clicked");
      console.log(ansId);
      if (ansId == 7) {
        console.log("eureka!");

        question3();
      } else {
        console.log("nope!");
        count = count - 2;
        if (count <= 0) {
          timeTest = 0;
        }
      }
    });
  }
  
};
var timeTest = 0;

function question3() {
  pageHeading.innerText = "Question 3";
  quizText.innerText = "Is this question the same?";
  
  ansButtons[4].remove();
  ansButtons[5].remove();
  ansButtons[6].remove();
  ansButtons[7].remove();

  for (var i = 8; i < 12; i++) {
    sectionTwo.appendChild(ansButtons[i]);
    ansButtons[i].addEventListener("click", function(event) {
      var ansId = event.target.getAttribute("data-ans-id");
      console.log(event.target);
      console.log("clicked");
      console.log(ansId);
      if (ansId == 9) {
        console.log("eureka!");
        timeTest = count; 
        saveScore();
        
        console.log("your score is " + timeTest);
      } else {
        console.log("nope!");
        count = count - 2;
        if (count <= 0) {
          timeTest = 0;
        }
      }
    });
  }
};

function saveScore() {
  if (count < 0) {
    count = 0; 
  } else {
    count = 0;
  }
  
  if (timeTest > 0) {
    console.log("is true: " + timeTest);
  }
  for (var i = 0; i < 13; i++) {
    ansButtons[i].remove();
  }
  
  
  pageHeading.innerText = "Save Score";
  quizText.remove();


  sectionTwo.appendChild(yourInitials);
  saveButton.innerText = "Save"
  sectionThree.appendChild(saveButton);

  saveButton.addEventListener('click', endPage);
  
};

function endPage() {
  yourInitials.remove();
  saveButton.remove();
  pageHeading.innerText = "High Score";
  restartButton.innerText = "Play Again?";
  console.log(yourInitials.value);

  var scoreItem = document.createElement("li");
  scoreItem.className = "score-item";
  scoreItem.innerText =  (yourInitials.value + " " + timeTest);

  scoreList.appendChild(scoreItem);

  sectionTwo.appendChild(scoreList);

  sectionThree.appendChild(restartButton);
  restartButton.addEventListener('click', startPage);
};



startPage();
//crate an array that has an array nested inside of it that stores the responses for the questionaire [question 1[incoorect, incorrect,correct,incoorect], question 2[...]]
