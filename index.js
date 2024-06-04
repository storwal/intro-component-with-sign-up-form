document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
  function validateForm() {
    var nameInput = document.getElementById("name");
    var lastnameInput = document.getElementById("lastname");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    if (nameInput.value === "") {
      document.getElementById("error-name").style.display = "block";
      document.getElementById("danger-button-name").style.display =
        "inline-block";
    } else {
      document.getElementById("error-name").style.display = "none";
      document.getElementById("danger-button-name").style.display = "none";
    }
    if (lastnameInput.value === "") {
      document.getElementById("error-lastname").style.display = "block";
      document.getElementById("danger-button-lastname").style.display =
        "inline-block";
    } else {
      document.getElementById("error-lastname").style.display = "none";
      document.getElementById("danger-button-lastname").style.display = "none";
    }
    if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
      document.getElementById("error-email").style.display = "block";
      document.getElementById("danger-button-email").style.display =
        "inline-block";
    } else {
      document.getElementById("error-email").style.display = "none";
      document.getElementById("danger-button-email").style.display = "none";
    }
    if (passwordInput.value === "") {
      document.getElementById("error-password").style.display = "block";
      document.getElementById("danger-button-password").style.display =
        "inline-block";
    } else {
      document.getElementById("error-password").style.display = "none";
      document.getElementById("danger-button-password").style.display = "none";
    }
  }
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});