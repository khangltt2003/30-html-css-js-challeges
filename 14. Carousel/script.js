const imgList = document.querySelectorAll("ul li");
const prevButton = document.querySelector(".bx-left-arrow-alt");
const nextButton = document.querySelector(".bx-right-arrow-alt");
const mainImg = document.querySelector(".slide-show img");

//default
let lastImg = document.querySelector("ul li");
let currentIndex = 0;
mainImg.setAttribute("src", "./images/danang.png");

//change main img
function changeMainImg(src) {
  mainImg.src = src;
}

//highlight focused img and unhighlight previous img
function highlightImg(newImg) {
  lastImg.classList.remove("highlight");
  newImg.classList.add("highlight");
  lastImg = newImg;
}

imgList.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    changeMainImg(e.target.src);
    highlightImg(li);
    currentIndex = index;
  });
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = 5;
  changeMainImg(imgList[currentIndex].querySelector("img").src);
  highlightImg(imgList[currentIndex]);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > 5) currentIndex = 0;
  changeMainImg(imgList[currentIndex].querySelector("img").src);
  highlightImg(imgList[currentIndex]);
});
