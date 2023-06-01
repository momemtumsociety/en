//Nav
//click button to open DI
function opennavFunction() {
    const selectElement = (element) => document.querySelector(element);
    var target = document.getElementById('menu-list');
    var targethigh = target.offsetHeight;

    if (targethigh === 33) {
        selectElement('#global-nav-menu-list').classList.add('open');
        selectElement('#global-nav-curtain').classList.add('open');
        selectElement('#global-nav-stp').classList.remove('active');
    }

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

// Image Gallery
let imageIndex = 1;
showImages(imageIndex);

function nextImages(n) {
    showImages(imageIndex += n);
}

function currentImage(n) {
    showImages(imageIndex = n);
}

function showImages(n) {
    let i;
    let images = document.getElementsByClassName("gallery-item");
    let dots = document.getElementsByClassName("dot-item");

    if (n > images.length) {
        imageIndex = 1;
    }

    if (n < 1) {
        imageIndex = images.length;
    }

    for (i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(" current", "");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }

    images[imageIndex - 1].className += " current";
    dots[imageIndex - 1].className += " current";
}


// DI Timer
var timer;
var timeLeft = 0;
var isPlay = false;
var scrollEnabled = false;

function openTimer(){
    var menulist = document.getElementById('global-nav-menu-list');
    var navmenulist = document.getElementById('menu-list');

    menulist.classList.add('timer-open');
    navmenulist.removeAttribute('onclick');
    menulist.classList.remove('timer-open-form3');


    if (!scrollEnabled){
        window.addEventListener('scroll', scaleFunction);
        scrollEnabled = true;
    }
}

function closeTimer(){
    var menulist = document.getElementById('global-nav-menu-list');
    var navmenulist = document.getElementById('menu-list');

    menulist.classList.remove('timer-open');
    navmenulist.setAttribute('onclick', 'opennavFunction()');
    clearInterval(timer);
    resetTimer();

    if (scrollEnabled){
        window.removeEventListener('scroll', scaleFunction);
        scrollEnabled = false;
    }
    return;
}

function scaleFunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        var menulist = document.getElementById('global-nav-menu-list');
        var navmenulist = document.getElementById('menu-list');

        menulist.classList.add('timer-open-form3');
        navmenulist.setAttribute('onclick', 'openTimer()');
    }
}

function setTime(seconds) {
    var showstartbtn = document.querySelector(".start-puase-button");

    showstartbtn.style.display = "flex";
    timeLeft = seconds;
    updateTimer();
}

function spTimer() {
    var playicon = document.getElementById('timer-play-icon');
    var reseticon = document.getElementById('timer-reset-icon');
    var stopicon = document.getElementById('timer-stop-icon');
    var timeselector = document.querySelector('.menu-timer-selector');
    var menulist = document.getElementById('global-nav-menu-list');

    if (!isPlay && timeLeft > 0){
        isPlay = true;
        playicon.style.display = "none";
        reseticon.style.display = "block";
        stopicon.style.display = "none";
        timeselector.style.display = "none";
        menulist.classList.add('timer-open-form2');
        timer = setInterval(countdown, 1000);
    } else{
        isPlay = false;
        clearInterval(timer);
        updateTimer();
    }
}

function resetTimer(){
    isPlay = false;
    var playicon = document.getElementById('timer-play-icon');
    var reseticon = document.getElementById('timer-reset-icon');
    var stopicon = document.getElementById('timer-stop-icon');
    var timeselector = document.querySelector('.menu-timer-selector');
    var menulist = document.getElementById('global-nav-menu-list');
    var showstartbtn = document.querySelector(".start-puase-button");

    playicon.style.display = "block";
    reseticon.style.display = "none";
    stopicon.style.display = "none";
    timeselector.style.display = "block";
    menulist.classList.remove('timer-open-form2');
    showstartbtn.style.display = "none";
    clearInterval(timer);
    timeLeft = 0;
    updateTimer();
}

function stopTimer() {
    isPlay = false;
    var playicon = document.getElementById('timer-play-icon');
    var reseticon = document.getElementById('timer-reset-icon');
    var stopicon = document.getElementById('timer-stop-icon');
    var timeselector = document.querySelector('.menu-timer-selector');
    var notification = document.getElementById('audio');
    var menulist = document.getElementById('global-nav-menu-list');
    var showstartbtn = document.querySelector(".start-puase-button");

    playicon.style.display = "block";
    reseticon.style.display = "none";
    stopicon.style.display = "none";
    timeselector.style.display = "block";
    menulist.classList.remove('timer-open-form2');
    showstartbtn.style.display = "none";
    clearInterval(timer);
    stopSound();

    function stopSound(){
        notification.pause();
        notification.currentTime = 0;
    }
}

function countdown() {
    var playicon = document.getElementById('timer-play-icon');
    var reseticon = document.getElementById('timer-reset-icon');
    var stopicon = document.getElementById('timer-stop-icon');
    var notification = document.getElementById('audio');
    var menulist = document.getElementById('global-nav-menu-list');

    if (timeLeft <= 0) {
        playicon.style.display = "none";
        reseticon.style.display = "none";
        stopicon.style.display = "block";
        menulist.classList.remove('timer-open-form3');
        clearInterval(timer);
        playSound();
        isPlay = false;
        return;

        function playSound(){
            notification.loop = true;
            notification.play();
        }
    }
    timeLeft--;
    updateTimer();
}

function updateTimer() {
    var minutes = Math.floor((timeLeft % 3600) / 60);
    var seconds = timeLeft % 60;

    var formattedTime = padZero(minutes) + ":" + padZero(seconds);
    document.getElementById('timer-countdown').textContent = formattedTime;
}

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}
