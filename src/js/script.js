// this is the initial javascript

import { flipCover, flipLogin, flipRegistration, zoomBookLoggedIn } from "./bookAnimations.js";
import { fadeIn, fadeOut } from "./stoneAnimations.js";

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
    const book = document.querySelector('.book');
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
    // Check if user is logged in
  if (sessionStorage.getItem('loggedIn') === 'true') {
    // Initial call to zoom the book based on the current window size
    zoomBookLoggedIn();
    // Set transition to zero for cover, login, register, and userPage
    cover.style.transition = 'transform 0s';
    login.style.transition = 'transform 0s';
    register.style.transition = 'transform 0s';
    userPage.style.transition = 'transform 0s';
    book.style.zIndex = 4;
    book.style.transition = 'transform 0s ease, top 0s ease, left 0s ease';
  }
});



// Function to fetch and display a random quote every 10 minutes
async function fetchRandomQuote() {
  try {
    const response = await fetch('https://seerstoneapi.onrender.com/quotes/');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const quotes = await response.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the random quote in the .quotes element
    const quotesElement = document.querySelector('.quotes');
    const quotesText = document.querySelector('.quoteText');
    fadeOut(quotesText);
    if (quotesElement) {
      setTimeout(async () => {
        quotesText.innerHTML = `
        <p>"${randomQuote.text}" - ${randomQuote.person}</p>
      `;
      fadeIn(quotesText);
      }, 1000);
    }

    console.log(randomQuote);
  } catch (error) {
    console.error('Failed to fetch the quotes:', error);
  }
}

// Function to keep the app active
function keepAppActive() {
  fetchRandomQuote(); // Fetch a random quote immediately
  setInterval(fetchRandomQuote, 1 * 60 * 1000); // Fetch a random quote every 10 minutes
}

// Start keeping the app active
keepAppActive();
