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
// //take the array of names and split it into last names
// var lastNameArray =
// //take the array of names and output the total length of their names
// var nameLengthArray =

// for (i in nameArray) {
//   create objects of all i;
//   split the new objects with key words first and last name;
//   we can then pull first.value and last.value;
// }



/////////function to append li elements to this ul id = "answersUl"
var listAppender = function(array) {
  for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    answerList.appendChild(li)
    answerList.children[i].innerHTML = array[i];
  }
}


/////////function to print innerHTML to li elements within the answersUl textarea
// var listAnswers = function(array) {
//   for (var i = 0; i < 20; i++) {
//     answerList.children[i].innerHTML = array[i];
//   };
// }



////////add event listeners to all buttons
printAllNames.addEventListener("click", listAppender(nameArray))
// firstNames.addEventListener("click", listAnswers(firstNameArray))
// lastNames.addEventListener("click", listAnswers(lastNameArray))
// nameLengths.addEventListener("click", listAnswers(nameLengthArray))
