var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.navigation__btn');
let currentSlide = 1;


var manualNav = function(manual) {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    buttons.forEach((button) => {
        button.classList.remove('active');
    })

    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach( (button, i) => {
    button.addEventListener('click', () => {
        manualNav(i);
        currentSlide = 1;
    })

var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {

            setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            })
            

            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++;

            if(slides.length == i) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeater();
        }, 8000);
    }
    repeater();
}
repeat();
}) 