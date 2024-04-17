'use strict'

const arrayLinks = document.querySelectorAll('a[href^="#"]');

arrayLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    if (this.getAttribute('href')[0] === '#' && this.getAttribute('href').length > 1) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});