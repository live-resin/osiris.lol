// Function to start the animations and show new content
function startAnimations() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('video');
    const tiltcardContainer = document.getElementById('tiltcard-container');

    overlay.classList.add('hidden');
    tiltcardContainer.classList.remove('hidden');
    tiltcardContainer.style.opacity = '1';
    tiltcardContainer.classList.remove('hidden');

    video.muted = false;
    video.play();
}

// Handle click event to trigger animations and play video
document.getElementById('overlay').addEventListener('click', startAnimations);