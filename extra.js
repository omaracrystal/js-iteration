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

