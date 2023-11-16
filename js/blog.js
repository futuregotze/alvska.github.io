document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display blog posts
    function fetchAndDisplayBlogPosts() {
        // Your logic to fetch blog post data (e.g., using fetch API)
        // Once you have the data, update the HTML to display blog posts in the carousel
        // Example: You can use the fetch API to get JSON data from your server
        fetch('doc-posts/post1.json')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an object with properties like "name", "content", etc.
                // You can dynamically create HTML elements to display the blog post
                const postContainer = document.querySelector('.post-carousel'); // Adjust the selector
                const postCard = document.createElement('div');
                postCard.classList.add('post-card');

                // Customize the HTML structure based on your post data
                postCard.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${data.content}</p>
                    <!-- Add more content as needed -->
                `;

                postContainer.appendChild(postCard);
            })
            .catch(error => console.error('Error fetching blog posts:', error));
    }

    // Call the function to display blog posts when the page loads
    fetchAndDisplayBlogPosts();
});
