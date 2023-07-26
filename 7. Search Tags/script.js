const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const removeAllButton = document.querySelector(".remove-button");
const list = document.querySelector("ul");

let listArray = [];

function renderList() {
  let items = "";
  for (let i = 0; i < listArray.length; i++) {
    let tag = "";
    if (listArray[i].length > 7) {
      tag = listArray[i].substring(0, 5) + "...";
    } else {
      tag = listArray[i];
    }
    items += `<li class="tag">${tag} <i class="bx bx-x" onClick="removeTag(${i})" ></i></li>`;
  }
  list.innerHTML = items;
}

function removeTag(index) {
  listArray.splice(index, 1);
  renderList();
}

function addTag() {
  if (input.value.trim() !== "") {
    listArray.push(input.value.trim());
    renderList();
  }
  input.value = "";
  input.focus();
}

removeAllButton.addEventListener("click", () => {
  listArray = [];
  renderList();
});

addButton.addEventListener("click", () => {
  addTag();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTag();
  }
});
