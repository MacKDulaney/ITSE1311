console.clear();

let myFirstNumber = 1;
let mySecondNumber = 2;

if (myFirstNumber === 0) {
  console.log("This is zero");
} else if (mySecondNumber === 2) {
  console.log("This is a two");
} else if (myFirstNumber === 0 || mySecondNumber === 2) {
  console.log("Either a number was zero or two");
} else if (myFirstNumber === 3 && mySecondNumber === 7) {
  console.log("Either a number was zero or two");
  alert("Payment Recieved");
} else {
  console.log("Not any of the numbers");
}
