const contactForm = document.querySelector(".contact-form");
const submitMessage = document.querySelector(".form-submit-message");
const formInputs = document.querySelectorAll(".form-input");

function initMap() {
    console.log("test");
    // The location of Newtown
    const newtown = { lat: -33.8978, lng: 151.1785 };
    // The map, centered at Newtown
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: newtown,
    });
    // The marker, positioned at Newtown
    const marker = new google.maps.Marker({
      position: newtown,
      map: map,
    });
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;

    isValid = checkForEmptyInputs(); 



    if(isValid){

        clearInputs();

        contactForm.parentElement.classList.add("hide-form");
        
        setTimeout(() => {
            contactForm.parentElement.classList.remove("hide-form");
        }, 5000);

    }

};


const checkForEmptyInputs = () => {

    let ret = true;

    for(let i = 0; i < formInputs.length; i++){
        
        if(formInputs[i].value.length === 0){
            formInputs[i].parentElement.classList.add("invalid");
            ret = false;
        }else{
            formInputs[i].parentElement.classList.remove("invalid");
        
        }

    }

    return ret;
}


const clearInputs = () => {
    
    
    for(let i = 0; i < formInputs.length; i++){
        
        formInputs[i].value = "";

    }
}



contactForm.addEventListener("submit", handleFormSubmit);
  