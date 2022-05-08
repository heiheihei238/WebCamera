const videoElem = document.getElementById("video");
//const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

// Options for getDisplayMedia()

var displayMediaOptions = { // some JSON parameters
    video: {
        cursor: "always"
    },
    audio: false
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", (evt) => {
    startCapture();
}, false);
stopElem.addEventListener("click", (evt) => {
    stopCapture();
}, false);
startcanvas.addEventListener("click", (evt) => {
    startCanvasCapture();
}, false);

async function startCapture() {
    //logElem.innerHTML = "";

    try {
        if (!webcam.checked) {
            videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        } else {
            displayMediaOptions.audio = soundon.checked;
            videoElem.srcObject = await navigator.mediaDevices.getUserMedia(displayMediaOptions);
        }
        //dumpOptionsInfo();
    } catch(err) {
        console.error("Error: " + err);
    }
}
function stopCapture(evt) {
    let tracks = videoElem.srcObject.getTracks();

    tracks.forEach(track => track.stop());
    videoElem.srcObject = null;
}
function startCanvasCapture(evt) {
    // Find the canvas element to capture
    var canvasElt = canvas;
    // Get the stream
    var stream = canvasElt.captureStream(50); // 25 FPS

    console.log(stream);
    //videoElem.src = window.URL.createObjectURL(stream);
    videoElem.srcObject = stream;

    // Do things to the stream
    // E.g. Send it to another computer using an RTCPeerConnection
    //      pc is an RTCPeerConnection created elsewhere
    //pc.addStream(stream);
}


var subtitleparam = -1;
var scrolltext = 'My subtitle...';

// Find the canvas element to capture
//var canvasElt = document.querySelector('canvas');
/* 为canvas加入字幕 */
// function redrawStuff() {
//     // some content
//     var ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#" + Math.round((Math.random() * 255)).toString(16)
//         + Math.round((Math.random() * 255)).toString(16)
//         + Math.round((Math.random() * 255)).toString(16)
//     ;
//     ctx.fillRect(Math.random() * 100,Math.random() * 100,20,20);
//
//
//     // todo: put in another redraw func.
//     {
//         var ctx2 = canvas2.getContext("2d");
//         ctx2.drawImage(video, 0, 0, 200, 200);
//         ctx2.font = '24px sans-serif';
//         ctx2.fillStyle = "black";
//         ctx2.fillText(scrolltext, subtitleparam, 180);
//         subtitleparam -= 1;
//         if (subtitleparam < -200) subtitleparam *= -1;
//     }
//
//     // todo: put in another redraw func.
//     {
//         var ctx3 = canvas3.getContext("2d");
//         ctx3.drawImage(canvas2, 0, 0);
//     }
//
//     //window.setTimeout(redrawStuff, 1000);
//     window.requestAnimationFrame(redrawStuff);
// }