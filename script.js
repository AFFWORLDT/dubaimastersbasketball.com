const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
$('.carousel').carousel({
    interval: 3000 // Slide every 3 seconds
  });
  