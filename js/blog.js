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
                const featuredPostSection = document.querySelector('.featured-post');
                const otherPostsContainer = document.querySelector('.other-posts .carousel-container');

                // Display the featured post
                const featuredPostHTML = `
                    <div class="post-card">
                        <h2>${data.name}</h2>
                        <p>${data.content}</p>
                        <!-- Add more content as needed -->
                    </div>
                `;
                featuredPostSection.innerHTML = featuredPostHTML;

                // Display other posts in a horizontal carousel
                // You may want to loop through multiple posts and create HTML dynamically
                const otherPostsHTML = `
                    <div class="post-card">
                        <!-- Other post content -->
                    </div>
                    <!-- Add more post cards as needed -->
                `;
                otherPostsContainer.innerHTML = otherPostsHTML;
            })
            .catch(error => console.error('Error fetching blog posts:', error));
    }

    // Call the function to display blog posts when the page loads
    fetchAndDisplayBlogPosts();
});
