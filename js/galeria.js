// script.js

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

images.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = img.src;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
