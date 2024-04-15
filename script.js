document.addEventListener('DOMContentLoaded', function() {
    const thumbnail = document.querySelector('.thumbnail');
    const fullImageContainer = document.querySelector('.full-image');

    thumbnail.addEventListener('click', function() {
        fullImageContainer.classList.toggle('show');
    });

    fullImageContainer.querySelector('.full-size').addEventListener('click', function() {
        fullImageContainer.classList.toggle('show');
    });

    fullImageContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('close')) {
            fullImageContainer.classList.remove('show');
        }
    });
});

