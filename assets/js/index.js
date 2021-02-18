const video = document.querySelector('#camplayer');

window.navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();


        };
    })
    .catch(error => {
        alert('Camera isnt enabled');
    })
;
