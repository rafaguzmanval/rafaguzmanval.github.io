// Certifications section loading module

function loadCertifications(cvData, currentLang, observer, translations) {
    const certificationsContainer = document.getElementById('certifications-container');
    const sharedData = cvData.shared;
    const t = translations[currentLang];

    sharedData.certifications.forEach(cert => {
        const certificationCard = document.createElement('div');
        certificationCard.className = 'col-lg-6 mx-auto';
        certificationCard.innerHTML = `
            <div class="certification-card">
                ${cert.logo ? `<img src="${cert.logo}" alt="${cert.name} logo" class="certification-logo">` : ''}
                <div class="certification-name">${cert.name}</div>
                <div class="certification-issuer">${cert.issuer}</div>
                <div class="certification-details">
                    <i class="fas fa-calendar me-2"></i>${cert.date}
                    ${cert.credentialId ? `<br><i class="fas fa-id-badge me-2"></i>${t.cert_id_label}: ${cert.credentialId}` : ''}
                </div>
            </div>
        `;
        certificationsContainer.appendChild(certificationCard);
        observer.observe(certificationCard.querySelector('.certification-card'));
    });
}

// Make function globally available
window.loadCertifications = loadCertifications;