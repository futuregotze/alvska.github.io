(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("dark-mode-switch");
    const navbar = document.querySelector(".scroll-fade");
    const buttons = document.querySelectorAll(".button");
    const animatedElements = document.querySelectorAll(".animated");
    const mobileNavbar = document.querySelector('.mobile-navbar');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const firstElement = document.getElementById('portfolio-header'); // Adjust the ID

    // Check the initial state of the dark mode switch and apply styles accordingly
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", isDarkMode);
    if (darkModeSwitch) {
      darkModeSwitch.checked = isDarkMode;

      darkModeSwitch.addEventListener("change", function () {
        const isDarkMode = darkModeSwitch.checked;
        document.body.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
      });
    }

    // Add animation to elements with the 'animated' class
    animatedElements.forEach((element) => {
      element.classList.add("animate");
    });

    let isMobileNavbarHidden = false;

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const SCROLL_THRESHOLD = 200;
      const navbarOpacity = 1 - scrollPosition / SCROLL_THRESHOLD;
      navbar.style.opacity = navbarOpacity;

      // Toggle 'hidden' class on the navbar based on scroll position
      if (scrollPosition > navbar.clientHeight) {
        navbar.classList.add("hidden");
        buttons.forEach((button) => {
          button.style.pointerEvents = "none";
        });

        // Hide the mobile navbar with a smooth transition
        if (!isMobileNavbarHidden && scrollPosition > firstElement.offsetTop) {
          isMobileNavbarHidden = true;
          mobileNavbar.style.transition = 'opacity 0.5s';
          mobileNavbar.style.opacity = '0';
        }
      } else {
        navbar.classList.remove("hidden");
        buttons.forEach((button) => {
          button.style.pointerEvents = "auto";
        });

        // Show the mobile navbar with a smooth transition
        if (isMobileNavbarHidden) {
          isMobileNavbarHidden = false;
          mobileNavbar.style.transition = 'opacity 0.5s'; // Adjust the transition speed
          mobileNavbar.style.opacity = '1';
        }
      }
    });

    // Mobile menu toggle function
    function toggleMobileMenu() {
      const displayValue = window.getComputedStyle(mobileMenu, null).getPropertyValue('display');
      mobileMenu.style.display = displayValue === 'none' ? 'block' : 'none';
    }

    // Attach the toggleMobileMenu function to the hamburger icon click event
    if (hamburgerIcon) {
      hamburgerIcon.addEventListener('click', toggleMobileMenu);
    }
  });
})();
