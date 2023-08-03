const input = document.querySelector("input");
const container = document.querySelector(".container");
input.addEventListener("change", () => {
  var newImg = input.files[0];
  var uploadImageURL = URL.createObjectURL(newImg);
  container.innerHTML += `<img src="${uploadImageURL}" alt="">`;
  // if (!newImg.name.endsWith("png")) return;
  // console.log(newImg);
  // var img = document.createElement("img");
  // img.src = uploadImageURL;
  // container.appendChild(img);
});
