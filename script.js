function changeVideo(videoSource) {
    const videoPlayer = document.getElementById('mainVideo');
    videoPlayer.src = videoSource;
    videoPlayer.play();
}