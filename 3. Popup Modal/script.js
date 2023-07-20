const openButton = document.querySelector(".openButton");
const closeButtons = document.querySelectorAll(".closeButton")
const modal = document.querySelector(".modal");
const body = document.querySelector("body")

function toggleModal(){
    modal.classList.toggle("hidden");
}

openButton.addEventListener("click", toggleModal)

// body.addEventListener("click", toggleModal)

closeButtons.forEach((button)=>{
    button.addEventListener("click", toggleModal)
})