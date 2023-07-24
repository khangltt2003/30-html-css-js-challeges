const openButton = document.querySelector(".openButton");
const closeButtons = document.querySelectorAll(".closeButton");
const popup = document.querySelector(".popup-container");
const body = document.querySelector("body");

function togglePopUp() {
  popup.classList.toggle("hidden");
}

openButton.addEventListener("click", togglePopUp);

popup.addEventListener("click", (e) => {
  //e.target = clicked element
  //e.current = element that eventHandler attached to (modal)
  if (e.target === e.currentTarget) {
    togglePopUp();
  }
});

closeButtons.forEach((button) => {
  button.addEventListener("click", togglePopUp);
});
