var ELEMENT = [document.getElementById("seconds"),
                 document.getElementById("minutes"),
                 document.getElementById("hours"),
                 document.getElementById("days"),
                 document.getElementById("weeks"),
                 document.getElementById("months"),
                 document.getElementById("years"),
                 document.getElementById("humans"),
                 document.getElementById("earth"),
                 document.getElementById("universe")]

function hideZeros() {
  for (var i = 0; i <= ELEMENT.length; i++) {
    if (ELEMENT[i].value === "0") ELEMENT[i].value = ""
  }
}

function formatNum(number) {
  return Math.floor(number)
}

function updateAll() {
  ELEMENT[1].value = formatNum(ELEMENT[0].value / 60)
  ELEMENT[2].value = formatNum(ELEMENT[0].value / 3600)
  ELEMENT[3].value = formatNum(ELEMENT[0].value / 86400)
  ELEMENT[4].value = formatNum(ELEMENT[0].value / 604800)
  ELEMENT[5].value = formatNum(ELEMENT[0].value / 2628000)
  ELEMENT[6].value = formatNum(ELEMENT[0].value / 31536000)
  ELEMENT[7].value = formatNum(ELEMENT[0].value / 2491344000)
  ELEMENT[8].value = formatNum(ELEMENT[0].value / 143173440000000000)
  ELEMENT[9].value = formatNum(ELEMENT[0].value / 435165264000000000)
  hideZeros()
}

function updateMinutes() {
  var ele = ELEMENT[1]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 60)
  updateAll()
}

function updateHours() {
  var ele = ELEMENT[2]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 3600)
  updateAll()
}

function updateDays() {
  var ele = ELEMENT[3]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 86400)
  updateAll()
}

function updateWeeks() {
  var ele = ELEMENT[4]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 604800)
  updateAll()
}

function updateMonths() {
  var ele = ELEMENT[5]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 2628000)
  updateAll()
}

function updateYears() {
  var ele = ELEMENT[6]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 31536000)
  updateAll()
}

function updateHumans() {
  var ele = ELEMENT[7]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 2491344000)
  updateAll()
}

function updateEarth() {
  var ele = ELEMENT[8]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 143173440000000000)
  updateAll()
}

function updateUniverse() {
  var ele = ELEMENT[9]
  if (!isNaN(ele.value) && ele.value >= 0) ELEMENT[0].value = formatNum(ele.value * 435165264000000000)
  updateAll()
}
