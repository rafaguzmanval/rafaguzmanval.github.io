// PDF Generator Module
export class PDFGenerator {
    constructor(cvData, translations) {
        this.cvData = cvData;
        this.translations = translations;
    }

    async generateAndDownload(lang = 'en') {
        try {
            // Create a new window with the PDF template
            const data = this.cvData[lang];
            const shared = this.cvData.shared;
            const t = this.translations[lang];

            // Generate the PDF content
            const htmlContent = this.generatePDFHTML(data, shared, t, lang);

            // Create blob and download
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            
            // Create temporary link and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = `CV_Rafael_Guzman_${lang.toUpperCase()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again.');
        }
    }

    generatePDFHTML(data, shared, t, lang) {
        // Get the PDF template content
        const template = `
<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Rafael Guzmán</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #0066cc;
            --secondary-color: #28a745;
            --dark-color: #333;
            --light-color: #f8f9fa;
            --white: #fff;
            --gray: #6c757d;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            margin: 20px;
            color: var(--dark-color);
            background: var(--white);
        }
        .pdf-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .section {
            margin-bottom: 15px;
        }
        .left-column, .right-column {
            display: flex;
            flex-direction: column;
        }
        .section-title {
            font-size: 12px;
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .skills-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .skill-category {
            background: var(--light-color);
            padding: 8px;
            border-radius: 5px;
            border-left: 3px solid var(--primary-color);
        }
        .skill-category-title {
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 5px;
            color: var(--primary-color);
        }
        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        .skill-item {
            background: var(--primary-color);
            color: var(--white);
            padding: 3px 6px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 500;
        }
        .experience-card, .education-card, .certification-card {
            background: var(--light-color);
            padding: 8px;
            margin-bottom: 8px;
            border-radius: 5px;
            border-left: 3px solid var(--secondary-color);
        }
        .company-logo, .school-logo {
            width: 35px;
            height: 35px;
            margin-right: 8px;
            vertical-align: middle;
        }
        .company-name, .school-name {
            font-weight: bold;
            font-size: 12px;
            color: var(--primary-color);
        }
        .position-title { font-size: 11px; color: var(--dark-color); margin: 3px 0; }
        .experience-duration, .education-location {
            font-size: 10px;
            color: var(--gray);
            margin-bottom: 5px;
        }
        .experience-description {
            font-size: 10px;
            margin-top: 5px;
            padding-left: 12px;
        }
        .experience-description li { margin-bottom: 3px; }
        .hero-section {
            text-align: center;
            margin-bottom: 15px;
            border-bottom: 3px solid var(--primary-color);
            padding-bottom: 12px;
            background: linear-gradient(135deg, var(--light-color) 0%, var(--white) 100%);
            border-radius: 8px;
            padding: 15px;
        }
        .profile-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid var(--primary-color);
            margin-bottom: 8px;
            object-fit: cover;
        }
        #hero-name { font-size: 20px; font-weight: bold; color: var(--primary-color); margin: 8px 0; }
        #hero-title { font-size: 14px; color: var(--dark-color); margin: 5px 0; font-weight: 600; }
        #hero-location, #hero-email { font-size: 11px; color: var(--gray); margin: 3px 0; }
        @media print {
            body { margin: 10px; }
            .hero-section { page-break-after: avoid; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <!-- Hero Section -->
        <section class="hero-section section">
            <img id="profile-image" src="${shared.personal.profileImage}" alt="Profile" class="profile-image">
            <h1 id="hero-name">${data?.personal?.name || 'Rafael Guzmán'}</h1>
            <h2 id="hero-title">${data?.personal?.title || 'Ingeniero DevOps'}</h2>
            <p id="hero-location"><i class="fas fa-map-marker-alt me-1"></i>${data?.personal?.location || 'Granada, España'}</p>
            <p id="hero-email">${shared?.personal?.email || 'rafagval@gmail.com'}</p>
        </section>

        <!-- About Section -->
        <section class="section">
            <h3 class="section-title">${t?.about_title || 'Acerca de Mí'}</h3>
            <p>${data?.summary || 'Ingeniero DevOps con experiencia...'}</p>
        </section>

        <div class="pdf-grid">
            <div class="left-column">
                <!-- Skills Section -->
                <section class="section">
                    <h3 class="section-title">${t?.skills_title || 'Habilidades Técnicas'}</h3>
                    <div class="skills-container">
                        ${this.generateSkillsHTML(shared.skills, t)}
                    </div>
                </section>

                <!-- Education Section -->
                <section class="section">
                    <h3 class="section-title">${t?.nav_education || 'Educación'}</h3>
                    <div id="education-container">
                        ${this.generateEducationHTML(data.education)}
                    </div>
                </section>

                <!-- Certifications Section -->
                <section class="section">
                    <h3 class="section-title">${t?.nav_certifications || 'Certificaciones'}</h3>
                    <div id="certifications-container">
                        ${this.generateCertificationsHTML(shared.certifications)}
                    </div>
                </section>
            </div>

            <div class="right-column">
                <!-- Experience Section -->
                <section class="section">
                    <h3 class="section-title">${t?.nav_experience || 'Experiencia Laboral'}</h3>
                    <div id="experience-container">
                        ${this.generateExperienceHTML(data.experience)}
                    </div>
                </section>
            </div>
        </div>
    </div>
    
    <script>
        // Auto-print when loaded
        window.onload = function() {
            setTimeout(() => {
                window.print();
            }, 500);
        };
    <\/script>
</body>
</html>`;
        return template;
    }

