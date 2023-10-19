console.clear();

/*

// getElementById
// getElementsByClassName
// getElementsByName
// getElementsByTagName
// quarySelectorAll

*/

//let firstName = document.getElementById("firstName");
//console.log(firstName.value);

//let timeOfDay = document.getElementById("timeOfDayMorning");
//console.log(timeOfDay.value);

//let timeOfDayField = document.getElementsByName("timeOfDay");
//console.log(timeOfDayField.value);

//let timeOfDayField = document.getElementsByTagName("input")[1];
//console.log(timeOfDayField.value);

//let timeOfDayField = document.querySelector("#firstName");
//console.log(timeOfDayField.value);

//let timeOfDayField = document.querySelectorAll(".timeOfDay")[1];
let timeOfDayField = document.querySelectorAll(".timeOfDay");
console.log("The number of checked boxes are " + timeOfDayField.length);

let btn = document.getElementById("btn");
btn.addEventListener("click", chkTimeOfDay);

function chkTimeOfDay() {
  let timeOfDayFieldChecked = document.querySelectorAll(".timeOfDay:checked");

  for (
    var myCounter = 0;
    myCounter < timeOfDayFieldChecked.length;
    myCounter++
  ) {
    console.log("The time of day is " + timeOfDayFieldChecked[myCounter].value);
  }

  if (myCounter < 1) {
    alert("At least one time of day is required");
    return false;
  }

  //alert("test");
}
