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

// Function to register a user via API
async function registerUser(username, password) {
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
    welcomeText.innerHTML = '';

    await showWelcomeMessage(welcomeText, `Welcome ${username}`);
    await appendDelayedMessage(welcomeText, ` You have registered successfully !`, 2000);
    await appendDelayedMessage(welcomeText, ` Now you can log in !`, 2000);
    flipRegistration();

  } catch (error) {
    console.error('Error registering user:', error);
  }
}

// Function to append message after a delay
function appendDelayedMessage(element, message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      element.innerHTML += `<br>`;
      showWelcomeMessage(element, message);
      resolve();
    }, delay);
  });
}

// Function to show welcome message with slow writing effect
function showWelcomeMessage(element, message, duration = 1000) {
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

// Function to login a user via API
async function loginUser(username, password) {
  const hashedPassword = await hashPassword(password);

  const credentials = {
    username: username,
    password: hashedPassword,
  };

  try {
    const response = await fetch('https://seerstoneapi.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const result = await response.json();
    console.log('User logged in successfully:', result);

    sessionStorage.setItem('loggedIn', true);
    sessionStorage.setItem('userId', result.userId);
    sessionStorage.setItem('username', result.username);

    window.location.href = './editor/index.html';

  } catch (error) {
    console.error('Error logging in:', error);
    const paper = document.querySelector('.paperMessage');

    // Clear existing content
    paper.innerHTML = '';

    // Display error message with typing effect
    await showWelcomeMessage(paper, "Error logging you in." , 1000);
    await appendDelayedMessage(paper, " Check your information,", 2000);
    await appendDelayedMessage(paper, " then try again!", 2000);
  }
}

// Event listener for register form submission
document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  const firstName = document.getElementById('firstName').value; // Assuming you have these fields in your form
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  await registerUser(username, password, firstName, lastName, email);
});