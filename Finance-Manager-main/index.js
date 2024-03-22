const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function () {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
});

const scroll_abt = document.getElementById("scroll-abt");

scroll_abt.addEventListener('click', () => {
    document.querySelector(".about-us").scrollIntoView({ behavior: 'smooth' });
})
const expense = document.getElementById("expense");

expense.addEventListener('click', () => {
    window.location = 'tracker.html';
})
