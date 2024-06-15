document.addEventListener('DOMContentLoaded', function() {
    var manualAttendanceContainer = document.querySelector('.container2');
    manualAttendanceContainer.addEventListener('click', function() {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1dQ7LcJ2gE5Xat8ks9jhX56GqBKzAZPKq-YgkUg0LjP0/edit?usp=sharing'; // Change 'https://example.com' to your desired URL
    });
});


const SERVER_URL = 'http://localhost:5000'; // the URL of the face recognition server
const SERVER_ROUTE = ''; // the route to the face recognition server, e.g. '/face-recognition
const faceRecognition = document.getElementById('btn-face-recognition');

faceRecognition.addEventListener('click', () => {
    window.location.href = SERVER_URL + SERVER_ROUTE;
});

