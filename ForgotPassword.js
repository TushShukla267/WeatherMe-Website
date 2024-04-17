document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ForgotPassword-Form').addEventListener('submit', function(event) {
        event.preventDefault();

        let Email = document.getElementById("emailInput").value;
        let character = 0;

        for (let i = 0; i < Email.length; i++) {
            if (Email.charAt(i) == '@') {
                character = 1;
                break; // Exiting the loop once '@' is found
            }
        }

        if (Email == "" || character == 0) { // Fixed condition for checking empty email or missing '@'
            alert("Enter a valid email. Example: abc@gmail.com");
        } else {
            let pass = '';
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';

            for (let i = 1; i <= 8; i++) {
                let char = Math.floor(Math.random() * str.length);
                pass += str.charAt(char);
            }

            alert("Your new Password for " + Email + " is: " + pass);
        }
    });
});
