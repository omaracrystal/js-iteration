/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a loop to make this happen.
*/

//////////////////////////////////prices.html LOGIC//////////////////////////////////
//this function can sum all selected prices or sum all prices
var sumAll = function (list) {
  var total = 0;
    for (var i = 0; i < list.length; i++) {
    total += +list[i].value;
  };
  console.log(total);
  return total;
}

//this function can average all selected prices or average all prices
var avgAll = function (list) {
  var sum = 0;
    for (var i = 0; i < list.length; i++) {
    sum += +list[i].value;
  }
  console.log(sum/list.length);
  return sum/list.length;
}

//this function can only count the selected options
function countSelected(list){
   var selected = 0
   for (var i = 0; i < list.length; i++) {
     if (list[i].selected === true) {
      selected++;
     }
   };
   console.log(selected);
   return selected;
}


//////////////////////////////////names.html LOGIC//////////////////////////////////

////get the string of names and split it into an array
var nameString = document.getElementsByTagName("textarea")[0].value;
var nameArray = nameString.split("\n");



////create a list of fullName objects with key, value pairs being first & last
var nameObjectArray = function (nameArray) {
    //holder for new object array
    objectList = [];
  for (var i=0; i < nameArray.length; i++) {
    //trim excess spaces
    var trimmed=nameArray[i].trim();
    //split on spaces in between
    var names = trimmed.split(" ");
    //push object onto array
    objectList.push({"first": names[0], "last": names[1]});
  };
  console.log(objectList);
  }

nameObjectArray(nameArray);
