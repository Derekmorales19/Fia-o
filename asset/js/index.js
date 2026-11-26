
const carouselData = [
    {
        image: "asset/img/slide1.png",
        en: "Digitize customer, debt, and payment management for convenience stores in Panama.",
        es: "Digitaliza la gestión de clientes, deudas y pagos para minisupermercados en Panamá."
    },
    {
        image: "asset/img/slide2.png",
        en: "Track daily collections and manage active credit balances safely and fast.",
        es: "Lleva el control de cobros diarios y administra saldos de crédito activos de forma segura y rápida."
    },
    {
        image: "asset/img/slide3.png",
        en: "Transparent statements and direct digital payment gateways for all your customers.",
        es: "Estados de cuenta transparentes y pasarelas de pago digital directas para todos tus clientes."
    }
];

let currentSlideIndex = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', function() {

    if (!localStorage.getItem('fiao_lang')) {
        localStorage.setItem('fiao_lang', 'en');
    }

    initCarousel();

    const currentLang = localStorage.getItem('fiao_lang') || 'en';
    applyTranslation(currentLang);

});

function initCarousel() {
    showSlide(currentSlideIndex);
    slideInterval = setInterval(nextSlide, 5000);
}

function showSlide(index) {

    const subtitleEl = document.getElementById('carouselSubtitle');
    const imageEl = document.getElementById('carouselImage');
    const dots = document.querySelectorAll('.dot');

    if (!subtitleEl || !imageEl) return;

    currentSlideIndex = (index + carouselData.length) % carouselData.length;

    const currentLang = localStorage.getItem('fiao_lang') || 'en';

    imageEl.style.opacity = '0.3';

    setTimeout(() => {
        imageEl.src = carouselData[currentSlideIndex].image;
        imageEl.style.opacity = '1';
    }, 200);

    subtitleEl.setAttribute('data-en', carouselData[currentSlideIndex].en);
    subtitleEl.setAttribute('data-es', carouselData[currentSlideIndex].es);

    subtitleEl.textContent =
        currentLang === 'es'
        ? carouselData[currentSlideIndex].es
        : carouselData[currentSlideIndex].en;

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlideIndex);
    });

}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function currentSlide(index) {

    clearInterval(slideInterval);

    showSlide(index);

    slideInterval = setInterval(nextSlide, 5000);

}

function applyTranslation(lang) {

    document.querySelectorAll('[data-en]').forEach(el => {

        if (el.hasAttribute('data-es') && el.hasAttribute('data-en')) {

            el.innerHTML = lang === 'es'
                ? el.getAttribute('data-es')
                : el.getAttribute('data-en');

        } else {

            el.textContent = lang === 'es'
                ? el.getAttribute('data-es')
                : el.getAttribute('data-en');

        }

    });

}
