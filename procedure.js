window.addEventListener('scroll', function () {
    const procedureSection = document.getElementById('procedure');
    const procedureLink = document.getElementById('procedure-link');
    const homeLink = document.getElementById('home-link');

    const rect = procedureSection.getBoundingClientRect();
    const inViewport = rect.top >= 0 && rect.top <= window.innerHeight;

    if (inViewport) {
        procedureLink.classList.add('active');
        homeLink.classList.add('no-hover');
    } else {
        procedureLink.classList.remove('active');
        homeLink.classList.remove('no-hover');
    }
});
