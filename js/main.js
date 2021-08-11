'use strict'

renderGallery()

function renderGallery(){
    let strHTML = gImgs.map(img=>{
       return `<img onclick="showId(this) "data-id="${img.id}" src="${img.url}" alt="">`
    })
    
    let elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTML.join('')
}