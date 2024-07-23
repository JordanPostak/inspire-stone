// This is the src/js/writingAnimations.js file


// Function to append message after a delay
function appendDelayedMessage(element, message, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        element.innerHTML += `<br>`;
        showPaperMessage(element, message);
        resolve();
      }, delay);
    });
  }
  

// Function to show welcome message with slow writing effect
function showPaperMessage(element, message, duration = 400) {
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
        feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
        feather.style.transform = 'rotateY(-40deg) scaleX(.5) scale(1.5)';
    }, 0);
    // Move to ink
    setTimeout(() => {
        feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
        feather.style.transform = 'rotateY(-40deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '14.5vw';
        feather.style.top = '5.8vh';
    }, 0);
    // Dip in ink
    setTimeout(() => {
        feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
        feather.style.transform = 'rotateY(-50deg) scaleX(0.5) scale(1.3)';
        feather.style.left = '12vw';
        feather.style.top = '5.5vh';
    }, 450);
    setTimeout(() => {
        feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
        feather.style.transform = 'rotateY(-40deg) scaleX(0.5) scale(1.5)';
        feather.style.left = '14.5vw';
        feather.style.top = '5.8vh';
    }, 900);
}


//Function to lay down featherpen
function laydownfeather() {
    const feather = document.querySelector('.feather');
    const featherShadow = document.querySelector('.feathershadow');
    // lay down feather
    setTimeout(() => {
        feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
        feather.style.transform = 'rotateY(0deg) scaleX(1) scale(1)';
        feather.style.left = '2vw';
        feather.style.top = '-2vh';
    }, 0);
    // Show feather shadow again after laying down
    setTimeout(() => {
        featherShadow.style.opacity = '2'; 
    }, 200); 
    // Re-enable animation on feathershadow
    setTimeout(() => {
        featherShadow.style.animation = 'item-flicker .15s infinite alternate';
    }, 200);
}

// function to move feather down to next line
function moveFeathertoNextLine(topPosition) {
    const feather = document.querySelector('.feather');
    feather.style.top = `${topPosition}vh`;
    feather.style.transition = 'transform 0.2s ease, left 0.2s ease, top 0.2s ease';
    feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1.5)';
    feather.style.left = '-2vw';
}

// Function to animate featherpen writing the paperMessage
function animateFeatherWriting(speed, distance, topPosition) {
    const feather = document.querySelector('.feather');
    // Start the writing animation sequence
    featherWrite(distance);
    setTimeout(() => {
        feather.style.transition = `transform ${speed} ease, left ${speed} linear, top ${speed} linear`;
        feather.style.transform = 'rotateY(30deg) scaleX(0.5) scale(1.5)';
        feather.style.left = `-2vw`;
        feather.style.top = `${topPosition}vh`;
    }, 1900);
}


// Function to write text
function featherWrite(distance) {
    const feather = document.querySelector('.feather');
    const step = distance;
    const writingMotions = [];
    let progress = 0;

    for (let i = 1; i <= 10; i++) {
        progress += step;
        const direction = i % 2 === 0 ? -1 : 1; // Alternate direction
        const transform = `rotate(${direction * 5}deg) rotateY(30deg) translateX(${progress}vw) scaleX(0.5) scale(1.3)`;
        writingMotions.push({ transform });
    }

    // Add the final transformation with extra translation
    writingMotions.push({ transform: `rotate(0deg) rotateY(33deg) translateX(${distance}vw) translateY(-2vw) scaleX(0.7) scale(1.5)` });

    // Apply the transformations in sequence
    writingMotions.forEach((motion, index) => {
        setTimeout(() => {
            feather.style.transition = 'transform 0.2s ease';
            feather.style.transform = motion.transform;
        }, index * 50); // Adjust the interval as needed
    });
}

export { appendDelayedMessage, showPaperMessage, animateFeatherWriting, laydownfeather, dipinink, moveFeathertoNextLine};