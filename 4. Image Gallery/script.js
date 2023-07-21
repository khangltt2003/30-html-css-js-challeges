const images = document.querySelectorAll("img");
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const galleryImage = document.querySelector(".gallery-img img")

const imgArr = ['dalat', 'danang', 'hagiang', 'halongbay', 'hoian', 'ninhbinh', 'phongnha', 'sapa']

let currentIndex = 0;

function toggleGallery(imageName){
    let imageSource = "/4. Image Gallery/public/images/" + imageName + ".png"
    galleryImage.setAttribute('src', imageSource)
    document.querySelector('.gallery').classList.toggle('hidden');
}

function renderImage(index){
    let imageSource = "/4. Image Gallery/public/images/" + imgArr[index] + ".png"
    galleryImage.setAttribute('src', imageSource)
}

images.forEach((image)=>{
    image.addEventListener('click', (e)=>{
        toggleGallery(e.target.classList[0]);
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
    console.log(currentIndex);
    renderImage(currentIndex);
})