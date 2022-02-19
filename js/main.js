const body = document.querySelector("body");
const navToggleBtn = document.querySelector(".nav-toggle");
const reservationLink = document.querySelector(".reservation-link");
const fadeInElements = document.querySelectorAll(".reveal");

setInterval(() => {
    for(let i = 0; i < fadeInElements.length; i++){
        
        if(fadeInElements[i].getBoundingClientRect().top < 800){  
            fadeInElements[i].style.animationName = "fadeInUp";
            fadeInElements[i].style.animationFillMode = "both";
            fadeInElements[i].style.animationDuration = "1000ms";
            fadeInElements[i].style.animationIterationCount = "1";
        }

    }
}, 500);



const toggleNavbar = (e) => {
    body.classList.toggle("toggle-on");
    navToggleBtn.classList.toggle("show");
};

const closeNavbar = (e) => {
    body.classList.remove("toggle-on");
    navToggleBtn.remove("show");
};

navToggleBtn.addEventListener("click", toggleNavbar);


if(reservationLink){
    reservationLink.addEventListener("click", closeNavbar);
}


