'use strict'
function init(){
    renderGallery();
}

function renderGallery() {
    let imgs = getImgForDisplay();
    let strHTML = imgs.map(img => {
        return `<img onclick="onChooseImg(this) "data-id="${img.id}" src="${img.url}" alt="">`
    })

    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTML.join('')
}


function onChooseImg(el) {
    document.querySelector('.editing-page').style.display = 'flex';
    document.querySelector('.main-page').hidden = true;
    chooseImg(el);
}