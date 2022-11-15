// countdown function with setinterval
const countdownDOM = document.getElementById("countdown");

let people = 95486184
setInterval(() => {
    people--
    countdownDOM.innerHTML = people;
}, 50);