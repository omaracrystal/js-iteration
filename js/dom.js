/*
Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/

//grabing buttons
var sumAll = document.getElementById("sum-all");

var countSelected = document.getElementById("count-selected");

var sumSelected = document.getElementById("sum-selected");

var avgAll = document.getElementById("average-all");

var avgSelected = document.getElementById("avgSelected");


//add event listeners
sumAll.addEventListener("click", function sumAll())

countSelected.addEventListener("click", function countSelected())

sumSelected.addEventListener("click", function sumSelected())

avgAll.addEventListener("click", function avgAll())

avgSelected.addEventListener("click", function avgSelected())


//grabing section to evaluate
var prices= document.getElementsByClassName("all-prices");

var names= document.getElementsByClassName("all-names");



// sumAll.onclick = function sumAll() {
//   var pricesString = prices[0][0].value;
//   var sum = [0];
//   for (var i = 0; i < prices[0].length; i++) {
//     pricesString += ' ' + prices[0][i].value;
//   };
//   priceArray = pricesString.split(" ");
//   priceArray;

//   for j in priceArray
//     j+=
// }
