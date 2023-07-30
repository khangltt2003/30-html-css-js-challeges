const successButton = document.querySelector(".success-button");
const warningButton = document.querySelector(".warning-button");
const errorButton = document.querySelector(".error-button");
const messageBox = document.querySelector(".message");
const messageList = document.querySelector(".message-list");

function showMessage(message, type) {
  var messageElement = document.createElement(`div`);
  messageElement.classList.add(type);
  messageElement.innerHTML = message;
  messageList.prepend(messageElement); //prepend - add an element before the first element
  setTimeout(() => {
    messageList.removeChild(messageElement);
  }, 7000);
}

successButton.addEventListener("click", () => {
  showMessage("Success Message !!!", "success");
});

warningButton.addEventListener("click", () => {
  showMessage("Warning Message !!!", "warning");
});

errorButton.addEventListener("click", () => {
  showMessage("Error Message !!!", "error");
});
