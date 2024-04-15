document.addEventListener('DOMContentLoaded', function() {
    const thumbnail = document.querySelector('.thumbnail');
    const fullImageContainer = document.querySelector('.full-image');

    // Check if thumbnail and full-image container exist
    if (thumbnail && fullImageContainer) {
        // Add click event listener to thumbnail
        thumbnail.addEventListener('click', function() {
            // Toggle the "show" class on full-image container
            fullImageContainer.classList.toggle('show');
        });
        
        // Add click event listener to full-image container for closing
        fullImageContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('close')) {
                // If the close button is clicked, hide the full-image container
                fullImageContainer.classList.remove('show');
            }
        });
    } else {
        console.error('Thumbnail or full-image container not found.');
    }
});

