// Import any necessary functions or modules
import { fadeIn, fadeOut } from "./stoneAnimations.js";
import { zoomBookOut, changeCoverText, flipRegistration, closeCover, flipBackFromUserPage, resetPages } from "./bookAnimations.js";
import { laydownfeather } from "./writingAnimations.js";

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
    }, 500);
    setTimeout(resetPages, 0);
    setTimeout(flipBackFromUserPage, 500);
    setTimeout(flipRegistration, 1000);
    setTimeout(closeCover, 1500);
    setTimeout(changeCoverText, 2000);
    
    // Optionally, update the UI to reflect logout status
    const welcomeMessage = document.querySelector('.paperMessage');
    if (welcomeMessage) {
      fadeOut(welcomeMessage);
      setTimeout(() => {
        welcomeMessage.textContent = 'Good Bye';
        fadeIn(welcomeMessage);
      }, 500);
    }

    // Redirect to login or home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3500);
  }
}

// Add event listener to the logout button
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});