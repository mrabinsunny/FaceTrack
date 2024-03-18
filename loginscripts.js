// Define the correct username and password
const correctUsername = "admin";
const correctPassword = "1234";

// Function to validate the entered username and password
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        document.body.classList.add("fade-out");
        setTimeout(function() {
            window.location.href = "welcome.html";
        }, 800);
    } else {
        alert("Incorrect Username/Password");
    }
}

function redirectToAbout() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "about.html";
    }, 800);
}




