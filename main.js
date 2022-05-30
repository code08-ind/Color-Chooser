var slider = document.getElementById("myRange");
var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var finalColor = document.getElementById("finalColor");
var coloredBox = document.getElementById("coloredbox");
let copy = document.getElementById("copy");
let copiedColor = document.getElementById("copiedColor");

slider.oninput = function () {
  this.style.backgroundColor = `rgba(${this.value},0,0)`;
  output.innerHTML = slider.value;
  coloredBox.style.backgroundColor = finalColor.innerText;
}

slider1.oninput = function () {
  this.style.backgroundColor = `rgba(0,${this.value},0)`;
  output1.innerHTML = slider1.value;
  coloredBox.style.backgroundColor = finalColor.innerText;
}

slider2.oninput = function () {
  this.style.backgroundColor = `rgba(0,0,${this.value})`;
  output2.innerHTML = slider2.value;
  coloredBox.style.backgroundColor = finalColor.innerText;
}

copy.addEventListener('click', getCopied);

function getCopied() {
  navigator.clipboard.writeText(finalColor.innerText);
  copiedColor.innerText = "Copied Color : " + finalColor.innerText;
}
