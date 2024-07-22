import { fadeOut, fadeIn } from "./stoneAnimations.js";
import { fetchAndDisplayContent } from "./pageContent.js";
 
 //Function to flip book cover
 function flipCover() {
  const book = document.getElementById("book");
  const cover = document.getElementById("cover");
    if (cover) {
      // Rotate the cover element
      book.style.zIndex = 4
      cover.style.transform =
        cover.style.transform === "rotateY(-180deg)"
          ? "rotateY(0deg)"
          : "rotateY(-180deg)";

    }
    // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
    setTimeout(() => {
      book.style.zIndex = 2
      // Get all children elements of cover
      const children = cover.children;
      // Loop through children and toggle their display property
      for (let i = 0; i < children.length; i++) {
        children[i].style.display =
          children[i].style.display === "none" ? "block" : "none";
      }
    }, 500);
  }


   //Function to close book cover
 function closeCover() {
  const book = document.getElementById("book");
  const cover = document.getElementById("cover");
  if (cover) {
    setTimeout(() => {
      book.style.zIndex = 4
    }, 600);
    // Rotate the cover element
    cover.style.transform =
      cover.style.transform === "rotateY(-180deg)"
        ? "rotateY(0deg)"
        : "rotateY(-180deg)";
  }
  // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
  setTimeout(() => {
    book.style.zIndex = 2
    // Get all children elements of cover
    const children = cover.children;
    // Loop through children and toggle their display property
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "block" : "none";
    }
  }, 1000);
}


  // function to flip back to the login page from the register page
function flipRegistration() {
    const book = document.getElementById("book");
    const login = document.getElementById("login");
    const goRegister = document.querySelector(".goRegister");
    if (login) {
      setTimeout(() => {
        book.style.zIndex = 4
      }, 600);
      // Reverse the rotation of the login element
      login.style.transform =
        login.style.transform === "rotateY(-180deg)"
          ? "rotateY(0deg)"
          : "rotateY(-180deg)";
      // Reverse the z-index change with an additional delay
      setTimeout(() => {
        book.style.zIndex = 2
        login.style.zIndex = login.style.zIndex === "3" ? "1" : "3";
      }, 1000);
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
    }, 400);
  }
  

  //funcion to flip login page to regester page
  function flipLogin() {
    const book = document.getElementById("book");
    const login = document.getElementById("login");
    if (login) {
      book.style.zIndex = 4
      // Rotate the login element
      login.style.transform =
        login.style.transform === "rotateY(-180deg)"
          ? "rotateY(0deg)"
          : "rotateY(-180deg)";
      // Update the z-index
      login.style.zIndex = login.style.zIndex === "3" ? "1" : "3";
    }
    // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
    setTimeout(() => {
      book.style.zIndex = 2
      // Get all children elements of login
      const children = login.children;
      // Loop through children and toggle their display property
      for (let i = 0; i < children.length; i++) {
        children[i].style.display =
          children[i].style.display === "none" ? "block" : "none";
      }
    }, 500);
  }

//Function to flip to user page
function flipToUserPage() {
  const book = document.getElementById("book");
  const register = document.getElementById("register");
  if (register) {
    book.style.zIndex = 4
    // Rotate the register element
    register.style.transform =
    register.style.transform === "rotateY(-180deg)"
        ? "rotateY(0deg)"
        : "rotateY(-180deg)";
    // Update the z-index
    register.style.zIndex = register.style.zIndex === "3" ? "1" : "3";
  }
  // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
  setTimeout(() => {
    book.style.zIndex = 2
    // Get all children elements of register
    const children = register.children;
    // Loop through children and toggle their display property
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "block" : "none";
    }
  }, 500);
}


// Function to flip to register page
function flipBackFromUserPage() {
  const book = document.getElementById("book");
  const register = document.getElementById("register");
  if (register) {
    book.style.zIndex = 4;
    // Rotate the register element back
    register.style.transform =
      register.style.transform === "rotateY(-180deg)"
        ? "rotateY(0deg)"
        : "rotateY(-180deg)";
    // Update the z-index back
    register.style.zIndex = register.style.zIndex === "3" ? "1" : "3";
  }
  // Set a timeout to show children after 600 milliseconds (0.6 seconds)
  setTimeout(() => {
    book.style.zIndex = 2;
    // Get all children elements of register
    const children = register.children;
    // Loop through children and toggle their display property back
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "block" : "none";
    }
  }, 500);
}



  // Function to update cover text
