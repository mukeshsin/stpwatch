let minute = 00;
let second = 00;
let outputMinutes = document.querySelector(".minute");
let outputSeconds = document.querySelector(".second");
let buttonStart = document.querySelector(".btn-first");
console.log(buttonStart);
let buttonStop = document.querySelector(".btn-middle");
let buttonReset = document.querySelector(".btn-last");
let Interval;

buttonStart.addEventListener("click", () => {
    console.log(buttonStart);
    clearInterval(Interval)
    Interval = setInterval(startTime, 10);
});
buttonStop.addEventListener("click", () => {
    clearInterval(Interval)

});
buttonReset.addEventListener("click", () => {
    clearInterval(Interval)
    second = "00";
    minute = "00";
    outputMinutes.innerHTML = minute;
    outputSeconds.innerHTML = second;

});

function startTime() {
    second++;
    if (second <= 9) {
        outputSeconds.innerHTML = "0" + second;
    }
    if (second > 9) {
        outputSeconds.innerHTML = second;
    }
    if (second > 99) {
        minute++;
        outputMinutes.innerHTML = "0" + minute;
        second =0;
        outputSeconds.innerHTML = "0" + second;
    }
    if (minute > 9) {
        outputMinutes.innerHTML = minute;
    }
};
