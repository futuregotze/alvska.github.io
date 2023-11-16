document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display blog posts
    function fetchAndDisplayBlogPosts() {
        // Assuming you have posts from post1.json to post5.json
        const postPromises = Array.from({ length: 5 }, (_, index) => {
            const postNumber = index + 1;
            return fetch(`doc-posts/post${postNumber}.json`)
                .then(response => response.json());
        });

        Promise.all(postPromises)
            .then(posts => {
                // Assuming data is an array of blog posts
                // Filter the posts to find the featured post
                const featuredPost = posts.find(post => post.featured === true);

                if (featuredPost) {
                    // Display the featured post
                    const featuredPostSection = document.querySelector('.featured-post');
                    const featuredPostHTML = `
                        <div class="post-card">
                            <h2>${featuredPost.title}</h2>
                            <p>${featuredPost.content}</p>
                            <!-- Add more content as needed -->
                        </div>
                    `;
                    featuredPostSection.innerHTML = featuredPostHTML;
                }

                // Display other posts in a horizontal carousel
                const otherPostsContainer = document.querySelector('.other-posts .carousel-container');
                const otherPosts = posts.filter(post => post.featured !== true);

                // You may want to loop through multiple posts and create HTML dynamically
                const otherPostsHTML = otherPosts.map(post => `
                    <div class="post-card">
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                        <!-- Add more content as needed -->
                    </div>
                `).join('');

                otherPostsContainer.innerHTML = otherPostsHTML;
            })
            .catch(error => console.error('Error fetching blog posts:', error));
    }

    // Initial call to fetch and display blog posts when the page loads
    fetchAndDisplayBlogPosts();

    // Set up periodic refresh (every 5 minutes)
    setInterval(fetchAndDisplayBlogPosts, 5 * 60 * 1000);
});
