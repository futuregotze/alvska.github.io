document.addEventListener('DOMContentLoaded', function () {
  // Select the container where you want to append the blog posts
  const blogContainer = document.querySelector('.blog-box-container');

  // Fetch the list of blog posts from the server
  fetchBlogPosts();

  async function fetchBlogPosts() {
    try {
      const response = await fetch('./doc-posts/posts.json'); // Assuming you have a JSON file containing the list of posts
      const postsData = await response.json();

      // Iterate through the posts and append them to the blog container
      postsData.forEach(post => {
        const postHTML = createPostHTML(post);
        blogContainer.insertAdjacentHTML('beforeend', postHTML);
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }

  function createPostHTML(post) {
    // Create HTML for each blog post with a link to the individual post page
    return `
      <div class="blog-box">
        <div class="blog-box-img">
          <img alt="blog" src="${post.image}">
          <a href="${getPostPageURL(post)}" class="blog-img-link">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div class="blog-box-text">
          <strong>${post.title}</strong>
          <a href="${getPostPageURL(post)}">${post.summary}</a>
          <p>${post.content}</p>
          <div class="blog-author">
            <div class="blog-author-img">
              <img alt="" src="${post.authorImage}">
            </div>
            <div class="blog-author-text">
              <strong>${post.author}</strong>
              <span>${post.date}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function getPostPageURL(post) {
    // Generate the URL for the individual post page
    return `./doc-posts/${getPostFileName(post)}.html`;
  }

  function getPostFileName(post) {
    // Convert the post title to a valid file name
    return post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
});
