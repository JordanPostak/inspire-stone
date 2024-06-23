// landing-page.js

import { flipCover, flipLogin, flipRegistration } from "./bookAnimations.js";

document.addEventListener("DOMContentLoaded", function () {
    const beginButton = document.getElementById("begin");
    const smallButton = document.querySelector(".smallbutton");
    const backButton = document.querySelector(".backbutton");
  
    if (beginButton) {
      // Attach a click event listener to the Begin button
      beginButton.addEventListener("pointerdown", flipCover);
    }
  
    if (smallButton) {
      // Attach a click event listener to the small button
      smallButton.addEventListener("pointerdown", flipLogin);
    }
  
    if (backButton) {
      // Attach a click event listener to the Register button
      backButton.addEventListener("pointerdown", flipRegistration);
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcomeText");
  
    if (welcomeText) {
      const textContent = welcomeText.textContent;
      welcomeText.textContent = "";
  
      for (let i = 0; i < textContent.length; i++) {
        const span = document.createElement("span");
        span.textContent = textContent[i];
        welcomeText.appendChild(span);
      }
    }
  });
  