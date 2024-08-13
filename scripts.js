document.getElementById('tools-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Implement responsive behavior here
    var navLinks = document.querySelector('nav ul');

    if (window.innerWidth <= 768) {
        // Toggle visibility of the menu for smaller screens
        navLinks.classList.toggle('active');
    } else {
        // For larger screens, you can redirect or open a dropdown, etc.
        alert("You clicked on Tools!");
    }
});
