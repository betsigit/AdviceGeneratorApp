const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('..right-slider')
const sliderLeft = document.querySelector('.left-slider')
const UpButton = document.querySelector('.up-button')
const DownButton = document.querySelector('.down.button')
const slidesLength = sliderRight.querySelectorAll('div').length
let activeSlideIndex = 0
sliderLeft.styel.top = `-${(slidesLength-1)*100}vh`