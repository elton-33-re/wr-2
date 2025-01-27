// Array of romantic messages
const messages = [
    "You are my everything.",
    "I love you more than words can express.",
    "You complete me in every way.",
    "Together, we are unstoppable.",
    "You make my heart skip a beat."
];

// Function to change message when the button is clicked
function changeMessage() {
    // Get a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Change the message on the page
    const messageElement = document.querySelector('.message');
    messageElement.textContent = randomMessage;
}