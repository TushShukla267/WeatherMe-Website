// Set the initial value of the search box to the value of the city variable
let city = "Mumbai";

// Function to handle getting the weather data
function getWeather(city) {
    // Update the city name displayed
    document.getElementById("City").innerHTML = city;
    
    // Make AJAX request to fetch weather data
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'sK85UvTSuRNuxT4piMGbsA==0zlA5GCtc4FUkOiz' },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
    
            // Update temperature element
            let temp = result.temp;
            console.log('Temperature:', temp);
            document.getElementById("temp").innerHTML = temp + "°C";
    
            // Update humidity element
            let humidity = result.humidity;
            console.log('Humidity:', humidity);
            document.getElementById("humidity").innerHTML = "Humidity <br>" + humidity + "%";
    
            // Update feels like element
            let feelslike = result.feels_like;
            console.log('Feels Like:', feelslike);
            document.getElementById("feelslike").innerHTML = "Feels like <br>" + feelslike + "°C";
            
            // Update max and min temperature element
            let maxTemp = result.max_temp;
            let minTemp = result.min_temp;
            console.log('Max Temperature:', maxTemp);
            console.log('Min Temperature:', minTemp)
            document.getElementById("MaxMinTemp").innerHTML = "Max Temp and Min Temp <br>" + minTemp + "°C - " + maxTemp + "°C";
    
            // Update windspeed element
            let windspeed = result.wind_speed;
            console.log('Wind Speed:', windspeed);
            document.getElementById("windspeed").innerHTML = "Wind <br>" + windspeed + "mph";
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Event listener for "keypress" event on the search input
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    // Checking if the "Enter" key (key code 13) is pressed
    if (event.key === "Enter") {
        // Preventing the default behavior of the "Enter" key (submitting form)
        event.preventDefault();
        // Calling the function to get weather data for the entered city
        var city = document.getElementById("searchInput").value;
        getWeather(city);
    }
});

// Initial call to get weather data for the default city
getWeather(city);

// Function to get the formatted date
function getFormattedDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const formattedDate = `${month} ${day}, ${dayOfWeek}`;
    return formattedDate;
}

// Function to get the current time in 12-hour format
function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be treated as 12
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes is less than 10
    const currentTime = hours + ':' + minutes + ' ' + ampm;
    return currentTime;
}

// Update the date and time elements
document.getElementById("date").innerHTML = getFormattedDate();
document.getElementById("time").innerHTML = getCurrentTime();

// Autocomplete functionality
const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Surat", "Tokyo", "London", "Lucknow"];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const suggestionsList = document.getElementById("suggestionsList");

searchInput.addEventListener("input", function() {
    const input = this.value.toLowerCase();
    const suggestions = cities.filter(city => city.toLowerCase().startsWith(input));
    displaySuggestions(suggestions);
});

function displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
        searchResults.style.display = "none";
        return;
    }

    suggestionsList.innerHTML = "";
    suggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", function() {
            searchInput.value = suggestion;
            searchResults.style.display = "none";
        });
        suggestionsList.appendChild(li);
    });

    searchResults.style.display = "block";
}

// Hide the suggestions when clicking outside the input and suggestions list
document.addEventListener("click", function(event) {
    if (event.target !== searchInput && event.target !== suggestionsList) {
        searchResults.style.display = "none";
    }
});






// // Function to get the time zone offset for a given city
// function getTimeZoneOffset(city) {
//     const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
//     const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${city}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`;

//     return fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => data.rawOffset + data.dstOffset);
// }

// // Function to get the current time in a given city
// async function getCurrentTime(city) {
//     const timeZoneOffset = await getTimeZoneOffset(city);
//     const currentDate = new Date();
//     const currentTimeMillis = currentDate.getTime() + timeZoneOffset * 1000;
//     const currentTime = new Date(currentTimeMillis);

//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // 0 should be treated as 12
//     minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes is less than 10
//     const formattedTime = hours + ':' + minutes + ' ' + ampm;

//     return formattedTime;
// }

// // Function to get the formatted date in a given city
// async function getFormattedDate(city) {
//     const timeZoneOffset = await getTimeZoneOffset(city);
//     const currentDate = new Date();
//     const currentTimeMillis = currentDate.getTime() + timeZoneOffset * 1000;
//     const currentTime = new Date(currentTimeMillis);

//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     const month = months[currentTime.getMonth()];
//     const day = currentTime.getDate();
//     const dayOfWeek = daysOfWeek[currentTime.getDay()];

//     const formattedDate = `${month} ${day}, ${dayOfWeek}`;

//     return formattedDate;
// }

// // Function to update the date and time elements
// async function updateDateTime(city) {
//     const formattedDate = await getFormattedDate(city);
//     const formattedTime = await getCurrentTime(city);

//     document.getElementById("date").innerHTML = formattedDate;
//     document.getElementById("time").innerHTML = formattedTime;
// }

// // Update the date and time elements when a new city is searched
// document.getElementById("searchInput").addEventListener("keypress", async function(event) {
//     // Checking if the "Enter" key (key code 13) is pressed
//     if (event.key === "Enter") {
//         // Preventing the default behavior of the "Enter" key (submitting form)
//         event.preventDefault();
//         // Getting the value of the searched city
//         const city = document.getElementById("searchInput").value;
//         // Calling the function to update date and time for the entered city
//         await updateDateTime(city);
//     }
// });
