document.addEventListener('DOMContentLoaded', function() {
    const thumbnail = document.querySelector('.thumbnail');
    const fullImageContainer = document.querySelector('.full-image');
    const fullImage = document.querySelector('.full-image img');
    const closeBtn = document.querySelector('.close');

    thumbnail.addEventListener('click', function() {
        fullImage.src = thumbnail.src;
        fullImageContainer.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        fullImageContainer.style.display = 'none';
    });
});
