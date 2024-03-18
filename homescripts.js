document.getElementById("loginButton").addEventListener("click", function() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "login.html";
    }, 800); // Adjust the time (in milliseconds) for the fade-out effect
});

function redirectToAbout() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "about.html";
    }, 800);
}

