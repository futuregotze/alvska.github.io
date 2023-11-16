(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display blog posts
    async function fetchBlogPosts() {
      const featuredPostContainer = document.querySelector(".featured-post");
      const carouselContainer = document.querySelector(".carousel-container");

      // Fetch featured post HTML
      const featuredPostResponse = await fetch("path/to/featured-post.html");
      const featuredPostHTML = await featuredPostResponse.text();
      featuredPostContainer.innerHTML = featuredPostHTML;

      // Fetch and display other posts in the carousel
      const postIDs = ["post1", "post2", "post3", "post4"];
      for (const postID of postIDs) {
        const postResponse = await fetch(`path/to/${postID}.html`);
        const postHTML = await postResponse.text();

        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = postHTML;

        carouselContainer.appendChild(postCard);
      }

      // Initialize the Slick Carousel
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
    }

    // Call the function to fetch and display blog posts
    fetchBlogPosts();
  });
})();
