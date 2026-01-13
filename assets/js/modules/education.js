// Education section loading module

export function loadEducation(cvData, currentLang, observer, translations) {
    const educationContainer = document.getElementById('education-container');
    const langData = cvData[currentLang];
    const t = translations[currentLang];

    langData.education.forEach(edu => {
        const educationCard = document.createElement('div');
        educationCard.className = 'col-md-8';
        educationCard.innerHTML = `
            <div class="education-card">
                \${edu.logo ? \`<img src="\${edu.logo}" alt="\${edu.school} logo" class="school-logo">\` : ''}
                <div class="degree">\${edu.degree}</div>
                <div class="school-name">\${edu.school}</div>
                <div class="education-duration">
                    <i class="fas fa-graduation-cap me-2"></i>\${edu.duration}
                </div>
                <div class="education-location">
                    <i class="fas fa-map-marker-alt me-2"></i>\${edu.location} |
                    \${t.gpa_label}: \${edu.gpa}
                </div>
            </div>
        `;
        educationContainer.appendChild(educationCard);
        observer.observe(educationCard.querySelector('.education-card'));
    });
}