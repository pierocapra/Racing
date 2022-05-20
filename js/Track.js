const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var trackGrid = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                 1,0,0,1,1,1,1,1,1,4,4,1,1,1,1,1,1,0,0,1,
                 1,0,0,1,1,0,0,0,1,4,4,1,0,0,0,0,1,0,0,1,
                 1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,
                 1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,1,0,0,0,0,0,5,0,0,5,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,5,0,0,0,0,0,1,0,0,1,0,0,1,
                 1,0,2,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,
                 1,3,3,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,
                 1,0,0,0,0,0,1,4,4,1,0,0,1,1,0,0,0,0,0,1,
                 1,0,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
                 1,1,1,1,1,1,1,4,4,1,1,1,1,1,1,1,1,1,1,4];
const TRACK_ROAD = 0;   
const TRACK_WALL = 1;   
const TRACK_PLAYERSTART = 2;  
const TRACK_GOAL= 3;
const TRACK_TREE= 4;
const TRACK_FLAG= 5;

const isObstacleAtColRow = (col, row) => {
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS){
            var trackIndexUnderCoord = rowColToArrayIndex(col, row);
            if(trackGrid[trackIndexUnderCoord] == TRACK_WALL || trackGrid[trackIndexUnderCoord] == TRACK_FLAG){
                return true;
            }
        } else {
            return false;
        }
}

const carTrackHandling = () =>{
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);

    if(carTrackCol >= 0 && 
        carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 &&
        carTrackRow < TRACK_ROWS 
        ) {
            if (isObstacleAtColRow(carTrackCol, carTrackRow)){
                carX -= Math.cos(carAng) * carSpeed;
			    carY -= Math.sin(carAng) * carSpeed;
                carSpeed*=-0.5
            }
    }
}

const rowColToArrayIndex = (col, row) => {
    return col + TRACK_COLS * row;
}

const drawTracks = () => {

    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++){
        for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++){

            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];

            canvasContext.drawImage(useImg, drawTileX, drawTileY);

            drawTileX += TRACK_W;
            arrayIndex++;
        }
        drawTileY += TRACK_H;
        drawTileX = 0;
    }
}