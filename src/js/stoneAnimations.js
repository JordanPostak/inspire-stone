// This is the src/js/stoneAnimations.js file





// Function to update the welcome message
function updateWelcomeMessage() {
  const username = sessionStorage.getItem('username');
  if (username) {
    const welcomeMessage = document.getElementById('welcomeText');
    if (welcomeMessage) {
      fadeOut(welcomeMessage);
      setTimeout(() => {
        welcomeMessage.textContent = `Welcome`;
        fadeIn(welcomeMessage);
      }, 1000);
      setTimeout(() => {
        fadeOut(welcomeMessage);
      }, 2000);
      setTimeout(() => {
        welcomeMessage.textContent = `${username}`;
        fadeIn(welcomeMessage);
      }, 3000);
    }
  }
}


// Function to fade in an element
function fadeIn(element) {
    element.style.opacity = 0; // Start with opacity set to 0 (fully transparent)
    
    let opacity = 0;
    const interval = 50; // Interval in milliseconds
    const duration = 1000; // Duration in milliseconds
    const increment = interval / duration;
  
    function increaseOpacity() {
      opacity += increment;
      element.style.opacity = opacity;
      if (opacity < 1) {
        setTimeout(increaseOpacity, interval);
      }
    }
  
    increaseOpacity();
  }
  
  // Function to fade out an element
  function fadeOut(element) {
    element.style.opacity = 1; // Start with opacity set to 1 (fully opaque)
  
    let opacity = 1;
    const interval = 50; // Interval in milliseconds
    const duration = 1000; // Duration in milliseconds
    const decrement = interval / duration;
  
    function decreaseOpacity() {
      opacity -= decrement;
      element.style.opacity = opacity;
      if (opacity > 0) {
        setTimeout(decreaseOpacity, interval);
      } else {
      }
    }
  
    decreaseOpacity();
  }


// Function to temporarily increase the brightness of the header image
function fadeInHeaderBrightness() {
  const header = document.querySelector('header');
  if (header) {
    // Temporarily disable the stone-flicker animation
    const originalAnimation = header.style.animation;
    header.style.animation = 'none';

    // Apply the brightness effect animation
    header.style.animation = 'increase-brightness 3s forwards';

    // After 1 second, re-enable the original stone-flicker animation
    setTimeout(() => {
      header.style.animation = originalAnimation;
    }, 3000);
  }
}
  
  export { fadeIn, fadeOut, updateWelcomeMessage, fadeInHeaderBrightness };