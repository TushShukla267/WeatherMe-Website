document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form inputs
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        if (!usernameInput.value.trim()) {
            alert('Please enter a username.');
            return;
        }

        if (!passwordInput.value.trim()) {
            alert('Please enter a password.');
            return;
        }

        if (passwordInput.value.trim().length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (!containsNumberOrSpecialChar(usernameInput.value.trim())) {
            alert('Username must contain at least one number or special character like "_".');
            return;
        }

        // Redirect to TodayPage.html after successful form submission
        window.location.href = 'TodayPage.html';
    });

    function containsNumberOrSpecialChar(username) {
        return /[0-9_]/.test(username);
    }
});