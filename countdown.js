const targetDate = new Date(2024, 6, 13); 

// Function to update the countdown timer
function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the target date and the current date
    const difference = targetDate - currentDate;

    // Calculate the number of days remaining
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Display the countdown in the HTML element
    document.getElementById('countdown').innerHTML = `${days} DAYS TO GO!`;
}

// Call the updateCountdown function initially to display the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);