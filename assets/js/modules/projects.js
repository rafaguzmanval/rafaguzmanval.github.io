// Projects section loading module

function loadProjects(cvData, currentLang, observer, translations) {
    const projectsContainer = document.getElementById('projects-container');
    const langData = cvData[currentLang];
    const sharedData = cvData.shared;
    const t = translations[currentLang];

    langData.projects.forEach((project, index) => {
        const sharedProject = sharedData.projects[index];
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6';
        projectCard.innerHTML = `
            <div class="project-card">
                <h4 class="project-name">${project.name}</h4>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${sharedProject.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${sharedProject.github}" class="btn btn-outline-primary btn-sm" target="_blank">
                        <i class="fab fa-github me-1"></i>${t.project_code}
                    </a>
                    ${sharedProject.demo ? `<a href="${sharedProject.demo}" class="btn btn-primary btn-sm" target="_blank">
                        <i class="fas fa-external-link-alt me-1"></i>${t.project_demo}
                    </a>` : ''}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
        observer.observe(projectCard.querySelector('.project-card'));
    });
}

// Make function globally available
window.loadProjects = loadProjects;