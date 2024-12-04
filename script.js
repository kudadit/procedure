// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the active link based on the current URL hash
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.nav a[href="${currentHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } else {
        // Default to the home link if no hash is present
        document.getElementById('home-link').classList.add('active');
    }   
});

window.addEventListener('scroll', () => {
    const servicesSection = document.querySelector('#services');
    const servicesLink = document.querySelector('#services-link');

    const rect = servicesSection.getBoundingClientRect();
    const isVisible = rect.top <= 0 && rect.bottom >= 0;

    if (isVisible) {
        servicesLink.classList.add('active');
    } else {
        servicesLink.classList.remove('active');
    }
});

