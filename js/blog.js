document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch and display blog posts
  function fetchAndDisplayPosts() {
    // Assuming you have an array of post filenames
    const postFilenames = ["post1.json", "post2.json", "post3.json", "post4.json"];

    // Reference to the carousel container
    const carouselContainer = document.getElementById("other-posts-carousel");

    // Function to fetch the full content of a post
    function fetchPostContent(filename) {
      return fetch(`doc-posts/${filename}`)
        .then((response) => response.json())
        .then((post) => {
          return `
            <h2>${post.name}</h2>
            <p class="date">Published on: ${post.date}</p>
            <img src="${post.image}" alt="${post.name} Image">
            <p class="tags">Tags: ${post.tags.join(", ")}</p>
            <div class="full-content">${post.content}</div>
          `;
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          return "Error loading post content.";
        });
    }

    // Fetch and display each post
    postFilenames.forEach((filename) => {
      fetch(`doc-posts/${filename}`)
        .then((response) => response.json())
        .then((post) => {
          // Create a post card
          const postCard = document.createElement("div");
          postCard.classList.add("post-card");

          // Populate the post card with data from the JSON
          postCard.innerHTML = `
            <h2>${post.name}</h2>
            <p class="date">Published on: ${post.date}</p>
            <img src="${post.image}" alt="${post.name} Image">
            <p class="tags">Tags: ${post.tags.join(", ")}</p>
            <!-- Add a link to the full post content -->
            <a href="#" class="read-more-link" onclick="loadPostContent('${filename}')">Read More</a>
          `;

          // Append the post card to the carousel container
          carouselContainer.appendChild(postCard);
        })
        .catch((error) => console.error("Error fetching post:", error));
    });

    // Function to load and display the full content of a post
    window.loadPostContent = async function (filename) {
      const fullContent = await fetchPostContent(filename);
      // Display the full content in a modal or any desired way
      alert(fullContent);
    };
  }

  // Call the function to fetch and display posts
  fetchAndDisplayPosts();
});
