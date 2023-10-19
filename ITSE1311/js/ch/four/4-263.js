console.clear();

try {
  let myFirstNumber = 0;
  let mySecondNumber = 2;

  if (myFirstNumber === 0) {
    console.log("This is zero");
    throw "Throwing this is zero";
    //
  } else if (mySecondNumber === 2) {
    console.log("This is a two");
    //
  } else if (myFirstNumber === 0 || mySecondNumber === 2) {
    console.log("Either a number was zero or two");
    //
  } else if (myFirstNumber === 3 && mySecondNumber === 7) {
    console.log("Either a number was zero or two");
    alert("Payment Recieved");
    //
  } else {
    console.log("Not any of the numbers");
  }
} catch (error) {
  //end try
  //catching errors
  //console.log("Catch error");
  //console.error(error.name);
  //console.error(error.message);
  //console.error(error.stack);
  console.warn(error);
  console.error(error.name);
} finally {
  //
  console.log("Thank you for visiting");
}
