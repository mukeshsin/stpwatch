let hour = 00;
let minute = 00;
let second = 00;
let outputHours = document.querySelector(".hour");
let outputMinutes = document.querySelector(".minute");
let outputSeconds = document.querySelector(".second");
let buttonStart = document.querySelector(".btn-first");
let buttonStop = document.querySelector(".btn-middle");
let buttonReset = document.querySelector(".btn-last");
let lapBtn = document.querySelector(".btn-lap");
let laps = document.querySelector(".laps");
let Interval;

buttonStart.addEventListener("click", () => {
    console.log(buttonStart);
    clearInterval(Interval)
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
    clearInterval(Interval)
    hour = "00";
    second = "00";
    minute = "00";
    outputHours.innerText = hour;
    outputMinutes.innerText = minute;
    outputSeconds.innerText = second;
    laps.innerText = null;

});

lapBtn.addEventListener("click", () => {
    const lap = document.createElement("div")
    lap.innerText = hour + ":" + minute + ":" + second;
    laps.appendChild(lap);
});
console.log(laps);




function startTime() {
    second++;
    if (second <= 9) {
        outputSeconds.innerText = "0" + second;
    }
    if (second > 9) {
        outputSeconds.innerText = second;
    }
    if (second > 99) {
        minute++;
        outputMinutes.innerText = "0" + minute;
        second = 0;
        outputSeconds.innerText = "0" + second;
    }
    if (minute > 9) {
        outputMinutes.innerText = minute;
    }
    if (minute > 59) {
        hour++
        outputHours.innerText = "0" + hour;
        minute = 0;
        outputMinutes.innerText = "0" + minute;
        second = 0;
        outputSeconds.innerText = "0" + second;
    }
};
// function lap(){
//     lapNow=displayHour+":"+displayMinute+":"+displaySecond; 
//     document.getElementById('lapRecord').innerHTML=document.getElementById('lapRecord')+"<p>"+lapNow+"</p>"; 
laps.innerText = '';
