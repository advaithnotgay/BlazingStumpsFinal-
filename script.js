const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});