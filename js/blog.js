document.addEventListener("DOMContentLoaded", function () {
    const featuredPostContainer = document.querySelector(".featured-post .featured-content");
    const carouselContainer = document.getElementById("documentation-container"); // Updated container ID
    const loadMoreButton = document.getElementById("load-more-button");

    // Number of posts to load at a time
    const postsPerPage = 5;
    let currentPage = 1;

    function displayPost(container, content, postId) {
        const postCard = document.createElement("a");
        postCard.classList.add("post-card");
        postCard.href = `./doc-posts/post${postId}.html`; // Link to the full content HTML file
        postCard.innerHTML = content;

        container.appendChild(postCard);
    }

    function loadMorePosts() {
        // Use a fetch function to load posts dynamically
        fetchPost(`./doc-posts/post${currentPage}.html`)
            .then((postContent) => {
                displayPost(carouselContainer, postContent, currentPage);
                currentPage++;
            })
            .catch((error) => {
                console.error("Error loading post:", error);
            });
    }

    // Function to fetch and display blog posts
    function fetchBlogPosts() {
        // Fetch featured post HTML
        fetchPost("./doc-posts/featured-post.html")
            .then((featuredPostContent) => {
                // Display the featured post
                displayPost(featuredPostContainer, featuredPostContent);
            })
            .catch((error) => {
                console.error("Error loading featured post:", error);
            });

        // Load more posts when the button is clicked
        if (loadMoreButton) {
            loadMoreButton.addEventListener("click", loadMorePosts);
        }

        // Initial load of posts
        loadMorePosts();
    }

    // Function to fetch a single post from an HTML file
    async function fetchPost(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`);
        }

        const postContent = await response.text();
        return postContent;
    }

    // Call the function to fetch and display blog posts
    fetchBlogPosts();

    // Initialize the Slick Carousel for the blog post carousel
    $('.post-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Add any additional script code specific to your blog page
});
