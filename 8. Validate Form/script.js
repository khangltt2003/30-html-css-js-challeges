const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const confirmPasswordInput = document.querySelector(".confirm-password");

const submitButton = document.querySelector(".submit-button");

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.length > 1) {
      input.parentElement.classList.remove(input.parentElement.classList[1]);
    }
  });
});

submitButton.addEventListener("click", () => {
  validateForm();
});

function isValidUsername(username) {
  if (username === "") {
    usernameInput.parentElement.classList.add("empty-input");
    return false;
  }
  return true;
}

function isValidEmail(email) {
  let valid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailInput.parentElement.classList.add("empty-input");
    valid = false;
  } else {
    if (!emailRegex.test(email)) {
      emailInput.parentElement.classList.add("invalid-email");
      valid = false;
    }
  }
  return valid;
}

function isValidPassword(password, password2) {
  let valid = true;
  if (password === "") {
    passwordInput.parentElement.classList.add("empty-input");
    valid = false;
  }
  if (password2 === "") {
    confirmPasswordInput.parentElement.classList.add("empty-input");
    valid = false;
  }

  if (valid && password != password2) {
    passwordInput.parentElement.classList.add("no-match");
    confirmPasswordInput.parentElement.classList.add("no-match");
    valid = false;
  }
  return valid;
}

function validateForm() {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const password2 = confirmPasswordInput.value.trim();

  let validUsername = isValidUsername(username);
  let validEmail = isValidEmail(email);
  let validPassword = isValidPassword(password, password2);

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

function showPassword() {
  passwordInput.setAttribute("type", "text");
  confirmPasswordInput.setAttribute("type", "text");
  setTimeout(() => {
    passwordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("type", "password");
  }, 1000);
}
