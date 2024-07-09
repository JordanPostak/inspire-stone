// This is the src/js/login.js file

import { appendDelayedMessage, showWelcomeMessage, animateFeatherWriting} from "./writingAnimations.js";
import { closeCover } from "./bookAnimations.js";

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
        credentials: 'include' // Include credentials (cookies) in the request
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const result = await response.json();
    console.log('User logged in successfully:', result);
    sessionStorage.setItem('loggedIn', true);
    sessionStorage.setItem('userId', result.user.user_id);
    sessionStorage.setItem('username', result.user.username);

    // Update the welcome message using session storage
    closeCover();

    const paper = document.querySelector('.paperMessage');
    // Clear existing content
    paper.innerHTML = '';
    // Display success message with typing effect
    animateFeatherWriting();
    // Display success message with typing effect after 1 second
    setTimeout(async () => {
      await showWelcomeMessage(paper, `Welcome ${result.user.username}!`, 1000);
      await appendDelayedMessage(paper, "You have successfully logged in", 2000);
      await appendDelayedMessage(paper, "Here are your inspirations!", 2000);
    }, 2000);
  } catch (error) {
    console.error('Error logging in:', error);
    const paper = document.querySelector('.paperMessage');
    // Clear existing content
    paper.innerHTML = '';
    // Display error message with typing effect
    animateFeatherWriting();
    // Display error message with typing effect after 1 second
    setTimeout(async () => {
      await showWelcomeMessage(paper, "Error logging you in.", 1000);
      await appendDelayedMessage(paper, " Check your information,", 2000);
      await appendDelayedMessage(paper, " then try again!", 2000);
    }, 2000);
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
      const paper = document.querySelector('.paper');
      const userNotFound = document.createElement('p');
      userNotFound.textContent = "Please check your username and password, and then try again!";
      userNotFound.className = "userNotFound";
      paper.append(userNotFound);
    }
  }
  
// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmission);