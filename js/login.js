// This is the src/js/login.js file

import { appendDelayedMessage, showPaperMessage, animateFeatherWriting, laydownfeather, dipinink, moveFeathertoNextLine } from "./writingAnimations.js";
import { closeCover, changeCoverText, flipCover, flipLogin, flipToUserPage, zoomBookToScreen } from "./bookAnimations.js";
import { fadeIn, fadeOut, updateWelcomeMessage, fadeInStoneBrightness } from "./stoneAnimations.js";
import { enableFeatherMovement, disableFeatherMovement } from "./featherFollow.js";

// Function to login a user via API
async function loginUser(username, password) {
  const credentials = {
    username: username,
    password: password,
  };
  try {
    const response = await fetch('https://seerstoneapi.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include', // Include credentials (cookies) in the request
      },
      body: JSON.stringify(credentials),
    });
    if (response.status === 404) {
      throw new Error('User not found');
    }
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const result = await response.json();
    if (result.user.user_id && result.user.username) {
      console.log('User logged in successfully:', result);
      // Set session storage items
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('userId', result.user.user_id);
      sessionStorage.setItem('username', result.user.username);
      // Update UI elements
      changeCoverText();
      closeCover();
      disableFeatherMovement();
      dipinink()
      setTimeout(() => moveFeathertoNextLine(10), 900);
      setTimeout(() => animateFeatherWriting('1s', 1, 0), 2000);
      setTimeout(() => moveFeathertoNextLine(20), 2500);
      setTimeout(() => animateFeatherWriting('7s', 2.5, 20), 3100);
      setTimeout(() => moveFeathertoNextLine(0), 4500);
      setTimeout(() => laydownfeather(), 5500);
      setTimeout(() => enableFeatherMovement(), 6000);
      fadeInStoneBrightness();
      setTimeout(updateWelcomeMessage, 2500);
      const logoutButton = document.getElementById('logoutButton')
      setTimeout(() => fadeIn(logoutButton), 3000);
      const paperMessage = document.querySelector('.paperMessage');
      paperMessage.innerHTML = '';
      setTimeout(async () => {
        await showPaperMessage(paperMessage, `${result.user.username}`, 500);
        await appendDelayedMessage(paperMessage, "logged in successfully!", 1000);
        setTimeout(flipCover, 3000);
        setTimeout(flipLogin, 3500);
        setTimeout(flipToUserPage, 4000);
        setTimeout(zoomBookToScreen,4500);
        setTimeout(async () => {
          book.style.transition = 'transform 0s ease, top 0s ease, left 0s ease';
        }, 5000);
      }, 2000);
    } else {
      throw new Error('User not found in the database');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('userId', '');
    sessionStorage.setItem('loggedIn', 'false');
    // Update UI with error message
    const paperMessage = document.querySelector('.paperMessage');
    paperMessage.innerHTML = '';
    disableFeatherMovement();
      dipinink()
      setTimeout(() => moveFeathertoNextLine(10), 900);
      setTimeout(() => animateFeatherWriting('1s', 1.5, 0), 2000);
      setTimeout(() => moveFeathertoNextLine(22), 2500);
      setTimeout(() => animateFeatherWriting('7s', 2.5, 20), 3100);
      setTimeout(() => moveFeathertoNextLine(0), 4500);
      setTimeout(() => laydownfeather(), 5500);
      setTimeout(() => enableFeatherMovement(), 6000);
    setTimeout(async () => {
      await showPaperMessage(paperMessage, "Login Error", 500);
      await appendDelayedMessage(paperMessage, " Incorrect information", 1000);
    }, 2100);
  }
}

// Function to handle form submission for login
async function handleLoginFormSubmission(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  try {
    await loginUser(username, password);
  } catch (error) {
    console.error("Error logging in:", error);
    const paperElement = document.querySelector('.paper');
    const userNotFound = document.createElement('p');
    userNotFound.textContent = "Please check your username and password, and then try again!";
    userNotFound.className = "userNotFound";
    paperElement.append(userNotFound);
  }
}

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmission);