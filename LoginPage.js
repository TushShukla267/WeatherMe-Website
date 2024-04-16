document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Authenticate user here, for example:
        let username = document.querySelector('.Username-container').value;
        let password = document.querySelector('.password-container').value;

        // Dummy authentication for demonstration purposes
        if (username == "Tushar J Shukla" && password == "Tushar") {
            // Redirect to TodayPage.html upon successful login
            window.location.href = "TodayPage.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

    // document.getElementById('registrationForm').addEventListener('submit', function(event) {
    //     event.preventDefault();

    //     alert("Are you sure you want to submit the form?");

    //     let accountNumber = document.getElementById('accountNumber').value;
    //     let username = document.getElementById('username').value;
    //     let accountType = document.getElementById('accountType').value;
    //     let password = document.getElementById('password').value;
    //     let confirmPassword = document.getElementById('confirmPassword').value;

    //     console.log('Account Number:', accountNumber);
    //     console.log('Username:', username);
    //     console.log('Account Type:', accountType);

    //     if (password !== confirmPassword) {
    //         alert("Passwords do not match. Please check and try again.");
    //     } else {
    //         console.log('Password:', password);
    //         console.log('Confirm Password:', confirmPassword);
    //         // Here you can send the form data to the server for further processing
    //         // For demonstration, I'm just logging the data
    //     }
    // });