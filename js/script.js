if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function toggleMenu() {
  var navMenu = document.querySelector('.nav-menu');
  navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
}
