let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let profile = document.getElementById("profile");
let text = document.getElementById("text");
let desk = document.getElementById("desk");
let opini = document.getElementById("opini");

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    bg.style.top = value * 0.15 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    profile.style.top = value * 1 + 'px';
    text.style.top = value * 1 + 'px';
    desk.style.top = value * 1 + 'px';
    opini.style.top = value * 1 + 'px';
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});