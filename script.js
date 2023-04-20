var globalbutton = document.getElementById("global-er-button");
var flyout = document.getElementById("global-flyout-background");
var htmlTag = document.documentElement;

let isExpanded = false;

globalbutton.addEventListener("click", function(){
    if (isExpanded){
        flyout.classList.remove("flyout-open");
        globalbutton.textContent = "Expand";
        globalbutton.style.background = "#9ACD32";
        htmlTag.classList.remove("global-nav-noscroll")
        isExpanded = false;
    } else {
        flyout.classList.add("flyout-open");
        globalbutton.textContent = "Retract";
        globalbutton.style.background = "#9ACD32";
        htmlTag.classList.add("global-nav-noscroll");
        isExpanded = true;
    }
});

var deliverybutton = document.getElementById("link-popup-delivery");
var deliverycontent = document.getElementById("content-delivery");
var customisebutton = document.getElementById("link-popup-customise");
var customisecontent = document.getElementById("content-customise");
var cooperatebutton = document.getElementById("link-popup-cooperate");
var cooperatecontent = document.getElementById("content-cooperate");
var closebutton = document.getElementById("global-popup-close");
var popup = document.getElementById("global-popup");
var popupoutline = document.querySelector(".global-popup-outline");

deliverybutton.addEventListener("click", function(){
    popup.classList.add("open");
    htmlTag.classList.add("popup-open");
    deliverycontent.style.display = "block";
    customisecontent.style.display = "none";
    cooperatecontent.style.display = "none";
});

customisebutton.addEventListener("click", function(){
    popup.classList.add("open");
    htmlTag.classList.add("popup-open");
    deliverycontent.style.display = "none";
    customisecontent.style.display = "block";
    cooperatecontent.style.display = "none";
});

cooperatebutton.addEventListener("click", function(){
    popup.classList.add("open");
    htmlTag.classList.add("popup-open");
    deliverycontent.style.display = "none";
    customisecontent.style.display = "none";
    cooperatecontent.style.display = "block";
});

closebutton.addEventListener("click", function(){
    popup.classList.remove("open");
    htmlTag.classList.remove("popup-open");
});

popup.addEventListener("click", function(event){
    if (event.target == this){
        popup.classList.remove("open");
        htmlTag.classList.remove("popup-open");
    }
});