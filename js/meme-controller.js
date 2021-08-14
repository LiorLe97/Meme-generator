'use strict'
function init() {
    renderGallery();
    renderSavedMemes();
}

function renderGallery() {
    let imgs = getImgForDisplay();
    let strHTML = imgs.map(img => {
        return `<img class="gallery-img"onclick="onChooseImg(this) "data-id="${img.id}" src="${img.url}" alt="">`
    })

    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTML.join('')
}

function renderSavedMemes() {
    let imgs = loadFromStorage(KEY)
    let strHTML = imgs.map(img => {
        return `<img class="gallery-img src="${img}" alt="">`
    })
    let elSavedMemes = document.querySelector('.saved-meme-gallery');
    elSavedMemes.innerHTML = strHTML.join('');
}


function onChooseImg(el) {
    document.querySelector('.editing-page').style.display = 'flex';
    document.querySelector('.main-page').hidden = true;
    document.querySelector('.share-options').style.display = 'flex'
    chooseImg(el);
}

function onCreateNewLine() {
    createNewLine();
    drawImg();
}

function onDeleteLine() {
    deleteLine();
    drawImg();
}


function onAlign(posX) {
    align(posX)
    drawImg();
}

function onSelectFont(val) {
    selectFont(val);
    drawImg();
}

function onChangeTextColor(val) {
    changeFontColor(val);
    drawImg();
}

function onChangeOutlineColor(val) {
    changeOutlineColor(val);
    drawImg();
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}

function onGoToMemeGallery(ev) {
    ev.preventDefault();
    document.querySelector('.main-page').hidden = true;
    document.querySelector('.saved-meme-gallery').hidden = false;
}


function onSaveMeme(elLink) {
    const data = gCanvas.toDataURL();
    console.log(data)
    saveMeme(data)
}