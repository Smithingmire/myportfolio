// Navigation Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing once the animation has triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- Modal Logic ---
const modal = document.getElementById('contact-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
    document.body.style.overflow = 'hidden'; // prevent scrolling
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    document.body.style.overflow = 'auto'; // re-enable scrolling
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show-modal');
        document.body.style.overflow = 'auto'; // re-enable scrolling
    }
});
