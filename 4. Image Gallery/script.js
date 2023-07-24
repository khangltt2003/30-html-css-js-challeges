const images = document.querySelectorAll(".image img");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const galleryImage = document.querySelector(".gallery-img img");
const gallery = document.querySelector(".gallery");
const closeButton = document.querySelector(".closeButton");
const imgArr = [
  "dalat",
  "danang",
  "hagiang",
  "halongbay",
  "ninhbinh",
  "sapa",
  "phongnha",
  "hoian",
];

let currentIndex = 0;

function toggleGallery() {
  gallery.classList.toggle("show");
}

function renderImage(index) {
  let imageSource = "/4. Image Gallery/public/images/" + imgArr[index] + ".png";
  galleryImage.setAttribute("src", imageSource);
}

function nextImage() {
  currentIndex += 1;
  if (currentIndex > imgArr.length - 1) {
    currentIndex = 0;
  }
  renderImage(currentIndex);
}

function previousImage() {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  renderImage(currentIndex);
}

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    renderImage(currentIndex);
    toggleGallery();
  });
});

previousButton.addEventListener("click", () => {
  previousImage();
});

nextButton.addEventListener("click", () => {
  nextImage();
});

closeButton.addEventListener("click", toggleGallery);

document.querySelector("body").addEventListener("keydown", (e) => {
  if (gallery.classList.contains("show")) {
    if (e.key === "Escape") {
      toggleGallery();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  }
});
