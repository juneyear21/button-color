function changeColor() {
  var button = document.querySelector(".btn");
  var currentColor = button.style.backgroundColor;

  // If current color is red, change it to blue, otherwise change it to red
  if (currentColor === "red") {
    button.style.backgroundColor = "blue";
  } else {
    button.style.backgroundColor = "red";
  }
}
