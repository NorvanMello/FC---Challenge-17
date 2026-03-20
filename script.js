const form = document.querySelector(".form")
const formInput = document.querySelector(".form-input")
const formBtn = document.querySelector(".form-btn")
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!regexEmail.test(formInput.value)) {
        formInput.classList.add("invalid-email")
    } else 
    {
       formInput.classList.remove("invalid-email") 
    }

    console.log(regexEmail.test(formInput.value))
});