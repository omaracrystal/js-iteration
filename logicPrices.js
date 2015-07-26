//////////////////////////////////index.html//////////////////////////////////

//Sum all selected prices or Sum all prices
var sumAll = function (list) {
  var total = 0;
    for (var i = 0; i < list.length; i++) {
    total += +list[i].value;
  };
  console.log(total);
  return total;
}

//Average all selected prices or Average all prices
var avgAll = function (list) {
  var sum = 0;
    for (var i = 0; i < list.length; i++) {
    sum += +list[i].value;
  }
  console.log(sum/list.length);
  return sum/list.length;
}

//Count the selected options
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
