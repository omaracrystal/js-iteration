//Another for index.html


/////////grab all buttons
var sumAllButton = document.getElementById("sum-all");

var countSelectedButton = document.getElementById("count-selected");

var sumSelectedButton = document.getElementById("sum-selected");

var avgAllButton = document.getElementById("average-all");

var avgSelectedButton = document.getElementById("average-selected");



///////get selected areas to evaluate
var priceList = document.getElementsByName("prices")[0].children;

var selectArea = document.getElementsByTagName("select")[0];

var getSelectedOptions = selectArea.selectedOptions;



//////grabing new Id's created in the Answer box section
var sumAllAnswer = document.getElementById("sumAllAnswer");

var countSelectedAnswer = document.getElementById("countSelectedAnswer");

var sumSelectedAnswer = document.getElementById("sumSelectedAnswer");

var avgAllAnswer = document.getElementById("avgAllAnswer");

var avgSelectedAnswer = document.getElementById("avgSelectedAnswer");



//////Answer Box filler functions to be called in event listeners
var sumAllFiller = function (){
sumAllAnswer.innerHTML = (sumAll(priceList) + " is the sum of all prices.");
}

var countSelectedFiller = function(){
countSelectedAnswer.innerHTML = (countSelected(getSelectedOptions) + " is the count of all selected items.");
}

var sumSelectedFiller = function(){
sumSelectedAnswer.innerHTML = (sumAll(getSelectedOptions) + " is the sum of all selected prices.");
}

var avgAllFiller = function(){
avgAllAnswer.innerHTML = (avgAll(priceList) + " is the average of all prices.");
}

var avgSelectedFiller = function(){
avgSelectedAnswer.innerHTML = (avgAll(getSelectedOptions) + " is the avg of all selected prices.");
}



////////add event listeners to all buttons
sumAllButton.addEventListener("click", sumAllFiller);

countSelectedButton.addEventListener("click", countSelectedFiller);

sumSelectedButton.addEventListener("click", sumSelectedFiller);

avgAllButton.addEventListener("click", avgAllFiller);

avgSelectedButton.addEventListener("click", avgSelectedFiller);

