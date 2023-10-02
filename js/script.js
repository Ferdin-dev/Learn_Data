

const navMenu = document.getElementById("nav__menu"),
        navClose = document.getElementById("nav__close"),
        navToggle = document.getElementById("nav__toggle")

/*========== ADD SHOW MENU CLASS =========== */
if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*========== REMOVE SHOW MENU CLASS =========== */
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*========== REMOVE MENU MOBILE =========== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById("nav__menu");
    // When we click on each nav__link, we remove the show me class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/* ============ CHANGE BACKGROUND HEADER =============== */
const bgHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viemport height, add the scroll-header class to the header tag

    this.scrollY >= 100 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader);

let year = new Date();

let currentYear = document.getElementById("current_year");

currentYear.innerText = year.getFullYear();

// var typed = new Typed(".auto-type",{
//     strings: ["UI/UX Designer","Web Developer","Flutter Developer","Data Analyst"],
//     typeSpeed: 150,
//     backSpeed:150,
//     loop: true
//   })