'use strict'
function init() {
    renderGallery();
}

function renderGallery() {
    let imgs = getImgForDisplay();
    let strHTML = imgs.map(img => {
        return `<img class="gallery-img"onclick="onChooseImg(this) "data-id="${img.id}" src="${img.url}" alt="">`
    })

    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTML.join('')
}


function onChooseImg(el) {
    document.querySelector('.editing-page').style.display = 'flex';
    document.querySelector('.main-page').hidden = true;
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

function onChangeTextColor(val){
    changeFontColor(val);
    drawImg();
}

function onChangeOutlineColor(val){
    changeOutlineColor(val);
    drawImg();
}