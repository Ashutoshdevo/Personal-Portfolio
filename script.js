// Smooth scrolling for nav links
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  });
}

// Simple form submission alert
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    form.reset();
  });
}
