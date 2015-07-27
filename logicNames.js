//////////////////////////////////names.html//////////////////////////////////

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
