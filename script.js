
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


//DI popup
var deliverybutton = document.getElementById("link-popup-delivery");
var deliverycontent = document.getElementById("content-delivery");
var customisebutton = document.getElementById("link-popup-customise");
var customisecontent = document.getElementById("content-customise");
var cooperatebutton = document.getElementById("link-popup-cooperate");
var cooperatecontent = document.getElementById("content-cooperate");

deliverybutton.addEventListener('click', () => {
    document.querySelector('#global-nav-menu-list').classList.toggle('popup-open');
    document.querySelector('.global-nav-menu-list').removeAttribute('onclick');
    document.querySelector('#global-nav-curtain').classList.toggle('popup-open');
    document.querySelector('#global-nav-stp').classList.remove('active');
    deliverycontent.style.display = "block";
    customisecontent.style.display = "none";
    cooperatecontent.style.display = "none";
    document.querySelector('#global-nav-curtain').addEventListener('click', () => {
        document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
        document.querySelector('#global-nav-curtain').classList.remove('popup-open');
        document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
        deliverycontent.style.display = "none";
        customisecontent.style.display = "none";
        cooperatecontent.style.display = "none";

        //close the DI and add STP button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.querySelector('#global-nav-stp').classList.add('active');
        } else {
            document.querySelector('#global-nav-stp').classList.remove('active');
        };
    });

    //add function when scroll
    window.addEventListener('scroll', yFunction);

    //close the DI when scroll the window
    function yFunction(){
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
            document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
            document.querySelector('#global-nav-curtain').classList.remove('popup-open');
            document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
            deliverycontent.style.display = "none";
            customisecontent.style.display = "none";
            cooperatecontent.style.display = "none";

            //close the DI and add STP button
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                document.querySelector('#global-nav-stp').classList.add('active');
            } else {
                document.querySelector('#global-nav-stp').classList.remove('active');
            };
        };
    };
});

customisebutton.addEventListener('click', () => {
    document.querySelector('#global-nav-menu-list').classList.toggle('popup-open');
    document.querySelector('.global-nav-menu-list').removeAttribute('onclick');
    document.querySelector('#global-nav-curtain').classList.toggle('popup-open');
    document.querySelector('#global-nav-stp').classList.remove('active');
    deliverycontent.style.display = "none";
    customisecontent.style.display = "block";
    cooperatecontent.style.display = "none";
    document.querySelector('#global-nav-curtain').addEventListener('click', () => {
        document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
        document.querySelector('#global-nav-curtain').classList.remove('popup-open');
        document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
        deliverycontent.style.display = "none";
        customisecontent.style.display = "none";
        cooperatecontent.style.display = "none";

        //close the DI and add STP button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.querySelector('#global-nav-stp').classList.add('active');
        } else {
            document.querySelector('#global-nav-stp').classList.remove('active');
        };
    });

    //add function when scroll
    window.addEventListener('scroll', yFunction);

    //close the DI when scroll the window
    function yFunction(){
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
            document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
            document.querySelector('#global-nav-curtain').classList.remove('popup-open');
            document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
            deliverycontent.style.display = "none";
            customisecontent.style.display = "none";
            cooperatecontent.style.display = "none";

            //close the DI and add STP button
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                document.querySelector('#global-nav-stp').classList.add('active');
            } else {
                document.querySelector('#global-nav-stp').classList.remove('active');
            };
        };
    };
});

cooperatebutton.addEventListener('click', () => {
    document.querySelector('#global-nav-menu-list').classList.toggle('popup-open');
    document.querySelector('.global-nav-menu-list').removeAttribute('onclick');
    document.querySelector('#global-nav-curtain').classList.toggle('popup-open');
    document.querySelector('#global-nav-stp').classList.remove('active');
    deliverycontent.style.display = "none";
    customisecontent.style.display = "none";
    cooperatecontent.style.display = "block";
    document.querySelector('#global-nav-curtain').addEventListener('click', () => {
        document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
        document.querySelector('#global-nav-curtain').classList.remove('popup-open');
        document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
        deliverycontent.style.display = "none";
        customisecontent.style.display = "none";
        cooperatecontent.style.display = "none";

        //close the DI and add STP button
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.querySelector('#global-nav-stp').classList.add('active');
        } else {
            document.querySelector('#global-nav-stp').classList.remove('active');
        };
    });

    //add function when scroll
    window.addEventListener('scroll', yFunction);

    //close the DI when scroll the window
    function yFunction(){
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
            document.querySelector('#global-nav-menu-list').classList.remove('popup-open');
            document.querySelector('#global-nav-curtain').classList.remove('popup-open');
            document.querySelector('.global-nav-menu-list').addEventListener('click', opennavFunction);
            deliverycontent.style.display = "none";
            customisecontent.style.display = "none";
            cooperatecontent.style.display = "none";

            //close the DI and add STP button
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                document.querySelector('#global-nav-stp').classList.add('active');
            } else {
                document.querySelector('#global-nav-stp').classList.remove('active');
            };
        };
    };
});

// Rice cake page flavor function
function selectFlavorFunction() {
    var original = document.getElementById('original-f');
    var pandan = document.getElementById('pandan-f');
    var fuzhouRiceCake = document.getElementById('fuzhou-rice-cake');
    var pandanRiceCake = document.getElementById('pandan-rice-cake');

    if (original.checked) {
        fuzhouRiceCake.style.display = "block";
        pandanRiceCake.style.display = "none";
        document.getElementById('rc-flavour-title').innerHTML = "Flavour - " + original.value;
    } else if (pandan.checked) {
        fuzhouRiceCake.style.display = "none";
        pandanRiceCake.style.display = "block";
        document.getElementById('rc-flavour-title').innerHTML = "Flavour - " + pandan.value;
    }
}
