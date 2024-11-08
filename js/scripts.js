document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    const testimonials = document.querySelectorAll('.testimonial');
    const events = document.querySelectorAll('.event');
    const aboutSection = document.querySelector('.about');

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
        feature.classList.add('fade-in');
        observer.observe(feature);
    });

    testimonials.forEach(testimonial => {
        testimonial.classList.add('slide-up');
        observer.observe(testimonial);
    });

    events.forEach(event => {
        event.classList.add('slide-up');
        observer.observe(event);
    });

    // Animacja dla sekcji "O nas"
    aboutSection.classList.add('fade-in');
    observer.observe(aboutSection);
    
    // Animacja dla hero-content
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 500);
    
    // Przycisk startowy
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert('Rozpocznij swoją przygodę z GymStats Pro!');
    });
});