// This is the src/js/register.js file

import { appendDelayedMessage, showPaperMessage, animateFeatherWriting} from "./writingAnimations.js";
import { flipRegistration } from "./bookAnimations.js";

// Event listener for register form submission
document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  await registerUser(username, password, firstName, lastName, email);
});


// Function to register a user via API
async function registerUser(username, password, firstName, lastName, email) {
  const newUser = {
    username: username,
    password: password,
    first_name: firstName,
    last_name: lastName,
    email: email
  };
  try {
    const response = await fetch('https://seerstoneapi.onrender.com/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Registration failed: ${errorText}`);
    }
    const result = await response.json();
    console.log('User registered successfully:', result);
    const welcomeText = document.querySelector('.paperMessage');
    // Display error message with typing effect
    animateFeatherWriting();
    welcomeText.innerHTML = '';
    setTimeout(async () => {
      await showPaperMessage(welcomeText, `${username} registered!`);
      await appendDelayedMessage(welcomeText, ` You can now log in!`, 2000);
      flipRegistration();
    }, 2000);
  } catch (error) {
    console.error('Error registering user:', error);
  }
}