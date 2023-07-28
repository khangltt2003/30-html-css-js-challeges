const input = document.querySelector(".input-todo");
const addButton = document.querySelector(".add-item");

let currentID = 0;
let todos = [];
if (JSON.parse(localStorage.getItem("todos")).length !== 0) {
  todos = JSON.parse(localStorage.getItem("todos"));
  currentID = todos[todos.length - 1]._id;
  render();
} else {
  currentID = 0;
}

function render() {
  items = "";
  todos.map((todo) => {
    items += `<li>
      <label>
        <input type="checkbox" />
        <span>${todo.title}</span>
      </label>
      <i class="bx bx-trash" onClick="deleteItem(${todo._id})"></i>
    </li>`;
  });
  document.querySelector(".list").innerHTML = items;
  input.focus();
  input.value = "";
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addItem() {
  todos.push({ title: input.value, completed: false, _id: (currentID += 1) });
  updateLocalStorage();
  render();
}

function deleteItem(id) {
  todos = todos.filter((todo) => todo._id !== id);
  updateLocalStorage();
  render();
}

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    addItem();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    addItem();
  }
});
