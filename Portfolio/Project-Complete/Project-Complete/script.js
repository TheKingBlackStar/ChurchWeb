// JavaScript for the "Read More" functionality
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expandableContent = button.nextElementSibling;

    expandableContent.classList.toggle('expand');
    button.textContent = expandableContent.classList.contains('expand')
      ? 'Read Less'
      : 'Read More';
  });
});







