let allowFeatherMovement = true;

// Function to update feather position and rotation
function updateFeatherPosition(event) {
    if (!allowFeatherMovement) return;
    const feather = document.getElementById('feather');
    const featherShadow = document.getElementById('feathershadow');
    feather.style.zIndex = 10;
    // Update feather's position based on mouse coordinates
    feather.style.left = `${event.clientX - feather.clientWidth / 2 - 525}px`;
    feather.style.top = `${event.clientY - feather.clientHeight / 2 + 70}px`;
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
    feather.style.left = '20px';
    feather.style.top = '-20px';
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