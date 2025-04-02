const clockDisplay = document.getElementById('clock');
const dateDisplay = document.getElementById('date');
const TIME_UPDATE_INTERVAL = 1000;

function formatTime(hours, minutes, seconds) {
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockDisplay.textContent = formatTime(hours, minutes, seconds);
}

function updateDate() {
    let now = new Date();
    let day = now.toDateString();
    dateDisplay.textContent = day;
}

function init() {
    updateClock();
    setInterval(updateClock, TIME_UPDATE_INTERVAL);
    if (dateDisplay) {
        updateDate();
    }
}

init();