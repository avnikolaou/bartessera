// Slide show functionality
let slideIndex = 0;
let mySlideshow;
let slides = document.getElementsByClassName("mySlides");

function scrollToDiv(e) {

    if(!e) {
        e = window.event;
    }

    let section = "scrollto-";
    let id = e.target.id;
    let destination = section.concat(id);
    console.log(destination);

    let elem = document.getElementById(destination);
    if (!!elem && elem.scrollIntoView) {
        elem.scrollIntoView({behavior: "smooth"});
    }
}

function minusSlides() {
    clearTimeout(mySlideshow);
    slideIndex -= 2;
    if (slideIndex < 0 ) {
        slideIndex = 2;
    }

    showSlides();
}

function plusSlides() {
    clearTimeout(mySlideshow);
    showSlides();
}

function showSlides() {
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex >= slides.length) {slideIndex = 0}
    slides[slideIndex ].style.display = "block";
    slideIndex ++;
    mySlideshow = setTimeout(showSlides, 7000); // Change image every 7 seconds
}

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    let element = document.getElementById("topScroll");
    element.scrollIntoView({behavior: "smooth"});
}