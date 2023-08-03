const imgList = document.querySelectorAll("ul li");
const prevButton = document.querySelector(".bx-left-arrow-alt");
const nextButton = document.querySelector(".bx-right-arrow-alt");
const mainImg = document.querySelector(".slide-show img");

//default
let lastImg = document.querySelector("ul li");
let currentIndex = 0;
mainImg.setAttribute("src", "./images/danang.png");

//update UI with new element passed;
function updateUI(index) {
  lastImg.classList.remove("highlight"); //remove highlight of prev img
  imgList[index].classList.add("highlight"); //add highlight to curr img
  mainImg.src = imgList[index].querySelector("img").src; //set main img src to src curr img src
  lastImg = imgList[index]; //set last img to current img
}

function slideTransition(newIndex, currentIndex) {
  //side left when new image's index > current img's index
  if (newIndex > currentIndex) {
    mainImg.style.animation = "slideLeftOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideLeftIn 0.2s forwards";
    }, 200);
  }
  //side right when new image's index < current img's index
  else if (newIndex < currentIndex) {
    mainImg.style.animation = "slideRightOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideRightIn 0.2s forwards";
    }, 200);
  }
}

imgList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    slideTransition(index, currentIndex);
    currentIndex = index; //assign current index with index
  });
});

prevButton.addEventListener("click", () => {
  if (currentIndex < 0) currentIndex = imgList.length - 1;
  slideTransition(currentIndex--, currentIndex);
});

nextButton.addEventListener("click", () => {
  if (currentIndex > imgList.length - 1) currentIndex = 0;
  slideTransition(currentIndex++, currentIndex);
});
