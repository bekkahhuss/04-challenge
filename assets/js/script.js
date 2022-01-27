// Variables to collect and save the user score
var hitButton = document.querySelector("#save-score");
var highScore = document.querySelector("#high-score");

// Click the button to save score 
hitButton.addEventListener("click", scoreHolder);


// Input name and save it in var scoreInfo
function scoreHolder() {
  var saveName = document.querySelector("input[name='save-name']").value;

  var scoreInfo = {
    name: saveName,
    score: ""
  }

  listMaker(scoreInfo);
};

// Add user name and score to high score list 
function listMaker(scoreInfo) {
  var scoreList = document.createElement("li");
  scoreList.className ="score-list";

  var scoreItem = document.createElement("div");
  scoreItem.className = "score-item";
  scoreItem.innerHTML= "<h3>" + scoreInfo.name + "</h3>";

  scoreList.appendChild(scoreItem);

  highScore.appendChild(scoreList);


};
