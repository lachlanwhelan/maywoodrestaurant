const reservationForm = document.querySelector(".reservations-form");
const reservationPrompt = document.querySelector(".reservation-prompt");

reservationForm.addEventListener("submit", function(e){
    e.preventDefault();

    reservationPrompt.classList.add("show-prompt");
})

reservationPrompt.addEventListener("click", function(e){
    
    if(e.target.className.includes("reservation-prompt") || e.target.className.includes("fa-times") ){
        reservationPrompt.classList.remove("show-prompt");
    }
})