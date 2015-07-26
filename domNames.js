//////////////////////////////////names.html//////////////////////////////////


///////grab all buttons
var allNames = document.getElementById("all-names");
var firstNames = document.getElementById("first-names");
var lastNames = document.getElementById("last-names");
var nameLengths = document.getElementById("names-with-lengths")



/////get selected areas to evaluate
var names = document.getElementsByTagName("textarea")[0].value;
var nameList = names.split("\n");
// var firstNameList =
// var lastNameList =
// for (i in namesList) {
//   create objects of all i;
//   split the new objects with key words first and last name;
//   we can then pull first.value and last.value;
// }


/////get ul "answersUl"
var answerList = document.getElementById("answersUl")




/////////function to append li elements to this ul id = "answersUl"
var listAppender = function() {
  for (var i = 0; i < nameList.length; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li)
  }
  return answerList.children;
}

listAppender();

var listText = function() {
  for (var i = 0; i < answerList.children.length; i++) {
    answerList.children[i].innerHTML = "names";
  };
}

//////grabing new li's appended in the Answer box section
// var allNamesAnswer = answerList.children[0]
// var firstNamesAnswer = answerList.children[1]
// var lastNameAnswer = answerList.children[2]
// var nameLengthsAnswer = answerList.children[3]



//////Answer Box filler functions to be called in event listeners
var printAllNames = function () {
  answersUl.innerHTML = listAppender(newNameList);
};

var printFirstNames = function () {
  answersUl.innerHTML = listAppender(newFirstNameList);
};

var printLastNames = function () {
  answersUl.innerHTML = listAppender(newLastNameList);
};

var printNameLengths = function () {
  answersUl.innerHTML = listAppender(newNameLengthsList);
};





////////add event listeners to all buttons
allNames.addEventListener("click", listener)
firstNames.addEventListener("click", listener)
lastNames.addEventListener("click", listener)
nameLengths.addEventListener("click", listener)
