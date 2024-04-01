var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;

function updateClock() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
        if (hours >= 24) {
          hours = 0;
        }
      }
    }

    document.getElementById("hour").innerText = (hours < 10 ? "0" + hours : hours);
    document.getElementById("minute").innerText = (minutes < 10 ? "0" + minutes : minutes);
    document.getElementById("second").innerText = (seconds < 10 ? "0" + seconds : seconds);
}
function startClock() {
    if (!timer) {
      timer = setInterval(updateClock, 1000);
    }
  }

function stopClock() {
    clearInterval(timer);
    timer = null;
}
function resetClock(){
    clearInterval(timer);
    timer=null;
    hours=0;
    minutes=0;
    seconds=0;
    document.getElementById("hour").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("second").innerText = "00";
}