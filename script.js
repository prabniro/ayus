document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    let currentProduct = 0;

    function showNextProduct() {
        products[currentProduct].classList.remove('show');
        currentProduct = (currentProduct + 1) % products.length;
        products[currentProduct].classList.add('show');
    }

    setInterval(showNextProduct, 2000);

    window.onload = () => {
        products[currentProduct].classList.add('show');
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
