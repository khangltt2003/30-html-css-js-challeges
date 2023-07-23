const searchIcon = document.querySelector("button");
const searchBar = document.querySelector(".search-bar");
const input = document.querySelector("input");
function toogleInput() {
  searchBar.classList.toggle("show-input");
  input.focus();
  input.value = "";
}

searchIcon.addEventListener("click", () => {
  toogleInput();
});
