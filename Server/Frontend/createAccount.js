function confirmSelection() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'login.html';
}

