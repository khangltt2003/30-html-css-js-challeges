const openButton = document.querySelector(".openButton");
const closeButtons = document.querySelectorAll(".closeButton")
const popUp = document.querySelector(".popup");
const body = document.querySelector("body")


openButton.addEventListener("click", ()=>openModal())

closeButtons.forEach((button)=>{
    button.addEventListener("click", ()=>closeModal())
})

function openModal(){
    popUp.style.top = "10%";
    body.style.backgroundColor = "#e66464a";
}

function closeModal(){
    popUp.style.top = "-40%";
    body.style.backgroundColor = "#e66465";

}

