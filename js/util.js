'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function drawRect(x, y,line) {
    gCtx.beginPath()
    gCtx.rect(0, line.posY-line.size+1, gCanvas.width+20, line.size)
    gCtx.fillRect(x, y, line.posY-10, line.posY+10)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

