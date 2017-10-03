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
  for (i = 0; i < 20; i++) {
    click(Math.floor(Math.random() * matrix.length))
  }
}

function iniHtmlMatrix() {
  var container = document.getElementById("container")
  var table = document.createElement("table")
  var tbody = document.createElement("tbody")
  for (var i = 0; i < height; i++) {
    var tr = document.createElement("tr")
    for (var j = 0; j < width; j++) {
      var index = i*width+j
      var td = document.createElement("td")
      td.id = index
      td.onmousedown = mouseClick;
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
  table.appendChild(tbody)
  container.appendChild(table)
  updateHtmlMatrix()
}

function updateHtmlMatrix() {
  for (var i = 0; i < matrix.length; i++) {
    document.getElementById(""+i).style.backgroundColor =  matrix[i] === 0 ? "#000000" : "#999999"
  }
}

function toggleState(idx) {
  if (idx < 0) return;
  if (idx >= width*height) return;
  matrix[idx] ^= 1
  document.getElementById(idx).style.backgroundColor = matrix[idx] === 0 ? "#000000" : "#999999"
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
      // alert("You Won!")
      // iniMatrix()
      // updateHtmlMatrix()
    }
  }
}

iniMatrix()
iniHtmlMatrix()