let allowFeatherMovement = true;

// Function to update feather position and rotation
function updateFeatherPosition(event) {
    if (!allowFeatherMovement) return;
    const feather = document.getElementById('feather');
    const featherShadow = document.getElementById('feathershadow');
    feather.style.zIndex = 10;
    // Calculate dynamic offsets
    const leftOffset = event.clientX - feather.clientWidth / 2 - window.innerWidth * 0.43;
    const topOffset = event.clientY - feather.clientHeight / 2 + window.innerHeight * -0.15;

    // Convert pixel offsets to viewport units
    const leftVw = (leftOffset / window.innerWidth) * 100;
    const topVh = (topOffset / window.innerHeight) * 100;

    // Update feather's position using viewport units
    feather.style.left = `${leftVw}vw`;
    feather.style.top = `${topVh}vh`;

    // Apply 45-degree rotation
    feather.style.transform = 'rotateY(-40deg) scaleX(.5) scale(1.5)';

    // Turn off animation and fade out shadow
    featherShadow.style.animation = 'none';
    featherShadow.style.opacity = 0;
}
  
// Function to reset feather to original position
function resetFeather() {
    if (!allowFeatherMovement) return;
    const feather = document.getElementById('feather');
    const featherShadow = document.getElementById('feathershadow');
    // Reset position and rotation
    feather.style.left = '2vw';
    feather.style.top = '-2vh';
    feather.style.transform = 'rotate(0deg)';
    // Reset animation and fade in shadow
    setTimeout(() => {
        featherShadow.style.opacity = 1;
        featherShadow.style.animation = 'item-flicker .15s infinite alternate';
    }, 100);
}

// Function to disable feather movement
function disableFeatherMovement() {
    allowFeatherMovement = false;
}
  
// Function to enable feather movement
function enableFeatherMovement() {
    allowFeatherMovement = true;
}

export { updateFeatherPosition, resetFeather, enableFeatherMovement, disableFeatherMovement, allowFeatherMovement };