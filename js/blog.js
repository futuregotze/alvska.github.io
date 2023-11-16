(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const featuredPostContainer = document.querySelector(".featured-post");
    const carouselContainer = document.querySelector(".carousel-container");
    const loadMoreButton = document.querySelector("#load-more-button");

    // Number of posts to load at a time
    const postsPerPage = 5;
    let currentPage = 1;

    function displayPost(content) {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");
      postCard.innerHTML = content;

      carouselContainer.appendChild(postCard);
    }

    function loadMorePosts() {
      // Use a fetch function to load posts dynamically
      fetchPost(`./doc-posts/post${currentPage}.html`)
        .then((postContent) => {
          displayPost(postContent);
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
          displayFeaturedPost(featuredPostContent);
        })
        .catch((error) => {
          console.error("Error loading featured post:", error);
        });

      // Load more posts when the button is clicked
      loadMoreButton.addEventListener("click", loadMorePosts);
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

    // Function to display the featured post
    function displayFeaturedPost(featuredPostContent) {
      featuredPostContainer.innerHTML = featuredPostContent;
    }

    // Call the function to fetch and display blog posts
    fetchBlogPosts();
  });
})();
