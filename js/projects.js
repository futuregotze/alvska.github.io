// JavaScript file for handling button click event and redirection

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener after the DOM is fully loaded
    document.getElementById('my-work-link').addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // You can add additional logic here if needed
        // For now, simply redirect to ./tree.html
        window.location.href = './tree.html';
    });
});
