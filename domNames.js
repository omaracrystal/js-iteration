//////////////////////////////////names.html//////////////////////////////////


///////grab all buttons
var printAllNames = document.getElementById("all-names");
var firstNames = document.getElementById("first-names");
var lastNames = document.getElementById("last-names");
var nameLengths = document.getElementById("names-with-lengths")


/////get ul "answersUl"
var answerList = document.getElementById("answersUl")


/////arrays that will be passed through the listAnswers(); function once the click event happens/////
//get the string of names and split it into an array
var nameString = document.getElementsByTagName("textarea")[0].value;
var nameArray = nameString.split("\n");
//take the array of names and split it into first names
// var firstNameArray =
// // //take the array of names and split it into last names
// var lastNameArray =
// // //take the array of names and output the total length of their names
// var nameLengthArray =

// for (i in nameArray) {
//   create objects of all i;
//   split the new objects with key words first and last name;
//   we can then pull first.value and last.value;
// }



/////////functions that append li elements to "answerUl" textarea and print innerHTML to li elements once event listener is called
var nameFiller = function() {
  for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li);
    answerList.children[i].innerHTML = nameArray[i];
  }
}

var firstNameFiller = function() {
  for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li);
    answerList.children[i].innerHTML = firstNameArray[i];
  }
}

var lastNameFiller = function() {
  for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li);
    answerList.children[i].innerHTML = lastNameArray[i];
  }
}

var nameLengthFiller = function() {
  for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li);
    answerList.children[i].innerHTML = nameLengthArray[i];
  }
}

////////add event listeners to all buttons
printAllNames.addEventListener("click", nameFiller)
// firstNames.addEventListener("click", listAnswers(firstNameArray))
// lastNames.addEventListener("click", listAnswers(lastNameArray))
// nameLengths.addEventListener("click", listAnswers(nameLengthArray))
