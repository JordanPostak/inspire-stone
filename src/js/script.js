// this is the initial javascript

import { flipCover, flipLogin, flipRegistration } from "./bookAnimations.js";
import { fadeIn } from "./stoneAnimations.js";

// Initialize session storage
function initializeSessionStorage() {
  const username = sessionStorage.getItem('username');
  const userId = sessionStorage.getItem('userId');
  const loggedIn = sessionStorage.getItem('loggedIn');

  if (!username) {
    sessionStorage.setItem('username', '');
  }

  if (!userId) {
    sessionStorage.setItem('userId', '');
  }

  if (loggedIn !== 'true' && loggedIn !== 'false') {
    sessionStorage.setItem('loggedIn', 'false');
  }
}

document.addEventListener("DOMContentLoaded", function () {
    // Initialize session storage
    initializeSessionStorage();

    const beginButton = document.getElementById("begin");
    const smallButton = document.querySelector(".smallbutton");
    const backButton = document.querySelector(".backbutton");
    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {
        fadeIn(welcomeText); // Fade in welcome text element on page load
    }
  
    if (beginButton) {
      // Attach a click event listener to the Begin button
      beginButton.addEventListener("pointerdown", flipCover);
    }
  
    if (smallButton) {
      // Attach a click event listener to the small button
      smallButton.addEventListener("pointerdown", flipLogin);
    }
  
    if (backButton) {
      // Attach a click event listener to the Register button
      backButton.addEventListener("pointerdown", flipRegistration);
    }
});