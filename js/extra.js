//////////////////////////////////index.html LOGIC EXTRAS//////////////////////////////////

function createStringArray(varClassName) {
  var newString = varClassName[0][0].value
  var sum = [0]
  for (var i = 0; i < varClassName[0].length; i++) {
    newString += ' ' + varClassName[0][i].value;
  };
  stringArray = newString.split(" ");
  return stringArray;
}

function convertStringArraytoNumArray(stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = +stringArray[i];
  };
  numArray = stringArray;
  return numArray;
}

// Two other ways to do sum a number array:
1. console.log(eval(numArray.join('+')));

2 function sumAll(numArray) {
  for (
    var
      index = 0,
      length = numArray.length,
      sumAll = 0;
      index < length;
      sumAll += numArray[index++]
    );
    return sumAll;
   }

//////////////////////////////////index.html DOM EXTRAS//////////////////////////////////

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

