'use strict'

const gCanvas = document.querySelector('.canvas');
const gCtx = gCanvas.getContext('2d')
let gtxtValue = '';
let startingPosX = gCanvas.width / 2
let startingPosY = gCanvas.height / 2
let gCurrImgId;
console.log(gCanvas.width)


function init() {

}


let gImgs = [
    { id: 1, url: 'images/meme images-square/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/meme images-square/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/meme images-square/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'images/meme images-square/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'images/meme images-square/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'images/meme images-square/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'images/meme images-square/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'images/meme images-square/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'images/meme images-square/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'images/meme images-square/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'images/meme images-square/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'images/meme images-square/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'images/meme images-square/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'images/meme images-square/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'images/meme images-square/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'images/meme images-square/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'images/meme images-square/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'images/meme images-square/18.jpg', keywords: ['happy'] },
];


let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'enter new text',
            size: 20,
            align: 'left',
            color: 'red',
            posY: startingPosY,
            posX: startingPosX
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            posY: startingPosY,
            posX: startingPosX
        }
    ]
}
function drawImg() {
    let img = new Image()
    img.src = getMemeById(gMeme.selectedImgId).url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
       gMeme.lines.forEach(function (line){
           drawText(line.txt, line.posX, line.posY)
       })
    }

}

function drawText(txt, x, y) {
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px impact`;
    gCtx.fillText(txt, x, y);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)

}





//console.log(getMemeById(gMeme.selectedImgId))

function getMemeById(memeId) {
    let meme = gImgs.find(function (img) {
        return memeId === img.id
    });
    return meme;
}

function onSetText(val) {
    gMeme.lines[gMeme.selectedLineIdx].txt = val;
   drawImg()
}

function chooseImg(el) {
    gMeme.selectedImgId = +(el.dataset.id);
    drawImg()
}


function showMainPage() {
    document.querySelector('.editing-page').hidden = true;
    document.querySelector('.main-page').hidden = false;
}


function onLarger() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10;
    drawImg()
}
function onSmaller() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10;
    drawImg()
}

function increaseHeight() {
    gMeme.lines[gMeme.selectedLineIdx].posY--;
    drawImg()
}

function decreaseHeight() {
    gMeme.lines[gMeme.selectedLineIdx].posY++;
    drawImg()

}

function changeLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0;
    }
    
}



// function renderCanvas() {
//     gCtx.save();
//     drawImg();
//     gCtx.restore();
// }