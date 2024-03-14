document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
});
