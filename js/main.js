var canvas, canvasContext;

window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0,0,canvas.width, canvas.height, 'black');
    colorText("Loading..", canvas.width/2, canvas.height/2, "white")

    loadImages();
}
const imageLoadingDoneSoStartGame = () => {
     var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    carReset();
}

const updateAll = () => {
    moveAll();
    drawAll();            
}

const moveAll = () => {
    carMove();
    carTrackHandling();
}

const drawAll = () => {
    drawTracks();
    carDraw();

}



