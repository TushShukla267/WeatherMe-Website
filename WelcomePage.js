// Function to animate text one by one
function animateText(element, text) {
    var index = 0;
    var timer = setInterval(function() {
        // Append the next letter to the element
        element.innerHTML += text.charAt(index);
        index++;
        // Stop the animation when all letters are appended
        if (index === text.length) {
            clearInterval(timer);
            // If this is the first text element, call animateText for the second text element after a delay
            if (element.classList.contains('text')) {
                setTimeout(function() {
                    var textElement2 = document.querySelector('.text1');
                    animateText(textElement2, 'WeatherME .!');
                }, 50); // Adjust the delay before animating the second text (in milliseconds)
            }
        }
    }, 100); // Adjust the delay (in milliseconds) between letters
}

// Call the animateText function for the first text element
var textElement1 = document.querySelector('.text');
animateText(textElement1, 'Welcome Back To');
