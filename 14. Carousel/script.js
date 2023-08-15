const imgList = document.querySelectorAll("ul li");
const prevButton = document.querySelector(".bx-left-arrow-alt");
const nextButton = document.querySelector(".bx-right-arrow-alt");
const mainImg = document.querySelector(".slide-show img");

//default
let currentIndex = 0;
let lastImg = imgList[0];
mainImg.src = lastImg.querySelector("img").src;

//update UI with new element passed;
function updateUI(index) {
  console.log(index);
  lastImg.classList.remove("highlight"); //remove highlight of prev img
  imgList[index].classList.add("highlight"); //add highlight to curr img
  mainImg.src = imgList[index].querySelector("img").src; //set main img src to src curr img src
  lastImg = imgList[index]; //set last img to current img
}

function slideTransition(newIndex, prevIndex) {
  //slide left when new image's index > current img's index
  if (newIndex > prevIndex) {
    mainImg.style.animation = "slideLeftOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideLeftIn 0.2s forwards";
    }, 200);
  }
  //slide right when new image's index < current img's index
  else if (newIndex < prevIndex) {
    mainImg.style.animation = "slideRightOut 0.2s forwards";
    setTimeout(() => {
      updateUI(newIndex);
      mainImg.style.animation = "slideRightIn 0.2s forwards";
    }, 200);
  }
  currentIndex = newIndex; //set current to index
}

imgList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    slideTransition(index, currentIndex);
  });
});

// prevButton.addEventListener("click", () => {
//   //if new index is less than 0, set newIndex = 7
//   if (currentIndex - 1 < 0) {
//     slideTransition(imgList.length - 1, currentIndex);
//   } else {
//     slideTransition(currentIndex - 1, currentIndex);
//   }
// });

// nextButton.addEventListener("click", () => {
//   //if new index is larger than bound, set newIndex = 0
//   if (currentIndex + 1 > imgList.length - 1) {
//     slideTransition(0, currentIndex);
//   } else {
//     slideTransition(currentIndex + 1, currentIndex);
//   }
// });

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }
  updateUI(currentIndex);
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 1 > imgList.length - 1) {
    currentIndex = -1;
  }
  updateUI(++currentIndex);
});
