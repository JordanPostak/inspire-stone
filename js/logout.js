// Import any necessary functions or modules
import { fadeIn, fadeOut } from "./stoneAnimations.js";
import { zoomBookOut, changeCoverText, flipRegistration, closeCover, flipBackFromUserPage, resetPages } from "./bookAnimations.js";
import { dipinink, animateFeatherWriting, moveFeathertoNextLine, laydownfeather, showPaperMessage } from "./writingAnimations.js";
import { disableFeatherMovement, enableFeatherMovement } from "./featherFollow.js";

// Function to handle logout
function handleLogout() {
  if (sessionStorage.getItem('loggedIn') === 'true') {
    // Clear session storage
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('userId', '');

    // Execute logout sequence with delays
    laydownfeather();
    setTimeout(() => {
      zoomBookOut();
    }, 0);
    setTimeout(resetPages, 0);
    setTimeout(flipBackFromUserPage, 500);
    setTimeout(flipRegistration, 1000);
    setTimeout(closeCover, 1500);
    setTimeout(changeCoverText, 2000);
    
    // Optionally, update the UI to reflect logout status
    const welcomeMessage = document.querySelector('.paperMessage');
    fadeOut(welcomeMessage);
    disableFeatherMovement();
    setTimeout(() => dipinink(), 600);
    setTimeout(() => moveFeathertoNextLine(10), 900);
    setTimeout(() => animateFeatherWriting('1s', .5, 0), 2000);
    setTimeout(() => moveFeathertoNextLine(0), 3500);
    setTimeout(() => laydownfeather(), 4500);
    setTimeout(() => enableFeatherMovement(), 5000);

    const paperMessage = document.querySelector('.paperMessage');
    paperMessage.innerHTML = '';
    setTimeout(() => showPaperMessage(paperMessage, "Good Bye!", 500), 2500);

    // Redirect to login or home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 5500);
  }
}

// Add event listener to the logout button
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});