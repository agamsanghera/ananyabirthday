function changeVideo(videoSource) {
    const videoPlayer = document.getElementById('mainVideo');
    videoPlayer.src = videoSource;
    videoPlayer.play();
}

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const overlay = document.getElementById('envelope-overlay');

    // 1. Trigger the envelope opening and letter sliding up
    envelope.classList.add('open');

    // 2. Wait 2 seconds for the user to read the letter, then fade out the screen
    setTimeout(() => {
        overlay.style.opacity = '0';
        
        // 3. Wait 1 more second for the fade to complete, then remove it so the buttons underneath are clickable
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
        
    }, 2000);
}