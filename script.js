let totalSlides = document.querySelectorAll('.slide--item').length
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slide--width').style.width = `${sliderWidth * totalSlides}px`;

document.querySelector('.slide--controls').style.width = 
    `${sliderWidth}px`;

    
document.querySelector('.slide--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;



function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slide--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth );
    document.querySelector('.slide--width').style.marginLeft = 
        `-${newMargin}px`;
}