//Nav
//click button to open DI
function opennavFunction() {
    const selectElement = (element) => document.querySelector(element);

    selectElement('#global-nav-menu-list').classList.toggle('open');
    selectElement('#global-nav-curtain').classList.toggle('open');
    selectElement('#global-nav-stp').classList.remove('active');

    //add function to curtain and click curtain to close
    selectElement('#global-nav-curtain').addEventListener('click', () => {
        selectElement('#global-nav-menu-list').classList.remove('open');
        selectElement('#global-nav-curtain').classList.remove('open');

        //close the DI and add STP button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            selectElement('#global-nav-stp').classList.add('active');
        } else {
            selectElement('#global-nav-stp').classList.remove('active');
        };
    });

    //close the DI when click the button inside
    selectElement('.global-nav-submenu-link').addEventListener('click', () => {
        selectElement('#global-nav-menu-list').classList.remove('open');
        selectElement('#global-nav-curtain').classList.remove('open');
    });

    //add function when scroll
    window.addEventListener('scroll', xFunction);

    //close the DI when scroll the window
    function xFunction(){
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
            selectElement('#global-nav-menu-list').classList.remove('open');
            selectElement('#global-nav-curtain').classList.remove('open');

            //close the DI and add STP button
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                selectElement('#global-nav-stp').classList.add('active');
            } else {
                selectElement('#global-nav-stp').classList.remove('active');
            };
        };
    };
};

//Slide to Top (STP)
//when scroll the window show the STP buttton
window.addEventListener('scroll', showScrollButton);

function showScrollButton(){
    var scrollBtn = document.getElementById('global-nav-stp');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    };
};

//scroll the window to top
function scrollToTop(){
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0){
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10);
    };
};

//Image Gallery
let imageIndex = 1;
showImages(imageIndex);

function nextImages(n){
    showImages(imageIndex += n);
}

function currentImage(n) {
    showImages(imageIndex = n);
}

function showImages(n){
    let i;
    let images = document.getElementsByClassName("gallery-item");
    let dots = document.getElementsByClassName("dot-item");
    
    if (n > images.length){
        imageIndex = 1
    }

    if (n < 1){
        imageIndex = images.length
    }

    for (i = 0; i < images.length; i++){
        images[i].className = images[i].className.replace(" current","");
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" current","");
    }

    images[imageIndex-1].className += " current";
    dots[imageIndex-1].className += " current";
}