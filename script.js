let totalSlides = document.querySelectorAll('.slide--item').length // define a variavel totalSlides com a quantidade de todos os items que contêm dentro do elemento com a classe "slide--item"
let currentSlide = 0; // define a variavel currentSlide com o valor de 0

let sliderWidth = document.querySelector('.slider').clientWidth; // define a variavel sliderWidth com o tamanho da largura do conteúdo do elemento com a classe "slider" em pixels, excluindo as bordas e as margens

document.querySelector('.slide--width').style.width = `${sliderWidth * totalSlides}px`; // altera o style width do elemento com a classe "slide--width" para uma template string que multiplica a variavel 'sliderWith' pela variavel 'totalSlides' e define em pixels

document.querySelector('.slide--controls').style.width = `${sliderWidth}px`; // altera o style width do elemento com a classe "slide--controls" para uma template string da variavel 'sliderWidth' em pixels
 
document.querySelector('.slide--controls').style.height = `${document.querySelector('.slider').clientHeight}px`; // altera o style height do elemento com a classe "slide--controls" para o tamanho da altura em px do elemento com a classe 'slider'


function goPrev() { // inicio da função goPrev
    currentSlide--; // decrementa 1 número na variavel currentSlide
    if(currentSlide < 0) { // define a condição: se currentSlide for menor que 0;
        currentSlide = totalSlides - 1; // currentSlide irá ser definido com o número da variavel 'totalSlides' - 1, fazendo com que currentSlide se torne o último slide existente(o -1 é necessário pois começamos com 0 a contagem);
    }
    updateMargin(); // roda a função updateMargin
} // termina a função goPrev

function goNext() { // inicio da função goNext
    currentSlide++ // incrementa 1 número na variavel currentSlide 
    if(currentSlide > (totalSlides - 1)) { // define a condição: se currentSlide for maior que 'totalSlides - 1'(número total de Slides)
        currentSlide = 0; // currentSlide irá ser definido com o número 0, fazendo com que seja o primeiro slide existente
    }
    updateMargin(); // roda a função updateMargin
} // termina a função goNext

function updateMargin() { // inicia a função updateMargin
    let sliderItemWidth = document.querySelector('.slide--item').clientWidth; // define a variavel slideItemWidth com a largura do elemento com a classe 'slide--item'
    let newMargin = (currentSlide * sliderItemWidth ); // define a variavel newMargin com o resultado da multiplicação da variavel currentSlide com a variavel sliderItemWidth
    document.querySelector('.slide--width').style.marginLeft = `-${newMargin}px`; // altera o style marginLeft do elemento com a classe "slide--width" para o número negativo da variavel newMargin em pixels
}