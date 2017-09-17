function GetClock() {
  var date = new Date();
  var hour = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
  if (min <= 9) min = "0" + min;
  if (sec <= 9) sec = "0" + sec;
  document.getElementById('clockbox').innerHTML = hour + " : " + min + " : " + sec;
}

window.onload = function () {
  GetClock();
  setInterval(GetClock, 1000);
};