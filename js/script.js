// Parallax simples ao scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;

    const sky = document.querySelector('.sky');
    const sun = document.querySelector('.sun');
    const clouds = document.querySelector('.clouds');
    const mountains = document.querySelector('.mountains');

    // Multiplicadores normais
    let mSky = 0.1, mSun = 0.2, mClouds = 0.3, mMountains = 0.5;

    // Em mobile, suaviza o efeito
    if (window.innerWidth < 768) {
        mSky = 0.05;
        mSun = 0.1;
        mClouds = 0.15;
        mMountains = 0.25;
    }

    sky.style.transform = `translateY(${scrolled * mSky}px)`;
    sun.style.transform = `translateY(${scrolled * mSun}px)`;
    clouds.style.transform = `translateY(${scrolled * mClouds}px)`;
    mountains.style.transform = `translateY(${scrolled * mMountains}px)`;
});
