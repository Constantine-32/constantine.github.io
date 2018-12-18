function createCenteredCanvas() {
  createCanvas(390, 390, WEBGL).position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  )
}

function setup() {
  createCenteredCanvas()
  draw()
}

function windowResized() {
  createCenteredCanvas()
  draw()
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(2)
  rotateX(frameCount *  0.01)
  rotateY(frameCount *  0.01)
  // rotateZ(frameCount *  0.01)
  icosahedron(80)
}

function icosahedron(r) {
  const p = r * 1.618033988749895
  const z1 = [ 0,  p,  r]
  const z2 = [ 0,  p, -r]
  const z3 = [ 0, -p,  r]
  const z4 = [ 0, -p, -r]
  const x1 = [ r,  0,  p]
  const x2 = [-r,  0,  p]
  const x3 = [ r,  0, -p]
  const x4 = [-r,  0, -p]
  const y1 = [ p,  r,  0]
  const y2 = [ p, -r,  0]
  const y3 = [-p,  r,  0]
  const y4 = [-p, -r,  0]

  line(...z1, ...z2)
  line(...z3, ...z4)
  line(...x1, ...x2)
  line(...x3, ...x4)
  line(...y1, ...y2)
  line(...y3, ...y4)

  line(...z1, ...x1)
  line(...z1, ...x2)
  line(...z2, ...x3)
  line(...z2, ...x4)
  line(...z3, ...x1)
  line(...z3, ...x2)
  line(...z4, ...x3)
  line(...z4, ...x4)

  line(...y1, ...z1)
  line(...y1, ...z2)
  line(...y2, ...z3)
  line(...y2, ...z4)
  line(...y3, ...z1)
  line(...y3, ...z2)
  line(...y4, ...z3)
  line(...y4, ...z4)

  line(...x1, ...y1)
  line(...x1, ...y2)
  line(...x2, ...y3)
  line(...x2, ...y4)
  line(...x3, ...y1)
  line(...x3, ...y2)
  line(...x4, ...y3)
  line(...x4, ...y4)
}

function dodecahedron(r) {
  const p = r * 1.618033988749895
  const q = r * 0.618033988749895
  const z1 = [ 0,  p,  q]
  const z2 = [ 0,  p, -q]
  const z3 = [ 0, -p,  q]
  const z4 = [ 0, -p, -q]
  const x1 = [ q,  0,  p]
  const x2 = [-q,  0,  p]
  const x3 = [ q,  0, -p]
  const x4 = [-q,  0, -p]
  const y1 = [ p,  q,  0]
  const y2 = [ p, -q,  0]
  const y3 = [-p,  q,  0]
  const y4 = [-p, -q,  0]
  const c1 = [ r,  r,  r]
  const c2 = [ r,  r, -r]
  const c3 = [ r, -r,  r]
  const c4 = [ r, -r, -r]
  const c5 = [-r,  r,  r]
  const c6 = [-r,  r, -r]
  const c7 = [-r, -r,  r]
  const c8 = [-r, -r, -r]

  line(...z1, ...z2)
  line(...z3, ...z4)
  line(...x1, ...x2)
  line(...x3, ...x4)
  line(...y1, ...y2)
  line(...y3, ...y4)

  line(...z1, ...c1)
  line(...z1, ...c5)
  line(...z3, ...c3)
  line(...z3, ...c7)
  line(...z2, ...c2)
  line(...z2, ...c6)
  line(...z4, ...c4)
  line(...z4, ...c8)

  line(...x1, ...c1)
  line(...x1, ...c3)
  line(...x3, ...c2)
  line(...x3, ...c4)
  line(...x2, ...c5)
  line(...x2, ...c7)
  line(...x4, ...c6)
  line(...x4, ...c8)

  line(...y1, ...c1)
  line(...y1, ...c2)
  line(...y3, ...c5)
  line(...y3, ...c6)
  line(...y2, ...c3)
  line(...y2, ...c4)
  line(...y4, ...c7)
  line(...y4, ...c8)
}