let countDownForm = document.getElementById("countdown-form") // Target the countdown form element
let countDownInput = document.getElementById("countdown-input") // Target the countdown text field above
let countDownDisplay = document.getElementById("countdown-display") // Target the countdown display field below the countdown form

countDownForm.addEventListener("submit", countDownFormSubmitHandler) // Listen for the submit event for the countDownForm element and call the countDownFormSubmitHandler function

function countDownFormSubmitHandler(event) { // Start the function definition
    event.preventDefault() // Prevent the default form submit behaviour
    displayCountDown() // Call the function to display the countdown
} // End the function definition

async function displayCountDown() { // Start the function definition
    if (countDownInput.value === "") { // Check if the value entered is empty. if so, shows an error and return.
        alert("Please enter the countdown value.")
        return
    }
    if (countDownInput.value !== "" && Math.round(countDownInput.value) > 1) { // Check if the value entered is not empty and is > 1. There is no meaning to start countdown for the value of 1.
        let countDownValue = countDownInput.value
        while (countDownValue > -1) { // Run a loop while a countDownValue is > -1
            countDownDisplay.innerHTML = countDownValue // Display the countdown value
            countDownValue = await startCountdown(countDownValue) // Call the startCountDown function which finally start the countdown.
        }
    } else {
        alert("Please enter the numeric value to start the countdown or the value entered must be > 1.") // Show the error if countdown value is not numeric or is < 1
    }
} // End the function definition

function startCountdown(countDownValue) { // Start the function definition
    return new Promise(async (resolve, reject) => {// Return a new Promis.Ignore as we have not learned that.
        await setTimeout(() => {
            countDownValue--
            resolve(countDownValue)
        }, 1000) // Update the countdown value in decrements
    })
} // End the function definition