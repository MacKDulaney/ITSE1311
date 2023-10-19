var fName = document.getElementById("firstName");

let btn = document.getElementById("btn");
btn.addEventListener("click", chckName);

function chckName() {
  //document.write("<p>My second Function</p>");
  //document.write(fName.value);

  document.getElementById("myName").innerHTML = fName.value;
}
