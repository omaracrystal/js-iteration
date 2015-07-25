/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a loop to make this happen.
*/


var createStringArray = function createStringArray (varClassName) {
  var newString = varClassName[0][0].value
  var sum = [0]
  for (var i = 0; i < varClassName[0].length; i++) {
    newString += ' ' + varClassName[0][i].value;
  };
  stringArray = newString.split(" ");
  return stringArray;
}

var numArray = function convertStringArraytoNumArray (stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    var numArray = (stringArray[i] = +stringArray[i]);
  };
  return numArray;
}


var sumTotalAll= function sumAll(numArray) {
  var total = 0;
    for (var i = 0; i < numArray.length; i++) {
  sumAll = total += numArray[i];
}
  return total;
}
// Two other ways to do the same problem above:
// 1. console.log(eval(numArray.join('+')));
//
// 2 function sumAll(numArray) {
//   for (
//     var
//       index = 0,
//       length = numArray.length,
//       sumAll = 0;
//       index < length;
//       sumAll += numArray[index++]
//     );
//     return sumAll;
//    }


function avgAll(arrayofNum) {
  var total = 0;
    for (var i = 0; i < arrayofNum.length; i++) {
    total += arrayofNum[i];
}
  var avg = total / arrayofNum.length;
  return avg;
}


function countSelected(array){
   selected = []
   if HTMLSelectElement.required = true;
    return 1=+;
 }
  else
   };
   return countSelected;
}




function sumSelected() {

}




function avgSelected() {

}
