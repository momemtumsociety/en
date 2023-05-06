var globalbutton = document.getElementById("global-er-button");
var flyout = document.getElementById("global-flyout-background");
var htmlTag = document.documentElement;

let isExpanded = false;

globalbutton.addEventListener("click", function(){
    if (isExpanded) {
        flyout.classList.remove("flyout-open");
        globalbutton.textContent = "Expand";
        globalbutton.style.background = "#9ACD32";
        htmlTag.classList.remove("global-nav-noscroll");
        isExpanded = false;
    } else {
        flyout.classList.add("flyout-open");
        globalbutton.textContent = "Retract";
        globalbutton.style.background = "#9ACD32";
        htmlTag.classList.add("global-nav-noscroll");
        isExpanded = true;
    }
});

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