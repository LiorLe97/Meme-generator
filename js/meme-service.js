'use strict'

const gCanvas = document.querySelector('.canvas');
const gCtx = gCanvas.getContext('2d')
let gtxtValue = '';
let startingPosX = (gCanvas.width / 2) - 70;
let startingPosY = (gCanvas.height / 2);
let gCurrImgId;
let gKeyWords = ['politics', 'animal', 'baby', 'this', 'sport', 'listen', 'you', 'movie', 'cheers']
let gSavedMemes = [];
const KEY = 'memes_db'


function init() {

}


let gImgs = [
    { id: 1, url: 'images/meme images-square/1.jpg', keywords: ['politics'] },
    { id: 2, url: 'images/meme images-square/2.jpg', keywords: ['animal'] },
    { id: 3, url: 'images/meme images-square/3.jpg', keywords: ['animal', 'baby'] },
    { id: 4, url: 'images/meme images-square/4.jpg', keywords: ['animal'] },
    { id: 5, url: 'images/meme images-square/5.jpg', keywords: ['baby'] },
    { id: 6, url: 'images/meme images-square/6.jpg', keywords: ['this'] },
    { id: 7, url: 'images/meme images-square/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'images/meme images-square/8.jpg', keywords: ['listen'] },
    { id: 9, url: 'images/meme images-square/9.jpg', keywords: ['baby'] },
    { id: 10, url: 'images/meme images-square/10.jpg', keywords: ['politics'] },
    { id: 11, url: 'images/meme images-square/11.jpg', keywords: ['sport'] },
    { id: 12, url: 'images/meme images-square/12.jpg', keywords: ['you'] },
    { id: 13, url: 'images/meme images-square/13.jpg', keywords: ['cheers'] },
    { id: 14, url: 'images/meme images-square/14.jpg', keywords: ['movie'] },
    { id: 15, url: 'images/meme images-square/15.jpg', keywords: ['this'] },
    { id: 16, url: 'images/meme images-square/16.jpg', keywords: ['movie'] },
    { id: 17, url: 'images/meme images-square/17.jpg', keywords: ['politics'] },
    { id: 18, url: 'images/meme images-square/18.jpg', keywords: ['movie'] },
];


let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'enter new text',
            size: 20,
            align: 'left',
            color: 'white',
            outline: 'black',
            font: 'Impact',
            isSelected: true,
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
        gMeme.lines.forEach(function (line) {
            drawText(line)
        })
    }

}

function drawText(line) {
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = `${line.outline}`
    if (line.isSelected) {
        gCtx.strokeStyle = 'red'
    }
    gCtx.fillStyle = `${line.color}`
    gCtx.fillText(line.txt, line.posX, line.posY)
    gCtx.strokeText(line.txt, line.posX, line.posY)

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
    document.querySelector('.editing-page').style.display = 'none';
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
    gMeme.lines[gMeme.selectedLineIdx].posY -= 10;
    drawImg()
}

function decreaseHeight() {
    gMeme.lines[gMeme.selectedLineIdx].posY += 10;
    drawImg()

}

function changeLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0;
    }
    gMeme.lines[gMeme.selectedLineIdx].isSelected = true
    if (gMeme.selectedLineIdx === 0) {
        gMeme.lines[gMeme.lines.length - 1].isSelected = false;
    } else {
        gMeme.lines[gMeme.selectedLineIdx - 1].isSelected = false;
    }
    drawImg();
}
function deleteLine() {
    let idx = findSelectedIdx()
    gMeme.lines.splice(idx, 1);

}

function findSelectedIdx() {
    let selectedMemeIdx = gMeme.lines.findIndex(line => {
        return line.isSelected;
    })
    return selectedMemeIdx;
}



function createNewLine() {
    gMeme.lines.push({
        txt: 'enter new text',
        size: 20,
        align: 'left',
        color: 'white',
        outline: 'black',
        font: 'Impact',
        isSelected: false,
        posY: startingPosY,
        posX: startingPosX
    })
}


function align(posX) {
    gMeme.lines[gMeme.selectedLineIdx].posX = posX
}

function selectFont(val) {
    gMeme.lines[gMeme.selectedLineIdx].font = val;

}
function changeFontColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].color = val;
}

function changeOutlineColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].outline = val;
}

function saveMeme(link) {
    link = link.replace(/\s+/g, '');
    gSavedMemes.unshift(link)
    _saveMemesToStorage();
}

function createMeme(link){
    let img = {
        id:getRandomInt(0,30),
        url:link
    }
    return img;
}



function getImgForDisplay() {
    let elSearch = document.querySelector('[name=search-bar]');
    let searchWord = elSearch.value;
    let filterdImgs = gImgs.filter(img => {
        return img.keywords.includes(searchWord);
    })
    if (!gKeyWords.includes(searchWord)) {
        return gImgs;
    }
    return filterdImgs;
}

function _saveMemesToStorage(){
    saveToStorage(KEY, gSavedMemes)
}






