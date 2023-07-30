const slider = document.querySelector(".slider");
const process = document.querySelector(".process");
const thumb = document.querySelector(".thumb");
const blurBackground = document.querySelector(".blur");

let onHold = false;

thumb.addEventListener("mousedown", () => {
  onHold = true;
});

document.addEventListener("mouseup", () => {
  onHold = false;
});

document.addEventListener("mousemove", (e) => {
  if (onHold) {
    //pageX : distance from mouse to left edge of browser
    //offsetLeft: distance from left edge of element to left edge of browser
    //offsetWidth: width of element
    let processWidth = e.pageX - slider.offsetLeft;
    let percent = Math.round((processWidth / slider.offsetWidth) * 100);
    if (0 <= percent && percent <= 100) {
      process.style.width = percent + "%";
      process.innerText = percent + "%";
      blurBackground.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
    }
  }
});
