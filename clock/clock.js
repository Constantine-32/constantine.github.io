var textElem = document.getElementById("clock");
var textNode = document.createTextNode("");
textElem.appendChild(textNode);

var targetWidth = 0.8;  // Proportion of full screen width
var curFontSize = 20;  // Do not change

function updateClock() {
  var d = new Date();
  var s = "";
  s += (d.getHours  () < 10 ? "0" : "") + d.getHours  () + ":";
  s += (d.getMinutes() < 10 ? "0" : "") + d.getMinutes() + ":";
  s += (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
  textNode.data = s;
  setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20);
}

function updateTextSize() {
  for (var i = 0; i < 4; i++) {  // Iterate for better better convergence
    curFontSize *= targetWidth / (textElem.offsetWidth / textElem.parentNode.offsetWidth);
    textElem.style.fontSize = curFontSize + "pt";
  }
}

updateClock();
updateTextSize();
window.addEventListener("resize", updateTextSize);