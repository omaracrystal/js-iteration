//////////////////////////////////names.html//////////////////////////////////


////grab all buttons
var printAllNames = document.getElementById("all-names");
var firstNames = document.getElementById("first-names");
var lastNames = document.getElementById("last-names");
var nameLengths = document.getElementById("names-with-lengths")



////grab ul "answersUl"
var answerList = document.getElementById("answersUl")
//append "li" elements to "answersUL"
  for (var i = 0; i < objectList.length; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li);
    };



////functions that print innerHTML to li elements once event listener is called
var nameFiller = function() {
  for (var i = 0; i < objectList.length; i++) {
    answerList.children[i].innerHTML = nameArray[i]
  }
}

var firstNameFiller = function() {
  for (var i = 0; i < objectList.length; i++) {
    answerList.children[i].innerHTML = objectList[i].first;
  }
}

var lastNameFiller = function() {
  for (var i = 0; i < objectList.length; i++) {
    answerList.children[i].innerHTML = objectList[i].last;
  }
}

var nameLengthFiller = function() {
  for (var i = 0; i < objectList.length; i++) {
    answerList.children[i].innerHTML = nameArray[i].length;
  }
}



////add event listeners to all buttons
printAllNames.addEventListener("click", nameFiller)
firstNames.addEventListener("click", firstNameFiller)
lastNames.addEventListener("click", lastNameFiller)
nameLengths.addEventListener("click", nameLengthFiller)
