let slideIndex = 1;
showSlides(slideIndex);

// Next/prev controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail img controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("partnerSlide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

const videoSlide = document.querySelector(".videoSlide")

function scrollVideosLeft(l) {

    videoSlide.style.justifyContent = l;

}

function scrollVideosRight(r) {

    videoSlide.style.justifyContent = r;

}
