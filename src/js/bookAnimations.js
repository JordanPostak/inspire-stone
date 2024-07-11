 //Function to flip book cover
 function flipCover() {
    const cover = document.getElementById("cover");
    if (cover) {
      // Rotate the cover element
      cover.style.transform =
        cover.style.transform === "rotateY(-180deg)"
          ? "rotateY(0deg)"
          : "rotateY(-180deg)";
    }
    // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
    setTimeout(() => {
      // Get all children elements of cover
      const children = cover.children;
      // Loop through children and toggle their display property
      for (let i = 0; i < children.length; i++) {
        children[i].style.display =
          children[i].style.display === "none" ? "block" : "none";
      }
    }, 600);
  }


   //Function to close book cover
 function closeCover() {
  const cover = document.getElementById("cover");
  if (cover) {
    // Rotate the cover element
    cover.style.transform =
      cover.style.transform === "rotateY(-180deg)"
        ? "rotateY(0deg)"
        : "rotateY(-180deg)";
  }
  // Set a timeout to hide children after 600 milliseconds (0.6 seconds)
  setTimeout(() => {
    // Get all children elements of cover
    const children = cover.children;
    // Loop through children and toggle their display property
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "flex" : "none";
    }
  }, 600);
}


  // function to flip back to the login page from the register page
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
  

  //funcion to flip login page to regester page
  function flipLogin() {
    const login = document.getElementById("login");
    if (login) {
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
      // Get all children elements of login
      const children = login.children;
      // Loop through children and toggle their display property
      for (let i = 0; i < children.length; i++) {
        children[i].style.display =
          children[i].style.display === "none" ? "flex" : "none";
      }
    }, 600);
  }

//Function to flip to user page
function flipToUserPage() {
  const register = document.getElementById("register");
  if (register) {
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
    // Get all children elements of register
    const children = register.children;
    // Loop through children and toggle their display property
    for (let i = 0; i < children.length; i++) {
      children[i].style.display =
        children[i].style.display === "none" ? "flex" : "none";
    }
  }, 600);
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
  const book = document.querySelector('.book');
  const coverBefore = document.querySelector('.cover::before');
  const loginBefore = document.querySelector('.login::before');
  const registerBefore = document.querySelector('.register::before');
  const userPageBefore = document.querySelector('.userPage::before');

  // Zoom and move the book
  book.style.transition = 'transform 1s ease, top 1s ease, left 1s ease';
  book.style.transform = 'scale(1.35)';
  book.style.top = '-10px'; // Adjust the value as needed
  book.style.left = '300px'; // Adjust the value as needed
  book.style.zIndex = '5'; // Adjust the value as needed

  // Hide other elements
  coverBefore.style.display = 'none';
  loginBefore.style.display = 'none';
  registerBefore.style.display = 'none';
  userPageBefore.style.display = 'none';
}

  export { flipCover, flipLogin, flipRegistration, closeCover, changeCoverText, flipToUserPage, zoomBookToScreen };