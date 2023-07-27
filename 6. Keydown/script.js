function renderPage(e) {
  document.querySelector(".key-code").innerHTML = e.keyCode;
  document.querySelector(".key .bottom").innerHTML = e.key;
  document.querySelector(".location .bottom").innerHTML = e.location;
  document.querySelector(".keycode .bottom").innerHTML = e.keyCode;
  document.querySelector(".code .bottom").innerHTML = e.code;
}

document.addEventListener("keydown", (e) => {
  renderPage(e);
});
