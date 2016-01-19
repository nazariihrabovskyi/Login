function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var yourInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0.000000000000001) {
      timer = duration;
      alert("You had enough time. Bye!");
      window.close();
    }
    if (minutes === 0 || seconds === 0) {
      clearInterval(yourInterval); 
    }
  }, 1000);
}
window.onload = function () {
  var fewMinutes = 60 * 0.2,
    display = document.querySelector('#time');
  startTimer(fewMinutes, display);
};

