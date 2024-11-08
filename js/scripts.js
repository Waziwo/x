document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    features.forEach(feature => {
        observer.observe(feature);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');

    // Ustawienie opóźnienia na pojawienie się
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 500); // Opóźnienie 0.5 sekundy
});
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert('Rozpocznij swoją przygodę z GymStats Pro!');
    });
});