    generateSkillsHTML(skills, t) {
        const skillCategories = {};
        skills.forEach(skill => {
            if (!skillCategories[skill.category]) skillCategories[skill.category] = [];
            skillCategories[skill.category].push(skill);
        });

        let html = '';
        Object.keys(skillCategories).forEach(cat => {
            const catName = t['skill_cat_' + cat] || cat;
            const skillsList = skillCategories[cat].map(skill => 
                `<span class="skill-item">${skill.name}</span>`
            ).join('');
            
            html += `
            <div class="skill-category">
                <div class="skill-category-title">${catName}</div>
                <div class="skill-list">${skillsList}</div>
            </div>`;
        });
        
        return html;
    }

    generateExperienceHTML(experiences) {
        return experiences.map(exp => `
            <div class="experience-card">
                ${exp.logo ? `<img src="${exp.logo}" alt="${exp.company} logo" class="company-logo">` : ''}
                <div class="company-name">${exp.company}</div>
                <div class="position-title">${exp.position}</div>
                <div class="experience-duration">${exp.duration} - ${exp.location}</div>
                ${exp.clients && exp.clients.length ? `<div>Clients: ${exp.clients.join(', ')}</div>` : ''}
                <ul class="experience-description">${exp.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
            </div>
        `).join('');
    }

    generateEducationHTML(educations) {
        return educations.map(edu => `
            <div class="education-card">
                ${edu.logo ? `<img src="${edu.logo}" alt="${edu.school} logo" class="school-logo">` : ''}
                <div class="school-name">${edu.school}</div>
                <div class="position-title">${edu.degree}</div>
                <div class="education-location">${edu.duration} - ${edu.location}</div>
                <div>GPA: ${edu.gpa}</div>
            </div>
        `).join('');
    }

    generateCertificationsHTML(certifications) {
        return certifications.map(cert => `
            <div class="certification-card">
                ${cert.logo ? `<img src="${cert.logo}" alt="${cert.name} logo" class="company-logo">` : ''}
                <div class="company-name">${cert.name}</div>
                <div class="position-title">${cert.issuer}</div>
                <div class="experience-duration">${cert.date} - ${cert.credentialId}</div>
            </div>
        `).join('');
    }
}