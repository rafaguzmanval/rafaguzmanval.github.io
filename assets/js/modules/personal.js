// Personal information loading module

function loadPersonalInfo(cvData, currentLang) {
    const langData = cvData[currentLang];
    const sharedData = cvData.shared;

    // Combine shared and language-specific personal data
    const personalData = { ...sharedData.personal, ...langData.personal };

    // Page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = `${personalData.name} - ${personalData.title}`;

    // Navigation
    const navName = document.getElementById('nav-name');
    if (navName) navName.textContent = personalData.name;

    // Hero section
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = personalData.name;
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = personalData.title;
    const heroLocation = document.getElementById('hero-location');
    if (heroLocation) heroLocation.innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${personalData.location}`;

    // Profile image
    if (personalData.profileImage) {
        const profileImage = document.getElementById('profile-image');
        if (profileImage) profileImage.src = personalData.profileImage;
    }

    // Social links in hero
    const linkedinLink = document.getElementById('linkedin-link');
    if (linkedinLink) {
        linkedinLink.href = personalData.linkedin;
        linkedinLink.target = '_blank';
    }
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.href = personalData.github;
        githubLink.target = '_blank';
    }
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.href = `mailto:${personalData.email}`;
        emailLink.target = '_blank';
    }

    // About summary
    const aboutSummary = document.getElementById('about-summary');
    if (aboutSummary) aboutSummary.textContent = langData.summary;

    // Contact section
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.innerHTML = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}" target="_blank">${personalData.email}</a>`;
    }
    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) contactLocation.textContent = personalData.location;
    const contactLinkedin = document.getElementById('contact-linkedin');
    if (contactLinkedin) {
        contactLinkedin.href = personalData.linkedin;
        contactLinkedin.target = '_blank';
    }
    const contactGithub = document.getElementById('contact-github');
    if (contactGithub) {
        contactGithub.href = personalData.github;
        contactGithub.target = '_blank';
    }
    const contactWebsite = document.getElementById('contact-website');
    if (contactWebsite) {
        contactWebsite.href = personalData.website;
        contactWebsite.target = '_blank';
    }

    // Footer
    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = personalData.name;
}

// Function to download PDF based on current language
function downloadPDF() {
    // Get the current language from the global variable in app.js
    const lang = window.currentLang || 'es'; // Default to Spanish if not set
    
    let pdfUrl = '';
    if (lang === 'en') {
        pdfUrl = 'data/CV-rafael-guzman-en.pdf';
    } else {
        pdfUrl = 'data/CV-rafael-guzman-es.pdf';
    }
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `CV-rafael-guzman-${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.loadPersonalInfo = loadPersonalInfo;
window.downloadPDF = downloadPDF;