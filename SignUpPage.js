document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('SignUpForm');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form inputs
        const nameInput = document.getElementById('name');
        const usernameInput = document.getElementById('username');
        const emailPhoneInput = document.getElementById('Email');
        const passwordInput = document.getElementById('Enterpassword');
        const confirmPasswordInput = document.getElementById('Confirmpassword');

        // Validate inputs
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!usernameInput.value.trim()) {
            alert('Please enter a username.');
            return;
        }

        if (!containsNumberOrSpecialChar(usernameInput.value.trim())) {
            alert('Username must contain at least one number or special character like "_".');
            return;
        }

        if (!emailPhoneInput.value.trim()) {
            alert('Please enter your email or phone number.');
            return;
        }

        if (!isValidEmail(emailPhoneInput.value.trim()) && !isValidPhoneNumber(emailPhoneInput.value.trim())) {
            alert('Please enter a valid email or phone number.');
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

        if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            alert('Passwords do not match.');
            return;
        }

        // Redirect to TodayPage.html after successful form submission
        window.location.href = 'TodayPage.html';
    });

    function containsNumberOrSpecialChar(str) {
        // Regular expression to check if string contains at least one number or special character
        const regex = /[0-9_]/;
        return regex.test(str);
    }

    function isValidEmail(email) {
        // Regular expression for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        // Regular expression for validating phone number (exactly 10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    }
});

