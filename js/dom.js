/*
Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/

//Print all Names functionality
// var allNamesButton = document.getElementById("all-names").addEventListener("click", function() {

// })


//Sum all Button functionality
var sumAllButton = document.getElementById("sum-all").addEventListener("click", function() {
  var priceList = document.getElementsByName("prices")[0].children;
  var sumAllAnswer = document.getElementById("sumAllAnswer");
  sumAllAnswer.innerHTML = (sumAll(priceList) + " is the sum of all prices.");
});



//Count selected button functionality
var countSelectedButton = document.getElementById("count-selected").addEventListener("click", function() {
  var selectArea = document.getElementsByTagName("select")[0];
  var getSelectedOptions = selectArea.selectedOptions;
  var countSelectedAnswer = document.getElementById("countSelectedAnswer");
  countSelectedAnswer.innerHTML = (countSelected(getSelectedOptions) + " is the count of all selected items.");
});;



//Sum selected button functionality
var sumSelectedButton = document.getElementById("sum-selected").addEventListener("click", function() {
  var selectedArea = document.getElementsByTagName("select")[0];
  var getSelectedOptions = selectedArea.selectedOptions;
  var sumSelectedAnswer = document.getElementById("sumSelectedAnswer");
  sumSelectedAnswer.innerHTML = (sumAll(getSelectedOptions) + " is the sum of all selected prices.");
});



//Average all button functionality
var avgAllButton = document.getElementById("average-all").addEventListener("click", function() {
  var priceList = document.getElementsByName("prices")[0].children;
  var avgAllAnswer = document.getElementById("avgAllAnswer");
  avgAllAnswer.innerHTML = (avgAll(priceList) + " is the average of all prices.");
});



//Average button selected functionality
var avgSelectedButton = document.getElementById("average-selected").addEventListener("click", function() {
  var selectedArea = document.getElementsByTagName("select")[0];
  var getSelectedOptions = selectedArea.selectedOptions;
  var avgSelectedAnswer = document.getElementById("avgSelectedAnswer");
  avgSelectedAnswer.innerHTML = (avgAll(getSelectedOptions) + " is the avg of all selected prices.");
});
