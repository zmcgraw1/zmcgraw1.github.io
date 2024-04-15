document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded

    // Select the thumbnail and full-image container
    const thumbnail = document.querySelector('.thumbnail');
    const fullImageContainer = document.querySelector('.full-image');

    // Check if thumbnail and full-image container exist
    if (thumbnail && fullImageContainer) {
        // Add click event listener to thumbnail
        thumbnail.addEventListener('click', function() {
            fullImageContainer.classList.toggle('show');
        });

        // Add click event listener to full-image for closing
        fullImageContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('close')) {
                fullImageContainer.classList.remove('show');
            }
        });
    } else {
        console.error('Thumbnail or full-image container not found.');
    }
});

