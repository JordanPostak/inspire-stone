// This is the src/js/login-status.js file

// Import necessary animations or functions
import { fadeIn, fadeOut } from "./stoneAnimations.js";

// Function to update the welcome message
export function updateWelcomeMessage() {
  const username = sessionStorage.getItem('username');
  if (username) {
    const welcomeMessage = document.getElementById('welcomeText');
    if (welcomeMessage) {
      fadeOut(welcomeMessage);
      setTimeout(() => {
        welcomeMessage.textContent = `Welcome`;
        fadeIn(welcomeMessage);
      }, 1000);
      setTimeout(() => {
        fadeOut(welcomeMessage);
      }, 2000);
      setTimeout(() => {
        welcomeMessage.textContent = `${username}`;
        fadeIn(welcomeMessage);
      }, 3000);
    }
  }
}

// Function to update cover text
function changeCoverText() {
  const beginButton = document.getElementById('begin');
  if (beginButton) {
    beginButton.style.display = 'none';
  }
  const coverText = document.getElementById('coverText');
  const username = sessionStorage.getItem('username');
  if (coverText && username) {
    coverText.textContent = `${username}'s Inspirations`;
  }
}

// Function to check login status on page load and update the welcome message
function checkLoginStatus() {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn === 'true') {
    updateWelcomeMessage();
    changeCoverText();
  }
}

// Run the checkLoginStatus function on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);

// Listen for changes to session storage
window.addEventListener('storage', (event) => {
  if (event.key === 'loggedIn' && event.newValue === 'true') {
    updateWelcomeMessage();
    changeCoverText();
  }
});