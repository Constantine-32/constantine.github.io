
function setup() {
  createCenteredCanvas()
  frameRate(60)
  draw()
}

function windowResized() {
  createCenteredCanvas()
  draw()
}

function createCenteredCanvas() {
  createCanvas(400, 400).position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  )
}

function draw() {
  drawFrame()
}

function drawFrame() {
  stroke('#fff')
  strokeWeight(1)
  line(0, 0, width, 0)
  line(0, 0, 0, height)
  line(width-1, height-1, width-1, 0)
  line(width-1, height-1, 0, height-1)
}