var width = 9
var height = 9
var matrix = new Array(width*height)
var game = true

function click(idx) {
  matrix[idx] ^= 1
  if (idx >= width) matrix[idx-width] ^= 1
  if (idx%width >= 1) matrix[idx-1] ^= 1
  if (idx%width <= width-2) matrix[idx+1] ^= 1
  if (idx+width < height*width) matrix[idx+width] ^= 1
}

function iniMatrix() {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = 0
  }
  for (i = 0; i < width*height; i++) {
    click(Math.floor(Math.random() * matrix.length))
  }
}

function iniHtmlMatrix() {
  var container = document.getElementById("container")
  container.style.height = height * 50 + "px"
  container.style.width = width * 50 + "px"
  for (var i = 0; i < height*width; i++) {
    var div = document.createElement("div")
    div.className = "square"
    div.id = i
    div.onmousedown = mouseClick
    container.appendChild(div)
  }
  updateHtmlMatrix()
}

function updateHtmlMatrix() {
  for (var i = 0; i < matrix.length; i++) {
    document.getElementById(""+i).style.backgroundColor =  matrix[i] === 0 ? "#000" : "#333"
  }
}

function toggleState(idx) {
  if (idx < 0) return;
  if (idx >= width*height) return;
  matrix[idx] ^= 1
  document.getElementById(idx).style.backgroundColor = matrix[idx] === 0 ? "#000" : "#333"
}

function checkWin() {
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i] === 1) return false
  }
  return true
}

function getEventId() {
  var targ;
  if (!e) var e = window.event
  if (e.target) targ = e.target
  else if (e.srcElement) targ = e.srcElement
  if (targ.nodeType === 3) targ = targ.parentNode
  return parseInt(targ.id)
}

function mouseClick() {
  if (game) {
    var idx = getEventId()
    toggleState(idx)
    if (idx >= width) toggleState(idx - width)
    if (idx % width >= 1) toggleState(idx - 1)
    if (idx % width <= width - 2) toggleState(idx + 1)
    if (idx + width < height * width) toggleState(idx + width)
    if (checkWin()) {
      game = false
      document.getElementById("title").innerHTML = "You Won!"
    }
  } else {
    game = true
    iniMatrix()
    updateHtmlMatrix()
    document.getElementById("title").innerHTML = "Lights Out"
  }
}

iniMatrix()
iniHtmlMatrix()