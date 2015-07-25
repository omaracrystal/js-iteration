/*
Hints for the first problem:
  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in
NOTE: use a loop to make this happen.
*/

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


function sumAll(numArray) {
  var total = 0;
    for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
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

function avgAll(numArray) {
  var total = 0;
    for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
}
  avgAll = (total / numArray.length);
  return avgAll;
}


function countSelected(numArray){
   var selected = numArray.options.selectedIndex;
   selected = []
   if HTMLSelectElement.required = true;
    return 1=+;
 }
  else
   };
   return countSelected;
}




// function sumSelected() {

// }




// function avgSelected() {

// }
