document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('SignUpForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Authenticate user here, for example:
        let username = document.querySelector('.Username-container').value;
        let EmailPhoneNumber = document.querySelector('.Email-PhoneNumber-container').value;
        let Enterpassword = document.querySelector('.Enter-password-container').value;
        let Confirmpassword = document.querySelector('.Confirm-password-container').value;

        // Dummy authentication for demonstration purposes
        if (username == "Tushar J Shukla" && Enterpassword == Confirmpassword && Confirmpassword == "Tushar") {
            // Redirect to TodayPage.html upon successful login
            window.location.href = "TodayPage.html";
        } else {
            alert("Invalid username or password. Please try again.");
            alert("Details entered by you" + "  " + "username:-" + username + "  " + "Email/PhoneNumbe:-" + EmailPhoneNumber + "  " + "Enterpassword:-" + Enterpassword + "  " + "Confirmpassword:-" +  Confirmpassword + "  " + "Kindly check and try agian");
        }
    });
});