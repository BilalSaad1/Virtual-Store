function attemptLogin() {
    var enteredUsername = document.getElementById("loginUsername").value;
    var enteredPassword = document.getElementById("loginPassword").value;

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful! Redirecting to index.html.');

        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
