let hour = 00;
let minute = 00;
let second = 00;
let milliSecond = 00;
let outputHours = document.querySelector(".hour");
let outputMinutes = document.querySelector(".minute");
let outputSeconds = document.querySelector(".second");
let outputmilliSeconds = document.querySelector(".milliSecond");
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
    lapBtn.style.display="";

});

buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
    clearInterval(Interval)
    hour = "00";
    second = "00";
    minute = "00";
    milliSecond = "00";
    outputHours.innerText = hour;
    outputMinutes.innerText = minute;
    outputSeconds.innerText = second;
    outputmilliSeconds.innerText = milliSecond;
    laps.innerText = "";
    lapBtn.style.display="none";
});

lapBtn.addEventListener("click", () => {
    const lap = document.createElement("div")
    lap.innerText = hour + ":" + minute + ":" + second + ":" + milliSecond;
    laps.appendChild(lap);

});

function startTime() {
    milliSecond++;
    if (milliSecond <= 9) {
        outputmilliSeconds.innerText = "0" + milliSecond;
    }
    if (milliSecond > 9) {
        outputmilliSeconds.innerText = milliSecond;
    }
    if (milliSecond > 99) {
        second++;
        outputSeconds.innerText = "0" + second;
        milliSecond = 0;
        outputmilliSeconds.innerText = "0" + milliSecond;
    } if (second > 9) {
        outputSeconds.innerText = second;
    }
    if (second > 59) {
        minute++
        outputMinutes.innerText = "0" + minute;
        second = 0;
        outputSeconds.innerText = "0" + second;
    }
    if (minute > 59) {
        hour++
        outputHours.innerText = "0" + hour;
        minute = 0;
        outputMinutes.innerText = "0" + minute;
        second = 0;
        outputSeconds.innerText = "0" + second;
        milliSecond = 0;
        outputmilliSeconds.innerText = "0" + milliSecond;
    }
}

// function lapTime() {
//     if (buttonStart = stopped);
//     laps.innerText="";
//         laps.innerText=hour + ":" + minute + ":" + second + ":" + milliSecond;
//     };

// function lapTime(){
//     if(buttonStart===stopped);
//     lapTime;
//     document.getElementById("laps")=null;
// }

// function lapTime(){
//     if(lapTime=hour="00",
//     minute="00",
//     second="00",
//     milliSecond="00");
//     document.getElementById("btn-lap").style.display=none;



// }


// function lapTime() {
//     if (hour = 00,
//         minute = "00",
//         second = "00",
//         milliSecond = "00");

//     document.getElementById("btn-lap").style.display = "block";
//     laps.innerText = '';

// };
// if(time === "stopped"){
//     document.getElementById("btn-lap").style.display = "block";

// function lapTime() {
//     if (document.querySelector(".laps").innerText = "0") {
//         lapBtn.disabled = true; //button remains disabled
//     } else {
//         lapBtn.disabled = false; //button is enabled
//     }
// }

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("lap").disabled = true;
    document.getElementById("reset").disabled = false;
    Interval = setInterval(startTime, 10);
}