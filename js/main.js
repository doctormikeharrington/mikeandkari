// Mike & Kari Wedding Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav--open');

      // Animate hamburger to X
      const bars = navToggle.querySelectorAll('.nav-toggle__bar');
      navToggle.classList.toggle('nav-toggle--active');
    });

    // Close mobile nav when clicking a link
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('nav--open');
        navToggle.classList.remove('nav-toggle--active');
      });
    });
  }

  // Set active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Smooth scroll for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Countdown Timer (optional - can be added to homepage)
function createCountdown(targetDate, elementId) {
  const countdownElement = document.getElementById(elementId);
  if (!countdownElement) return;

  function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference < 0) {
      countdownElement.innerHTML = "The big day is here!";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <span class="countdown__item">${days} <small>days</small></span>
      <span class="countdown__item">${hours} <small>hours</small></span>
      <span class="countdown__item">${minutes} <small>minutes</small></span>
      <span class="countdown__item">${seconds} <small>seconds</small></span>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Initialize countdown for August 22, 2026 at 3:30 PM
// Uncomment the line below if you want to add a countdown to the homepage
// createCountdown('August 22, 2026 15:30:00', 'countdown');
