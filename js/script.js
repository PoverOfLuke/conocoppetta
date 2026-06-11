// ===== NAVBAR TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ===== REVIEWS SLIDER =====
const slider = document.getElementById('reviewsSlider');
const dotsContainer = document.getElementById('reviewDots');
const prevBtn = document.getElementById('reviewPrev');
const nextBtn = document.getElementById('reviewNext');
const cards = slider.querySelectorAll('.review-card');
let current = 0;

function createDots() {
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'review-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Vai alla recensione ' + (i + 1));
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    cards.forEach(c => c.classList.remove('active'));
    dotsContainer.querySelectorAll('.review-dot').forEach(d => d.classList.remove('active'));
    current = (index + cards.length) % cards.length;
    cards[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(current - 1));
nextBtn.addEventListener('click', () => showSlide(current + 1));

// Auto-advance
let autoSlide = setInterval(() => showSlide(current + 1), 5000);

slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => showSlide(current + 1), 5000);
});

createDots();