function changeCoverText() {
  const beginButton = document.getElementById('begin');
  const coverText = document.getElementById('coverText');
  const username = sessionStorage.getItem('username');

  fadeOut(coverText);
  fadeOut(beginButton);
  if (coverText && username) {
    coverText.textContent = `${username}'s Inspirations`;
  }
  fadeIn(coverText);
}

// Function to update cover text back to the initial state
function revertCoverText() {
  const beginButton = document.getElementById('begin');
  const coverText = document.getElementById('coverText');

  fadeOut(coverText);
  if (coverText) {
    coverText.textContent = "Follow your inspirations";
  }
  fadeIn(coverText);
}

// Function to zoom out the book back to its original position
function zoomBookOut() {
  const candle = document.querySelector('.candle');
  const book = document.querySelector('.book');
  const cover = document.querySelector('.cover');
  const login = document.querySelector('.login');
  const register = document.querySelector('.register');
  const userPage = document.querySelector('.userPage');

  // Reset book's transformation and position for larger screens
  book.style.transition = 'transform 1s ease, top 1s ease, left 1s ease';
  book.style.transform = 'none';
  book.style.top = '25vh';
  book.style.left = '15vw';
  book.style.transformOrigin = 'top center';
  candle.style.zIndex = '5'; // Reset to its original z-index or as needed

  // For small screens, reset the book rotation and position
  const smallScreenThreshold = 600; // Example threshold for small screens
  if (window.innerWidth < smallScreenThreshold) {
    book.style.transform = 'rotate(0deg)';
    book.style.top = '390px';
    book.style.left = '0vw';
  }
  // Add the no-shadow class to hide box shadows
  cover.style.boxShadow = '15px 15px 15px rgba(0, 0, 0, 0.748)';
  login.style.boxShadow = '15px 15px 15px rgba(0, 0, 0, 0.748)';
  register.style.boxShadow = '15px 15px 15px rgba(0, 0, 0, 0.748)';
  userPage.style.boxShadow = '15px 15px 15px rgba(0, 0, 0, 0.748)';
}


// Function to zoom the book to the screen and hide other elements
function zoomBookToScreen() {
  const candle = document.querySelector('.candle');
  const book = document.querySelector('.book');
  const cover = document.querySelector('.cover');
  const login = document.querySelector('.login');
  const register = document.querySelector('.register');
  const userPage = document.querySelector('.userPage');
  // Get the viewport height, width and book height
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const bookHeight = book.offsetHeight;
  // Define the threshold for small screens (you can adjust this value)
  const smallScreenThreshold = 600; // Example threshold for small screens
  if (viewportWidth < smallScreenThreshold) {
    // Rotate the book 270 degrees for small screens
    book.style.transition = 'transform 1s ease';
    book.style.transform = 'rotate(-90deg)';
    book.style.top = '60%';
    book.style.left = '35%';
    book.style.transformOrigin = 'center center';
  } else {
    // Calculate the top margin (fixed value in vh)
    const topMarginVh = 20; // Adjust this value as needed
    // Calculate the scale factor to make the book height cover 80% of the viewport height
    const scaleFactor = (viewportHeight * 0.8) / bookHeight;
    // Calculate the top position in vh to apply the fixed top margin
    const topPositionVh = topMarginVh;
    // Calculate the left position to center the book horizontally
    const bookWidth = book.offsetWidth;
    const leftPositionVw = 72 - (bookWidth * scaleFactor * 100 / viewportWidth / 2);
    // Apply the transformations for larger screens
    book.style.transition = 'transform 1s ease, top 1s ease, left 1s ease';
    book.style.transform = `scale(${scaleFactor})`;
    book.style.top = `${topPositionVh}vh`;
    book.style.left = `${leftPositionVw}vw`;
    candle.style.zIndex = '2';
  }
  // Add the no-shadow class to hide box shadows
  cover.classList.add('no-shadow');
  login.classList.add('no-shadow');
  register.classList.add('no-shadow');
  userPage.classList.add('no-shadow');
}


