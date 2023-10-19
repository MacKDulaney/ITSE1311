console.clear();

let myFirstNumber = 1;
let mySecondNumber = 2;

let myThirdNumber = 10;
let myFourthNumber = 5;

console.log(typeof myFirstNumber);
console.log(typeof mySecondNumber);

/* an operand is any object that can be manupliated in an operation (Mathematics)

+ addition (contatination when it is a string)
++ increment
- subtraction
-- decrement
* multiplication
/ division
% modulus
< less than
> greater than
<= less than or equal to
>= greater than or equal to
= equal (assignation)
== is equals
=== is identical
!= not equal
!== not identical
&& and
|| or
! not

*/

//if, elseif, else

if (myFirstNumber === mySecondNumber) {
  console.log(true);
} else {
  console.log(false);
}

let myTotal =
  ((myFirstNumber + mySecondNumber) * myThirdNumber) / myFourthNumber;

console.log(myTotal);
