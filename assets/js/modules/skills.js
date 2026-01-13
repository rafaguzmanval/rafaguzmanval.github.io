// Skills section loading module

export function loadSkills(cvData, currentLang, observer, translations) {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    const sharedData = cvData.shared;
    const t = translations[currentLang];

    // Function to get qualitative level
    const getQualitativeLevel = (level) => {
        if (level < 40) return t.skill_low;
        if (level < 80) return t.skill_medium;
        return t.skill_high;
    };

    // Function to get level class
    const getLevelClass = (level) => {
        if (level < 40) return 'skill-low';
        if (level < 80) return 'skill-medium';
        return 'skill-high';
    };

    // Group skills by category
    const skillsByCategory = {};
    sharedData.skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });

    // Clear container
    skillsContainer.innerHTML = '';

    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'skills-grid';
    skillsContainer.appendChild(gridContainer);

    // Create sections for each category
    Object.keys(skillsByCategory).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        const categoryName = t['skill_cat_' + category] || category;
        categoryDiv.innerHTML = `
            <h4 class="skill-category-title">${categoryName}</h4>
            <div class="skill-list">
                ${skillsByCategory[category].map(skill =>
                    `<span class="skill-item ${getLevelClass(skill.level)}">${skill.name}: ${getQualitativeLevel(skill.level)}</span>`
                ).join('')}
            </div>
        `;
        gridContainer.appendChild(categoryDiv);
        observer.observe(categoryDiv);
    });
}