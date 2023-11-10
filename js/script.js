if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Add this to your existing script.js or create a new one
function toggleMobileMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

