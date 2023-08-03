const imgList = document.querySelectorAll("ul li");
const prevButton = document.querySelector(".bx-left-arrow-alt");
const nextButton = document.querySelector(".bx-right-arrow-alt");
const mainImg = document.querySelector(".slide-show img");

//default
let lastImg = document.querySelector("ul li");
let prev = 0;
mainImg.setAttribute("src", "./images/danang.png");

//update UI with new element passed;
function updateUI(index) {
  lastImg.classList.remove("highlight"); //remove highlight of prev img
  imgList[index].classList.add("highlight"); //add highlight to curr img
  mainImg.src = imgList[index].querySelector("img").src; //set main img src to src curr img src
  lastImg = imgList[index]; //set last img to current img
}

function slideTransition(newIndex, prevIndex) {
  //side left when new image's index > current img's index
  if (newIndex > prevIndex) {
    mainImg.style.animation = "slideLeftOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideLeftIn 0.2s forwards";
    }, 200);
  }
  //side right when new image's index < current img's index
  else if (newIndex < prevIndex) {
    mainImg.style.animation = "slideRightOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideRightIn 0.2s forwards";
    }, 200);
  }
  prev = newIndex;
}

imgList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    slideTransition(index, prev);
  });
});

prevButton.addEventListener("click", () => {
  if (prev - 1 < 0) {
    slideTransition(imgList.length - 1, 0);
  } else {
    slideTransition(prev - 1, prev);
  }
});

nextButton.addEventListener("click", () => {
  if (prev + 1 > imgList.length - 1) {
    slideTransition(0, imgList.length - 1);
  } else {
    slideTransition(prev + 1, prev);
  }
});
