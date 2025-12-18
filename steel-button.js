const webcamVideo = document.getElementById("webcamVideo");
const constraints = {
    video: {
        width: 500,
        height: 100,
        facingMode: "environment"
    }
}

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    webcamVideo.srcObject = stream;
}).catch((error) => {
    console.error(error);
})