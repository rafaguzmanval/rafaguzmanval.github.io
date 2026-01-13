// Utility functions for the CV application

export function loadTemplate(templatePath) {
    return fetch(templatePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load template: ${templatePath}`);
            }
            return response.text();
        });
}

export function insertTemplate(container, template) {
    container.innerHTML += template;
}

export function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    return observer;
}

export function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

export let scrollSpyInitialized = false;

export function setupScrollSpy() {
    if (scrollSpyInitialized) return;
    scrollSpyInitialized = true;

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        let current = '';
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

export function replacePlaceholders(template, translations, currentLang) {
    const t = translations[currentLang];
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return t[key] || match;
    });
}