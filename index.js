let [hours, minutes, seconds] = [0, 0, 0];
let timer = true;
const watch = document.querySelector(".child");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

function smartWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  watch.innerHTML = `${h}:${m}:${s}`;
}

start.addEventListener("click", () => {
  if (timer !== true) {
    clearInterval(timer);
  }
  timer = setInterval(smartWatch, 100);
});
reset.addEventListener("click", () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  watch.innerHTML = "00:00:00";
});
document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(timer);
});
