import flatpickr from "flatpickr";

const inputDate = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMin = document.querySelector("[data-minutes]");
const timerSec = document.querySelector("[data-seconds]");
const ulTimer = document.querySelector(".timer");
ulTimer.style.display = "flex";
ulTimer.style.gap = "24px";
ulTimer.style.padding = "25px";
const valueTime = document.querySelectorAll(".value");
valueTime.forEach(element => {
  element.style.fontWeight = "700";
});


let timerId;
let ms;

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choiseData = selectedDates[0];
    if (choiseData) {
      btnStart.disabled = false;
    }
  }
};

flatpickr("#datetime-picker", options);

btnStart.addEventListener("click", () => {
  const selectedDate = flatpickr.parseDate(inputDate.value, "Y-m-d H:i");
  startTimer(selectedDate);
});

function startTimer(d) {
  const curentData = new Date();
  if (d <= curentData) {
    window.alert("Please choose a date in the future");
  } else {
    ms = d - curentData;
    convertMs(ms);
    timerId = setInterval(() => {
      ms -= 1000;
      if (ms <= 0) {
        clearInterval(timerId);
        btnStart.disabled = true;
      } else {
        convertMs(ms);
      }
    }, 1000);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  timerDays.textContent = days.toString().padStart(2, "0");
  timerHours.textContent = hours.toString().padStart(2, "0");
  timerMin.textContent = minutes.toString().padStart(2, "0");
  timerSec.textContent = seconds.toString().padStart(2, "0");
}