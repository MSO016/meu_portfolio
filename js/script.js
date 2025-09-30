// Parallax simples ao scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;

    const sky = document.querySelector('.sky');
    const sun = document.querySelector('.sun');
    const clouds = document.querySelector('.clouds');
    const mountains = document.querySelector('.mountains');

    // Movimento suave
    sky.style.transform = `translateY(${scrolled * 0.1}px)`;
    sun.style.transform = `translateY(${scrolled * 0.2}px)`;
    clouds.style.transform = `translateY(${scrolled * 0.3}px)`;
    mountains.style.transform = `translateY(${scrolled * 0.5}px)`;
});
