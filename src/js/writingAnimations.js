// This is the src/js/writingAnimations.js file


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
      }
    }
    // Start the animation
    requestAnimationFrame(appendNextCharacter);
}


//function to pick up featherpen and dip in ink
function dipinink() {
    const feather = document.querySelector('.feather');
    const featherShadow = document.querySelector('.feathershadow');
    // Temporarily disable animation on feathershadow
    featherShadow.style.animation = 'none';
    // Hide feather shadow with opacity transition
    featherShadow.style.transition = 'opacity 1s ease';
    featherShadow.style.opacity = '0';
    // Stand feather up
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(-40deg) scaleX(.5) scale(1.5)';
    }, 0);
    // Move to ink
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(-40deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '230px';
        feather.style.top = '78px';
    }, 0);
    // Dip in ink
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(-50deg) scaleX(0.5) scale(1.3)';
        feather.style.left = '200px';
        feather.style.top = '55px';
    }, 450);
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(-40deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '230px';
        feather.style.top = '78px';
    }, 900);
}


//Function to lay down featherpen
function laydownfeather() {
    const feather = document.querySelector('.feather');
    const featherShadow = document.querySelector('.feathershadow');
    // lay down feather
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(0deg) scaleX(1) scale(1)';
        feather.style.left = '32px';
        feather.style.top = '12px';
    }, 0);
    // Show feather shadow again after laying down
    setTimeout(() => {
        featherShadow.style.transition = 'opacity 1s ease';
        featherShadow.style.opacity = '2'; 
    }, 600); 
    // Re-enable animation on feathershadow
    setTimeout(() => {
        featherShadow.style.animation = 'item-flicker .15s infinite alternate';
    }, 500);
}


//Function to animate featherpen writing the paperMessage
function animateFeatherWriting() {
    const feather = document.querySelector('.feather');
    // Start the writing animation sequence
    setTimeout(() => {
        dipinink();
    }, 0);
    setTimeout(() => {
        feather.style.transition = 'transform .5s ease, left .5s linear, top .5s linear';
        feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '-20px';
        feather.style.top = '105px';
    }, 1000);
    setTimeout(() => {
        featherWrite();
    }, 1800);
    setTimeout(() => {
        feather.style.transition = 'transform .2s ease, left .2s linear, top .2s linear';
        feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '-20px';
        feather.style.top = '155px';
    }, 3300);
    setTimeout(() => {
        featherWrite();
    }, 3800);
    setTimeout(() => {
        feather.style.transition = 'transform .2s ease, left .2s linear, top .2s linear';
        feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '-20px';
        feather.style.top = '205px';
    }, 5300);
    setTimeout(() => {
        featherWrite();
    }, 5800);
    setTimeout(() => {
        feather.style.transition = 'transform .2s ease, left .2s linear, top .2s linear';
        feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1)';
        feather.style.left = '0px';
        feather.style.top = '0px';
    }, 7300);
    setTimeout(() => {
        laydownfeather();
    }, 7800); 

}


// Function to write text
function featherWrite() {
    const feather = document.querySelector('.feather');

    // Sequence of transformations for the writing motion
    const writingMotions = [
        { transform: 'rotate(5deg) rotateY(30deg) translateX(20px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-1deg) rotateY(30deg) translateX(40px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(5deg) rotateY(33deg) translateX(60px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-7deg) rotateY(30deg) translateX(80px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(8deg) rotateY(33deg) translateX(100px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-2deg) rotateY(30deg) translateX(120px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(3deg) rotateY(33deg) translateX(140px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-5deg) rotateY(30deg) translateX(160px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(6deg) rotateY(33deg) translateX(180px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-1deg) rotateY(30deg) translateX(200px) scaleX(0.5) scale(1.3)' },
        { transform: 'rotate(-10deg) rotateY(25deg) translateX(60px) translateY(-20px) scaleX(0.7) scale(1.5)' },
    ];

    // Apply the transformations in sequence
    writingMotions.forEach((motion, index) => {
        setTimeout(() => {
            feather.style.transition = 'transform 0.09s ease';
            feather.style.transform = motion.transform;
        }, index * 100); 
    });

    // Stop the animation after the sequence
    setTimeout(() => {
        feather.style.transition = 'none';
        feather.style.transform = 'none';
    }, writingMotions.length * 100 + 1500);
}

export { appendDelayedMessage, showWelcomeMessage, animateFeatherWriting };