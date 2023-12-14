// blog.js

document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.querySelector('.blog-box-container');
  const loadMoreButton = document.getElementById('load-more-button');
  const loadMoreContainer = document.getElementById('load-more-container');
  const postsPerPage = 3;
  let currentPage = 1;

  loadMoreButton.addEventListener('click', function () {
    currentPage++;
    fetchBlogPosts();
  });

  fetchBlogPosts();

  async function fetchBlogPosts() {
    try {
      const startIndex = (currentPage - 1) * postsPerPage + 1;
      const endIndex = startIndex + postsPerPage - 1;

      for (let i = startIndex; i <= endIndex; i++) {
        const postFilePath = `./doc-posts/post${i}.html`;
        const response = await fetch(postFilePath);
        const postHTML = await response.text();
        blogContainer.insertAdjacentHTML('beforeend', postHTML);
      }

      if (!hasMorePosts(currentPage)) {
        // If there are no more posts, hide the load more container
        loadMoreContainer.style.display = 'none';
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }

  function hasMorePosts(currentPage) {
    const nextPostExists = document.querySelector(`.blog-box[data-post-index="${currentPage * postsPerPage + 1}"]`);
    return !!nextPostExists;
  }
});
