const images = document.querySelectorAll(".image img");
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const galleryImage = document.querySelector(".gallery-img img")
const gallery = document.querySelector('.gallery');
const closeButton = document.querySelector(".closeButton");
const imgArr = ['dalat', 'danang', 'hagiang', 'halongbay','ninhbinh', 'sapa','phongnha', 'hoian']

let currentIndex = 0;

function toggleGallery(){
    gallery.classList.toggle('show');
}

function renderImage(index){
    let imageSource = "/4. Image Gallery/public/images/" + imgArr[index] + ".png"
    galleryImage.setAttribute('src', imageSource)
}

images.forEach((image, index)=>{
    image.addEventListener('click', (e)=>{
        console.log(index)
        currentIndex = index
        renderImage(currentIndex);
        toggleGallery();
    })
})

previousButton.addEventListener('click', ()=>{
    currentIndex -= 1;
    if(currentIndex < 0){
        currentIndex = 7;
    }
    renderImage(currentIndex);
})

nextButton.addEventListener('click', ()=>{
    currentIndex += 1;
    if(currentIndex > 7){
        currentIndex = 0;
    }
    renderImage(currentIndex);
})

closeButton.addEventListener("click", toggleGallery);

document.querySelector("body").addEventListener('keydown',(e)=>{
    if(e.key === "Escape" && gallery.classList.contains("show")){
        toggleGallery()
    }
})