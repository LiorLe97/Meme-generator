'use strict'

const gCanvas = document.querySelector('.canvas');
const gCtx = gCanvas.getContext('2d')
let gtxtValue = '';
let gCurrImgId;


function init() {

}


let gImgs = [
    { id: 1, url: 'images/meme images-square/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/meme images-square/2.jpg', keywords: ['happy'] }
];


let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
function drawImg() {
    let img = new Image()
    img.src = getMemeById(gMeme.selectedImgId).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(gMeme.lines[0].txt, 100, 20)
        //drawText(gMeme.lines[0].txt, 100, 130)
        // drawText(gMeme.lines[0].txt, 100, 80)
    }
}

function drawText(txt, x, y) {
    gCtx.font = '17px impact';
    gCtx.fillText(txt, x, y);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}





console.log(getMemeById(gMeme.selectedImgId))

function getMemeById(memeId) {
    let meme = gImgs.find(function (img) {
        return memeId === img.id
    });
    return meme;
}

function onSetText(val) {
    gMeme.lines[0].txt = val;
    drawImg()
}

function showId(el) {
    gMeme.selectedImgId = +(el.dataset.id);
    document.querySelector('.canvas-container').hidden = false
    document.querySelector('.main-page').hidden = true
    drawImg()
}


function showMainPage(){
    document.querySelector('.canvas-container').hidden = true;
    document.querySelector('.main-page').hidden = false;
}