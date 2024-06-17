import { guid } from "./uid.js";

// Function to hash a password
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashedPassword;
}

function flipRegistration() {
  const login = document.getElementById("login");
  const goRegister = document.querySelector(".goRegister");

  if (login) {
    // Reverse the rotation of the login element
    login.style.transform =
      login.style.transform === "rotateY(-180deg)"
        ? "rotateY(0deg)"
        : "rotateY(-180deg)";
    // Reverse the z-index change with an additional delay
    setTimeout(() => {
      login.style.zIndex = login.style.zIndex === "3" ? "1" : "3";
    }, 600);
  }

  // Set a timeout to show children after 600 milliseconds (0.6 seconds)
  setTimeout(() => {
    // Get all children elements of login
    const children = login.children;

    // Loop through children and toggle their display property
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "block" : "none";
    }

    // Switch back the goRegister class
    if (goRegister) {
      goRegister.style.display = "flex";
      goRegister.style.flexDirection = "row";
    }
  }, 600);
}

// Function to show welcome message with slow writing effect
function showWelcomeMessage(element, message, duration = 1000) {
  element.textContent = "";

  let index = 0;

  function appendNextCharacter() {
    const span = document.createElement("span");
    span.textContent = message[index];
    span.style.transition = `opacity ${duration / 2}ms ease-in-out`;
    span.style.opacity = 1;

    element.appendChild(span);

    index++;

    if (index < message.length) {
      // Continue appending characters
      setTimeout(() => {
        requestAnimationFrame(appendNextCharacter);
      }, duration / message.length);
    } else {
      // Trigger any additional logic when all characters are appended
      // Add any additional logic here
    }
  }

  // Start the animation
  requestAnimationFrame(appendNextCharacter);
}

// Function to handle form submission for registration
function handleRegisterFormSubmission(event) {
  event.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  // Call registerUser function with username and password
  registerUser(username, password);
}

async function registerUser(username, password, firstName, lastName, email) {
  const hashedPassword = await hashPassword(password);

  // Generate a random user_id (assuming you have a function to generate GUIDs)
  const userId = guid(); // Assuming guid() generates a unique identifier

  const registrationData = {
    user_id: userId,
    username: username,
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: hashedPassword,
  };

  try {
    const response = await fetch('https://seerstoneapi.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (!response.ok) {
      throw new Error('Error registering user');
    }

    const responseData = await response.json();
    console.log('User registered successfully:', responseData);

    // Handle successful registration, e.g., display welcome message
    showWelcomeMessage(welcomeText, `${username}`);

    setTimeout(() => {
      showWelcomeMessage(welcomeText, ` registered `);
    }, 1000);

    setTimeout(() => {
      showWelcomeMessage(welcomeText, `successfully`);
    }, 2500);

    setTimeout(() => {
      showWelcomeMessage(welcomeText, ` W  e  l  c  o  m  e `);
      flipRegistration();
    }, 4000);

  } catch (error) {
    console.error('Error registering user:', error.message);
    // Handle error, e.g., display error message to the user
    alert('Error registering user. Please try again.');
  }
}

// Function to log in a user using backend API
async function loginUser(username, password) {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch('https://seerstoneapi.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Error logging in');
    }

    const user = await response.json();
    console.log('User logged in successfully:', user);

    // Set session storage or local storage for logged-in user details
    sessionStorage.setItem('loggedIn', true);
    sessionStorage.setItem('userId', user.user_id);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('firstName', user.first_name);
    sessionStorage.setItem('lastName', user.last_name);
    sessionStorage.setItem('email', user.email);

    // Redirect or navigate to the editor page
    window.location.href = './editor/index.html';

  } catch (error) {
    console.error('Error logging in:', error.message);
    // Handle error, e.g., display error message to the user
    alert('Invalid username or password. Please try again.');
  }
}

// Function to handle form submission for login
function handleLoginFormSubmission(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Call loginUser function with username and password
  loginUser(username, password);
}

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmission);