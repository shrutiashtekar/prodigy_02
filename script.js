let startTime;
let elapsedTime = 0;
let timerInterval;
let lapNumber = 1;

function startStop() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("startStop").textContent = "Start";
  }
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  lapNumber = 1;
  updateDisplay();
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("lapTimes").textContent = "";
}

function recordLap() {
  const lapTime = getFormattedTime(elapsedTime);
  const lapElement = document.createElement("div");
  lapElement.textContent = `Lap ${lapNumber}: ${lapTime}`;
  document.getElementById("lapTimes").appendChild(lapElement);
  lapNumber++;
}

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  const formattedTime = getFormattedTime(elapsed);
  document.getElementById("display").textContent = formattedTime;
}

function getFormattedTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

updateDisplay(); // Initial display
