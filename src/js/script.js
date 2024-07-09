// landing-page.js

import { flipCover, flipLogin, flipRegistration } from "./bookAnimations.js";
import { fadeIn } from "./stoneAnimations.js";

document.addEventListener("DOMContentLoaded", function () {
    const beginButton = document.getElementById("begin");
    const smallButton = document.querySelector(".smallbutton");
    const backButton = document.querySelector(".backbutton");
    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {
        fadeIn(welcomeText); // Fade in welcome text element on page load
    }
  
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
  