const slides = document.getElementById("slides");

let index = 0;
const total = slides.children.length;

setInterval(() => {
    index++;

    if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translatex(-${index * 403}px)`;
}, 5000);