const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = setClockUnits(date.getHours());
    const minutes = setClockUnits(date.getMinutes());
    const seconds = setClockUnits(date.getSeconds());
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function setClockUnits(time) {
    return time < 10 ? `0${time}` : time
}

function init() {
    getTime();
    setInterval(getTime, 500);
}

init();