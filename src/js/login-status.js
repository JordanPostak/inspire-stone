// This is the src/js/login-status.js file

import { updateWelcomeMessage, fadeIn } from "./stoneAnimations.js";
import { changeCoverText } from "./bookAnimations.js";

// Function to check login status on page load and update the welcome message
function checkLoginStatus() {
  const loggedIn = sessionStorage.getItem('loggedIn');
  
  if (loggedIn === 'true') {
    setTimeout(() => {
      updateWelcomeMessage();
      setTimeout(() => fadeIn(logoutButton), 4000);
      changeCoverText();
    }, 500); // Adjust delay time as needed (500 milliseconds in this example)
  }
}

// Run the checkLoginStatus function on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);