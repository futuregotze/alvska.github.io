document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const darkModeSwitch = document.getElementById("dark-mode-switch");
  const navbar = document.querySelector(".scroll-fade");
  const buttons = document.querySelectorAll(".button");
  const animatedElements = document.querySelectorAll(".animated");
  const mobileNavbar = document.querySelector('.mobile-navbar');
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const firstElement = document.getElementById('portfolio-header'); // Adjust the ID

  // Dark Mode Setup
  let darkMode;

  if (localStorage.getItem('dark-mode')) {
    darkMode = localStorage.getItem('dark-mode');
  } else {
    darkMode = 'light';
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode", darkModeSwitch.checked);
    // Update localStorage with the current dark mode state
    localStorage.setItem('dark-mode', darkModeSwitch.checked ? 'dark' : 'light');
  }

  // Check the initial state of the dark mode switch and apply styles accordingly
  if (darkModeSwitch) {
    darkModeSwitch.checked = darkMode === 'dark';
    toggleDarkMode();
    darkModeSwitch.addEventListener("change", toggleDarkMode);
  }

  // Add animation to elements with the 'animated' class
  animatedElements.forEach((element) => {
    element.classList.add("animate");
  });

  // ... (rest of your existing code)

  // Mobile menu toggle function
  function toggleMobileMenu() {
    const displayValue = mobileMenu.style.display === 'none' ? 'block' : 'none';
    mobileMenu.style.display = displayValue;
  }

  // Attach the toggleMobileMenu function to the hamburger icon click event
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMobileMenu);
  }

  // Scroll to 'my work' section when the corresponding link is clicked
  const myWorkLink = document.getElementById('my-work-link');
  const myWorkSection = document.getElementById('my-work-section');

  if (myWorkLink) {
    myWorkLink.addEventListener('click', () => {
      myWorkSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
