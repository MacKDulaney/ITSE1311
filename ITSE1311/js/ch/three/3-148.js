console.clear();

//let name =[value1, value2, value3];
//let name =["string", number, buleon];

let colors = [];

colors[12] = "yellow";

console.log(colors);
console.log(colors.length);

/* LOOPS

while = it can run without going into the loop even once
do/while = it runs inside the loop at least once
for = it allows you to define a variable within the loop statement

*/
/*
let myCounter = 0;
let myStop = 10;
while (myCounter <= myStop) {
  console.log("myloop is running at " + myCounter);

  myCounter++;
}
*/

/*
let myCounter = 0;
let myStop = colors.length;
while (myCounter <= myStop) {
  console.log("myloop is running at " + myCounter);

  myCounter++;
}
*/

/*
let myCounter = 1;

do {
  console.log("my loop is running" + myCounter);
  myCounter++;
} while (myCounter < 10);
*/

let fruits = [
  "apples",
  "oranges",
  "bananas",
  "strawberries",
  "watermelon",
  "melon",
  "berries"
];

console.log(fruits[4]);

for (let myCounter = 0; myCounter < fruits.length; myCounter++) {
  console.log(
    "my fruit loop is running " +
      "at number " +
      myCounter +
      " which is " +
      fruits[myCounter]
  );
}
