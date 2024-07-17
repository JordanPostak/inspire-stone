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
        children[i].style.display === "none" ? "flex" : "none";
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
          children[i].style.display === "none" ? "flex" : "none";
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
        children[i].style.display === "none" ? "flex" : "none";
    }
  }, 500);
}
  // Function to update cover text
function changeCoverText() {
  const beginButton = document.getElementById('begin');
  const coverText = document.getElementById('coverText');
  const username = sessionStorage.getItem('username');

  if (coverText && username) {
    coverText.textContent = `${username}'s Inspirations`;
  }
  if (beginButton) {
    beginButton.style.opacity = '0';
    beginButton.style.pointerEvents = 'none';
  }
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
    flipCover();
    flipLogin();
    flipToUserPage();
  }
  // Add the no-shadow class to hide box shadows
  cover.classList.add('no-shadow');
  login.classList.add('no-shadow');
  register.classList.add('no-shadow');
  userPage.classList.add('no-shadow');
}


  export { flipCover, flipLogin, flipRegistration, closeCover, changeCoverText, flipToUserPage, zoomBookToScreen, zoomBookLoggedIn };