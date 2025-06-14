document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const messages = [];
    //validate username
    const username = document.getElementById("username").value.trim();
    if (username.length < 3) {
      isValid = false;
      messages.push("Username is too short");
    }

    //validate email
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      isValid = false;
      messages.push("Enter a valid email address");
    }

    //validate password
    const password = document.getElementById("password").value.trim(); 
    if (password.length < 8) {
      isValid = false;
      messages.push("Password length is too short");
    }
    //Feedback logic
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
