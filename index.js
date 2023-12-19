// const startMinute = 25
// let time = startMinute * 60;
// let isRunning = false
// let intervalId;

// const countdown = document.getElementById('time-left');
// let startButton = document.getElementById('startButton')
// let pauseButton = document.getElementById('pauseButton')


// startButton.addEventListener('click', function () {
//     if (!isRunning) {
//         isRunning = true;
//         intervalId = setInterval(updateCountdown, 1000)
//     }
// })

// pauseButton.addEventListener('click', function () {
//     if (isRunning) {
//         isRunning = false;
//         clearInterval(intervalId);

//     }
// })

// function updateCountdown() {
//     if (isRunning) {
//         const minutes = Math.floor(time / 60);
//         const seconds = time % 60;

//         const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//         const formattedSecond = seconds < 10 ? '0' + seconds : seconds;
//         countdown.innerHTML = `${formattedMinutes}: ${formattedSecond}`
//         time--;
//         if (time < 0) {
//             time = startMinute * 60
//             isRunning = false;
//             clearInterval(intervalId)
//         }

//     }
// }


const startMinutes = 25;
let breakLength = 5;
let sessionLength = startMinutes
let time = sessionLength * 60
let isRunning = false;
let intervalId;

let countdown = document.getElementById('time-left')
let startButton = document.getElementById('startButton')
let pauseButton = document.getElementById('pauseButton')
let resetButton = document.getElementById('reset')
let breakDecrementButton = document.getElementById('break-decrement')
let breakIncrementButton = document.getElementById('break-increment')
let breakLengthDisplay = document.getElementById('break-length')
let sessionIncrementButton = document.getElementById('session-increment')
let sessionDecrementButton = document.getElementById('session-decrement')
let SessionLengthDisplay = document.getElementById('session-length')
let beepSound=document.getElementById('beep')


startButton.addEventListener('click', function () {
    if (!isRunning) {
        isRunning = true
        intervalId = setInterval(updateCountdown, 1000)
    }
});

pauseButton.addEventListener('click', function () {
    if (isRunning) {
        isRunning = false
        clearInterval(intervalId)
    }
});

resetButton.addEventListener('click', function () {
    isRunning = false;
    clearInterval(intervalId)
    sessionLength = startMinutes
    breakLength=5;
    time = sessionLength * 60;
    breakLengthDisplay.textContent = breakLength;
    SessionLengthDisplay.textContent = sessionLength
    updateCountdown();

    beepSound.pause();
    beepSound.currentTime=0
})

function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds
    countdown.innerHTML = `${formattedMinutes}: ${formattedSeconds}`;

    time--

    if (time < 0) {
        time = sessionLength * 60;
        isRunning = false
        clearInterval(intervalId)
       beepSound.play()
    }
}



breakDecrementButton.addEventListener('click', function () {
    if (breakLength > 1) {
        breakLength--;
        breakLengthDisplay.textContent = breakLength;
    }
})

breakIncrementButton.addEventListener('click', function () {
    if (breakLength < 60) {
        breakLength++;
        breakLengthDisplay.textContent = breakLength;
    }
})

sessionDecrementButton.addEventListener('click', function () {
    if (sessionLength > 1) {
        sessionLength--;
        time = sessionLength * 60
        SessionLengthDisplay.textContent = sessionLength;
        updateCountdown();
    }
})
sessionIncrementButton.addEventListener('click', function () {
    if (sessionLength < 60) {
        sessionLength++;
        time = sessionLength * 60
        SessionLengthDisplay.textContent = sessionLength;
        updateCountdown();
    }
})
