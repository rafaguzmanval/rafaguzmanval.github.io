// Experience section loading module

export function loadExperience(cvData, currentLang, observer, translations) {
    const experienceContainer = document.getElementById('experience-container');
    const langData = cvData[currentLang];
    const t = translations[currentLang];

    langData.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'timeline-item';
        experienceItem.innerHTML = `
            <div class="experience-card">
                \${exp.logo ? \`<img src="\${exp.logo}" alt="\${exp.company} logo" class="company-logo">\` : ''}
                <div class="company-name">\${exp.company}</div>
                <div class="position-title">\${exp.position}</div>
                <div class="experience-duration">
                    <i class="fas fa-calendar me-2"></i>\${exp.duration} |
                    <i class="fas fa-map-marker-alt ms-2 me-1"></i>\${exp.location}
                </div>
                \${exp.clients && exp.clients.length > 0 ? \`
                <div class="experience-clients">
                    <strong>\${t.clients_label}:</strong> \${exp.clients.join(', ')}
                </div>
                \` : ''}
                \${exp.technologiesLearned && exp.technologiesLearned.length > 0 ? \`
                <div class="experience-technologies">
                    <strong>\${t.technologies_label}:</strong>
                    <div class="tech-tags">
                        \${exp.technologiesLearned.map(tech => \`<span class="tech-tag">\${tech}</span>\`).join('')}
                    </div>
                </div>
                \` : ''}
                <ul class="experience-description">
                    \${exp.description.map(desc => \`<li>\${desc}</li>\`).join('')}
                </ul>
            </div>
        `;
        experienceContainer.appendChild(experienceItem);
        observer.observe(experienceItem.querySelector('.experience-card'));
    });
}