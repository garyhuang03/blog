const videoList = Array.from(document.getElementsByClassName("video"));
videoList.forEach(video => {
    video.volume = '0.6';
});

const audioList = Array.from(document.getElementsByClassName("audio"));
audioList.forEach(audio => {
    audio.volume = '0.1';
    audio.style.width = '100%';
});