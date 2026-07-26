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

const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  background.style.transform =
    `translate(${x * 15}px, ${y * 15}px)`;
});