// Function to zoom the book to the screen and hide other elements
function zoomBookLoggedIn() {
  const candle = document.querySelector('.candle');
  const book = document.querySelector('.book');
  const cover = document.querySelector('.cover');
  const login = document.querySelector('.login');
  const register = document.querySelector('.register');
  const userPage = document.querySelector('.userPage');
  // Get the viewport height, width and book height
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const bookHeight = book.offsetHeight;
  // Define the threshold for small screens (you can adjust this value)
  const smallScreenThreshold = 600; // Example threshold for small screens
  if (viewportWidth < smallScreenThreshold) {
    // Rotate the book 270 degrees for small screens
    book.style.transition = 'transform 1s ease';
    book.style.transform = 'rotate(-90deg)';
    book.style.top = '60%';
    book.style.left = '35%';
    book.style.transformOrigin = 'center center';
  } else {
    // Calculate the top margin (fixed value in vh)
    const topMarginVh = 20; // Adjust this value as needed
    // Calculate the scale factor to make the book height cover 80% of the viewport height
    const scaleFactor = (viewportHeight * 0.8) / bookHeight;
    // Calculate the top position in vh to apply the fixed top margin
    const topPositionVh = topMarginVh;
    // Calculate the left position to center the book horizontally
    const bookWidth = book.offsetWidth;
    const leftPositionVw = 72 - (bookWidth * scaleFactor * 100 / viewportWidth / 2);
    // Apply the transformations for larger screens
    book.style.transition = 'transform 0s ease, top 0s ease, left 0s ease';
    book.style.transform = `scale(${scaleFactor})`;
    book.style.top = `${topPositionVh}vh`;
    book.style.left = `${leftPositionVw}vw`;
    candle.style.zIndex = '2';
    flipToUserPage();
    flipLogin();
    closeCover();
  }
  // Add the no-shadow class to hide box shadows
  cover.classList.add('no-shadow');
  login.classList.add('no-shadow');
  register.classList.add('no-shadow');
  userPage.classList.add('no-shadow');
}


//funtion to turn to a specific page
function turnToPage(targetPageId) {
  const pages = [
    'userPage',
    'listenPage',
    'receivePage',
    'ponderPage',
    'planPage',
    'actPage',
    'reviewPage',
    'recordPage'
  ];

  let targetIndex = pages.indexOf(targetPageId);
  
  pages.forEach((pageId, index) => {
    const pageElement = document.getElementById(pageId);

    // Apply transitions
    pageElement.style.transition = 'transform 1s';

    if (index < targetIndex) {
      // Pages before the target should be rotated back
      pageElement.style.transform = 'rotateY(-180deg)';
    } else if (index === targetIndex) {
      // Target page should be brought to the front and set straight
      pageElement.style.transform = 'rotateY(0deg)';
    } else {
      // Pages after the target should be set back
      pageElement.style.transform = 'rotateY(0deg)';
    }

    // Set z-index after a 500ms delay for smooth transitions
    setTimeout(() => {
      if (index < targetIndex) {
        pageElement.style.zIndex = index + 3;
      } else if (index === targetIndex) {
        pageElement.style.zIndex = pages.length + 3;
      } else {
        pageElement.style.zIndex = -(index + 3);
      }
    }, 300);
  });
}

function resetPages() {
  const pages = [
    'userPage',
    'listenPage',
    'receivePage',
    'ponderPage',
    'planPage',
    'actPage',
    'reviewPage',
    'recordPage'
  ];

  pages.forEach((pageId, index) => {
    const pageElement = document.getElementById(pageId);

    // Reset transformations and z-index values
    pageElement.style.transform = 'rotateY(0deg)';
    pageElement.style.zIndex = -index;
    // Ensure the transitions match the forward animation for smoothness
    pageElement.style.transition = 'transform 0.5s, z-index 0.5s';
  });
}

  export { flipCover, flipLogin, flipRegistration, closeCover, changeCoverText, flipToUserPage, zoomBookToScreen, zoomBookLoggedIn, zoomBookOut, flipBackFromUserPage, revertCoverText, turnToPage, resetPages};