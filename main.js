var canvas, canvasContext;

window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();

    trackLoadImages();
    carImageLoad();
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



