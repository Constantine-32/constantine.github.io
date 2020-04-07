const rulesI = document.getElementById('rules-icon')
const stoneI = document.getElementById('stone-icon')
const gearsI = document.getElementById('gears-icon')
const rulesP = document.getElementById('rules-plus')
const stoneP = document.getElementById('stone-plus')
const gearsP = document.getElementById('gears-plus')

const rules = document.getElementById('rules')
const stone = document.getElementById('stone')
const gears = document.getElementById('gears')
const total = document.getElementById('total')
const score = document.getElementById('score')
const averg = document.getElementById('averg')

const getScore = (a, b, c) => a*a + b*b + c*c + 7*Math.min(a, b, c)
const getInt = (e) => e.value !== '' ? parseInt(e.value) : 0
const getVal = (e) => [1, 0, -1][e.button]

const calc = (ele) => {
  if (isNaN(ele.value) || ele.value < 1 || ele.value > 99)
    ele.value = ''

  const rulesV = getInt(rules)
  const stoneV = getInt(stone)
  const gearsV = getInt(gears)
  const totalV = rulesV + stoneV + gearsV
  const scoreV = getScore(rulesV, stoneV, gearsV)
  const avergV = Math.round(scoreV / totalV * 100) / 100

  rulesP.innerHTML = '+' + (getScore(rulesV+1, stoneV, gearsV) - scoreV)
  stoneP.innerHTML = '+' + (getScore(rulesV, stoneV+1, gearsV) - scoreV)
  gearsP.innerHTML = '+' + (getScore(rulesV, stoneV, gearsV+1) - scoreV)

  total.innerHTML = 'Sum<br>' + totalV
  score.innerHTML = 'Score<br>' + scoreV
  averg.innerHTML = 'Avg<br>' + (isNaN(avergV) ? 0 : avergV)
}

rules.addEventListener('keyup', () => { calc(rules) })
stone.addEventListener('keyup', () => { calc(stone) })
gears.addEventListener('keyup', () => { calc(gears) })

rules.addEventListener('click', () => { rules.select() })
stone.addEventListener('click', () => { stone.select() })
gears.addEventListener('click', () => { gears.select() })
score.addEventListener('click', () => { score.select() })

rulesI.addEventListener('mouseup', (e) => { rules.value = getInt(rules) + getVal(e); calc(rules) })
stoneI.addEventListener('mouseup', (e) => { stone.value = getInt(stone) + getVal(e); calc(stone) })
gearsI.addEventListener('mouseup', (e) => { gears.value = getInt(gears) + getVal(e); calc(gears) })