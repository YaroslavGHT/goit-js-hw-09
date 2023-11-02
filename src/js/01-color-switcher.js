function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let startActive = false;
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
btnStart.disabled = false;
btnStop.disabled = true;

if (!startActive) {
    btnStart.addEventListener("click", () => {
        startActive = true;
        btnStart.disabled = true;
        btnStop.disabled = false;
        changeColor = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();  
        }, 1000);
    });
    btnStop.addEventListener("click", () => {
        clearInterval(changeColor);
        btnStart.disabled = false;
        btnStop.disabled = true;       
    });

};