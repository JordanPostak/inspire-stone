// Import any necessary functions or modules
import { fadeIn, fadeOut } from "./stoneAnimations.js";

// Function to handle logout
function handleLogout() {
    // Clear session storage
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('userId', '');
    
    // Optionally, update the UI to reflect logout status
    const welcomeMessage = document.getElementById('welcomeText');
    if (welcomeMessage) {
      fadeOut(welcomeMessage);
      setTimeout(() => {
        welcomeMessage.textContent = 'You have been logged out.';
        fadeIn(welcomeMessage);
      }, 500);
    }
    
    // Redirect to login or home page
    window.location.href = 'index.html';
  }

// Add event listener to the logout button
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
  }
});