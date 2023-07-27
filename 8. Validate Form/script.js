const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");

const submitButton = document.querySelector(".submit-button");

//validation, change body's backgroundImage when user success and fail
function validateForm() {
  let validUsername = isValidUsername(usernameInput);
  let validEmail = isValidEmail(emailInput);
  let validPassword = isValidPassword(passwordInput, confirmPasswordInput);

  if (validEmail && validPassword && validUsername) {
    document.querySelector("body").classList.add("success");
  } else {
    document.querySelector("body").classList.add("fail");
  }
  setTimeout(() => {
    document
      .querySelector("body")
      .classList.remove(document.querySelector("body").classList)[
      document.querySelector("body").classList.length - 1
    ];
  }, 2000);
}

//check if username input empty
function isValidUsername(usernameInput) {
  let username = usernameInput.value.trim();
  if (username === "") {
    showError(usernameInput, "Username is required.");
    return false;
  }
  if (username.length > 15) {
    showError(usernameInput, "Username must be between 5 and 15 characters.");
    return false;
  }

  if (username.length < 5) {
    showError(usernameInput, "Username must be between 5 and 15 characters.");
    return false;
  }
  return true;
}

//check if email input is empty and email is valid using regEx
function isValidEmail(emailInput) {
  let email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regEx
  if (email === "") {
    showError(emailInput, "Email is required.");
    return false;
  }
  if (!emailRegex.test(email)) {
    showError(emailInput, "Invalid email.");
    return false;
  }
  return true;
}

//check if password input is empty and 2 password match
function isValidPassword(passwordInput, password2Input) {
  let isValid = true;
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required.");
    isValid = false;
  }
  if (password2Input.value.trim() === "") {
    showError(password2Input, "Password is required.");
    isValid = false;
  }

  if (isValid && passwordInput.value.trim() != password2Input.value.trim()) {
    showError(passwordInput, "Password does not match.");
    showError(password2Input, "Password does not match.");
    isValid = false;
  }
  return isValid;
}

function showError(element, message) {
  let parent = element.parentElement;
  let errorMessage = parent.querySelector("small");
  errorMessage.innerText = message;
}

//show password when user clicks click show password icon
function showPassword() {
  passwordInput.setAttribute("type", "text");
  confirmPasswordInput.setAttribute("type", "text");
  setTimeout(() => {
    passwordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("type", "password");
  }, 1000);
}

//start validation when user presses submit
submitButton.addEventListener("click", () => {
  validateForm();
});

//remove error message when user types new input
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    input.parentElement.querySelector("small").innerText = "";
  });
});
