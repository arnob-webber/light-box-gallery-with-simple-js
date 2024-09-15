
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const caption = document.getElementById("caption");
const thumbnails = document.querySelectorAll(".thumbnail");

let currentIndex = 0;


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImage.src = this.getAttribute("data-full");
        caption.innerText = this.alt;
        currentIndex = index;
    });
});


const close = document.querySelector(".close");
close.addEventListener("click", function() {
    lightbox.style.display = "none";
});


const prev = document.querySelector(".prev");
prev.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].getAttribute("data-full");
    caption.innerText = thumbnails[currentIndex].alt;
});


const next = document.querySelector(".next");
next.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].getAttribute("data-full");
    caption.innerText = thumbnails[currentIndex].alt;
});


lightbox.addEventListener("click", function(e) {
    if (e.target !== lightboxImage && e.target !== prev && e.target !== next) {
        lightbox.style.display = "none";
    }
});

const footerSection = document.createElement('div');
footerSection.textContent = '© 2024 by Arnob';
footerSection.style.textAlign = 'center';
footerSection.style.padding = '10px';
footerSection.style.fontSize = '14px';
footerSection.style.color = '#333';
document.body.appendChild(footerSection);

