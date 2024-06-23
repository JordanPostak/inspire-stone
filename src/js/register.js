// This is the src/js/register.js file

import { guid, hashPassword } from "./uid.js";
import { appendDelayedMessage, showWelcomeMessage, animateFeatherWriting} from "./writingAnimations.js";
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
  const hashedPassword = await hashPassword(password);
  const newUser = {
    user_id: guid(), //generate a unique user ID
    username: username,
    password: hashedPassword,
    first_name: firstName,
    last_name: lastName,
    email: email
  };
  try {
    const response = await fetch('https://seerstoneapi.onrender.com/users/', {
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
      await showWelcomeMessage(welcomeText, `Welcome ${username}`);
      await appendDelayedMessage(welcomeText, ` You have registered successfully !`, 2000);
      await appendDelayedMessage(welcomeText, ` Now you can log in !`, 2000);
      flipRegistration();
    }, 2000);
  } catch (error) {
    console.error('Error registering user:', error);
  }
}