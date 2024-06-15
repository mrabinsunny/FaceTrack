document.getElementById("s6cseaButton").addEventListener("click", function() {
    document.getElementById("s6cseaButton").classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "facetrack.html";
    }, 800); // Redirect after 0.5s (500ms) fade-out effect
});
