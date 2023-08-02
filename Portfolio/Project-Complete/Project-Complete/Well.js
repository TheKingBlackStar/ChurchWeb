// Function to trigger the fade-in effect on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener to trigger the fade-in effect
window.addEventListener('scroll', fadeInOnScroll);

// Call the function on page load to check if elements are already in view
fadeInOnScroll();
