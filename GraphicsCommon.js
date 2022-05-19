const drawBitmapCenteredWithRotation = (useBitmap, atX, atY, withAng) => {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
    canvasContext.restore();
}

const colorRect = (topLeftX, topLeftY, boxWidth, boxHeight,fillColor) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY,boxWidth,boxHeight);
}

const colorCircle = (x, y, radius, fillColor) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

const colorText = (showWords, textX, textY, fillColor) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords, textX, textY);
}