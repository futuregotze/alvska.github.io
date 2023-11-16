(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const featuredPostContainer = document.querySelector(".featured-post .featured-content");
    const carouselContainer = document.getElementById("other-posts-carousel");
    const loadMoreButton = document.getElementById("load-more-button");

    // Number of posts to load at a time
    const postsPerPage = 5;
    let currentPage = 1;

    function displayPost(container, content) {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");
      postCard.innerHTML = content;

      container.appendChild(postCard);
    }

    async function loadMorePosts(start, end) {
      for (let i = start; i <= end; i++) {
        try {
          const postContent = await fetchPost(`./doc-posts/post${i}.html`);
          displayPost(carouselContainer, postContent);
        } catch (error) {
          console.error("Error loading post:", error);
        }
      }
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
      loadMoreButton.addEventListener("click", () => {
        const start = currentPage * postsPerPage + 1;
        const end = (currentPage + 1) * postsPerPage;
        loadMorePosts(start, end);
        currentPage++;
      });

      // Initial load of posts
      loadMorePosts(1, postsPerPage);
      currentPage++;
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
  });
})();
