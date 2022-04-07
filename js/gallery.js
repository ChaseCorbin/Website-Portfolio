const track = document.querySelector('.carousel-track');
const slide = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-button-right');
const prevBtn = document.querySelector('.carousel-button-left');
// get size of first slide to move the slides 
const slideSize = slide[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// set slide positions next to each other for the transition
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'; 
}
slide.forEach(setSlidePosition);
// console.log(slideWidth);

const changeSlide = (track, currentSlide, targetSlide) => {
    // move to next slide 
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}

// function to remove arrows when at end of slides
const addRemoveBtn = (slide, nextBtn, prevBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('hideBtn'); 
        nextBtn.classList.remove('hideBtn');
    } else if (targetIndex === slide.length -1) {
        prevBtn.classList.remove('hideBtn'); 
        nextBtn.classList.add('hideBtn');
    } else {
        prevBtn.classList.remove('hideBtn'); 
        nextBtn.classList.remove('hideBtn');
    }
}


// move to previous slide when clicking next button 
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    // console.log(currentSlide);
    const prevSlide = currentSlide.previousElementSibling;
    // console.log(nextSlide);
    const prevIndex = slide.findIndex(slide => slide === prevSlide);
    changeSlide(track, currentSlide, prevSlide);
    addRemoveBtn(slide, nextBtn, prevBtn, prevIndex);
})

// move to next slide when clicking next button 
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    // console.log(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    // console.log(nextSlide);
    const nextIndex = slide.findIndex(slide => slide === nextSlide);
    changeSlide(track, currentSlide, nextSlide);
    addRemoveBtn(slide, nextBtn, prevBtn, nextIndex);
})










