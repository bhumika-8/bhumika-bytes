// Get the main element
const mainElement = document.querySelector('main');

// Function to handle scroll event and trigger animation
const handleScroll = () => {
  // Check if the user has scrolled down at least a certain amount
  if (window.scrollY > 50) {
    // Add the 'animate' class when scrolling down
    mainElement.classList.add('animate');
  } else {
    // Remove the 'animate' class when the scroll position is back to top
    mainElement.classList.remove('animate');
  }
};

// Add event listener to listen for scroll events
window.addEventListener('scroll', handleScroll);

const cards = document.querySelectorAll('.card');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "visible" class when the card is in view
      entry.target.classList.add('visible');
      // Optional: Stop observing the card once it’s animated
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% of the card is visible

// Observe each card
cards.forEach((card) => observer.observe(card));
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

