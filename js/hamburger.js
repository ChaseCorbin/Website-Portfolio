(function () {
    const menuBtn = document.querySelector('.nav');
    const filterScreen = document.querySelector('.filterScreen');
    let menuOpen = false;
    let filterOn = false;
    menuBtn.addEventListener('click', function() {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            filterScreen.classList.add('filterOn')
            filterOn = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            filterScreen.classList.remove('filterOn')
            filterOn = false;
        }
    });
})();