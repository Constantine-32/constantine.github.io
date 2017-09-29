function getElements() {
  return [document.getElementById("seconds"),
          document.getElementById("minutes"),
          document.getElementById("hours"),
          document.getElementById("days"),
          document.getElementById("weeks"),
          document.getElementById("months"),
          document.getElementById("years")]
}

function updateElements(elements) {
  for (var i = 0; i <= elements.length; i++) {
    if (elements[i].value === "0") {
      elements[i].value = ""
    }
  }
}

function updateSeconds() {
  var ele = getElements()
  ele[1].value = Math.floor(ele[0].value / 60)
  ele[2].value = Math.floor(ele[0].value / 3600)
  ele[3].value = Math.floor(ele[0].value / 86400)
  ele[4].value = Math.floor(ele[0].value / 604800)
  ele[5].value = Math.floor(ele[0].value / 2628000)
  ele[6].value = Math.floor(ele[0].value / 31536000)
  updateElements(ele)
}

function updateMinutes() {
  var ele = document.getElementById("minutes")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 60)
  updateSeconds()
}

function updateHours() {
  var ele = document.getElementById("hours")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 3600)
  updateSeconds()
}

function updateDays() {
  var ele = document.getElementById("days")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 86400)
  updateSeconds()
}

function updateWeeks() {
  var ele = document.getElementById("weeks")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 604800)
  updateSeconds()
}

function updateMonths() {
  var ele = document.getElementById("months")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 2628000)
  updateSeconds()
}

function updateYears() {
  var ele = document.getElementById("years")
  if (!isNaN(ele.value) && ele.value >= 0) document.getElementById("seconds").value = Math.floor(ele.value * 31536000)
  updateSeconds()
}
