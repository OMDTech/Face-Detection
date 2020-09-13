const video = document.getElementById("getVideo");
function beginnVideo(){
    navigator.getUserMedia({video :{}},
        stream => video.srcObject = stream,
        err =>console.error(err),
        
        )
}

beginnVideo();