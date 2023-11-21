document.addEventListener('DOMContentLoaded', function () {
  // Select the container where you want to append the blog posts
  const blogContainer = document.querySelector('.blog-box-container');

  // Fetch the list of blog post HTML files from the server
  fetchBlogPosts();

  async function fetchBlogPosts() {
    try {
      // Assuming you have a certain number of posts, let's say 10
      const numberOfPosts = 3; // Display only 3 posts at a time

      // Iterate through the post numbers
      for (let i = 1; i <= numberOfPosts; i++) {
        // Construct the path for each post HTML file
        const postFilePath = `./doc-posts/post${i}.html`;

        // Fetch the HTML content of the post
        const response = await fetch(postFilePath);
        const postHTML = await response.text();

        // Append the post HTML to the blog container
        blogContainer.insertAdjacentHTML('beforeend', postHTML);
      }

      // Add event listeners to the post links after they are added to the DOM
      addPostLinkListeners();
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }

  function addPostLinkListeners() {
    // Select all blog boxes
    const blogBoxes = document.querySelectorAll('.blog-box');

    // Add a click event listener to each blog box
    blogBoxes.forEach((box, index) => {
      const postLink = box.querySelector('.blog-img-link');

      // Add a click event listener to each blog image link
      postLink.addEventListener('click', function (event) {
        // Prevent the default link behavior to avoid navigating to the URL
        event.preventDefault();

        // Redirect the user to the individual post page
        window.location.href = `./doc-posts/post${index + 1}.html`;
      });
    });
  }
});
