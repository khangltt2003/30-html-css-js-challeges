const imgList = document.querySelectorAll("ul li");
const prevButton = document.querySelector(".bx-left-arrow-alt");
const nextButton = document.querySelector(".bx-right-arrow-alt");
const mainImg = document.querySelector(".slide-show img");

//default
let lastImg = document.querySelector("ul li");
let currentIndex = 0;
mainImg.setAttribute("src", "./images/danang.png");

//update UI with new element passed;
function updateUI(newImg) {
  lastImg.classList.remove("highlight"); //remove highlight of prev img
  newImg.classList.add("highlight"); //add highlight to curr img
  mainImg.src = newImg.querySelector("img").src; //set main img src to src curr img src
  lastImg = newImg; //set last img to current img
}

imgList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    updateUI(img);
    currentIndex = index; //assign current index with index
  });
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = imgList.length - 1;
  mainImg.style.animation = "slideLeftOut 0.2s forwards";
  setTimeout(() => {
    updateUI(imgList[currentIndex]);
    mainImg.style.animation = "slideLeftIn 0.2s forwards";
  }, 200);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > imgList.length - 1) currentIndex = 0;
  mainImg.style.animation = "slideRightOut 0.2s forwards";
  setTimeout(() => {
    updateUI(imgList[currentIndex]);
    mainImg.style.animation = "slideRightIn 0.2s forwards";
  }, 200);
});
