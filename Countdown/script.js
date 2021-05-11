const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');


const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const secs = Math.floor(seconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(secs);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);

