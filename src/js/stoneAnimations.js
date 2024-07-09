// This is the src/js/stoneAnimations.js file

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
  
  export { fadeIn, fadeOut };