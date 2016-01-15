function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var yourInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
    if (minutes === 0 || seconds === 0) {
      clearInterval(yourInterval)
    }
  }, 1000);
}
window.onload = function () {
  var fewMinutes = 60 * 0.1,
    display = document.querySelector('#time');
  startTimer(fewMinutes, display);
};

/*function validate() {
    var x = document.forms["form"].value;
    if (x == null || x == "") {
        alert("All fielda must be filled out");
        return false;
    }
}*/
