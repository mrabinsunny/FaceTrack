function redirectToAbout() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "about.html";
    }, 800);
}