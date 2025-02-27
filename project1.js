// Get the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll events
window.onscroll = function() {
    // Scroll position detection
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
