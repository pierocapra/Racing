var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad; 

const countLoadedImagesAndLaunchIfReady = () => {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
} 

const beginLoadingImage = (imgVar, fileName) => {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "imgs/" + fileName;
}

const loadImages = () => {
    var dataSet = {varName: carPic, theFile: "player1car.png"};
    var imageList = [
        {varName: carPic, theFile: "player1car.png"},
        {varName: roadPic, theFile: "track_road.png"},
        {varName: wallPic, theFile: "track_wall.png"}];
    
        picsToLoad = imageList.length;
    for(let i = 0; i<imageList.length; i++){
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }    
    
}