// countdown function with setinterval
const countdownDOM = document.getElementById("countdown");

let people = 95486184
setInterval(() => {
    people--
    countdownDOM.innerHTML = people;
}, 50);


// password check
const formDOM = document.querySelector('form');
formDOM.addEventListener('submit' , e => {
    const pass1DOM = document.querySelector('#password');
    const pass2DOM = document.querySelector('#confirm-password');
    const errorMsgDOM = document.querySelector('.error-message');
    
    if (pass1DOM.value.length < 6){
        e.preventDefault();
        errorMsgDOM.textContent = "*Password must be at least 6 characters."
        errorMsgDOM.style.display = 'block';
    }

    else if (pass1DOM.value !== pass2DOM.value) {
        e.preventDefault();
        pass1DOM.classList.add('error');
        pass2DOM.classList.add('error');
        errorMsgDOM.style.display = 'block';
    }
});