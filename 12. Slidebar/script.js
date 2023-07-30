const slider = document.querySelector("input");
const blur = document.querySelector(".blur");
console.log(slider.value);

slider.addEventListener("input", () => {
  console.log(slider.value);
  blur.style.backgroundColor = `rgba(0, 0, 0, ${slider.value / 120})`;
});
