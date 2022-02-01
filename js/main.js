const body = document.querySelector("body");
const navToggleBtn = document.querySelector(".nav-toggle");

const toggleNavbar = (e) => {
    body.classList.toggle("toggle-on");
    navToggleBtn.classList.toggle("show");
}

navToggleBtn.addEventListener("click", toggleNavbar);
