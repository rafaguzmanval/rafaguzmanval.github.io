# DevOps Engineer CV Template - Project Context

## Project Overview

This is a professional, responsive CV website template built with vanilla JavaScript and Bootstrap, specifically designed for DevOps engineers and software developers. The project is hosted at `rafagval.es` and deployed via GitHub Pages as indicated by the CNAME file.

## Architecture & Technologies

- **HTML5**: Semantic markup with modular templates
- **CSS3**: Custom properties, Flexbox, Grid with Bootstrap 5 framework
- **JavaScript (ES6+)**: DOM manipulation, event handling, ES6 modules
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Vanilla JavaScript**: No external frameworks beyond Bootstrap

## Project Structure

```
├── index.html              # Main HTML file with navigation and footer
├── pdf-template.html       # Enhanced PDF version of the CV
├── templates/              # Modular HTML templates for different sections
│   ├── navbar.html        # Navigation bar template
│   ├── hero.html          # Hero section template
│   ├── about.html         # About section template
│   ├── skills.html        # Skills section template
│   ├── experience.html    # Experience section template
│   ├── education.html     # Education section template
│   ├── projects.html      # Projects section template
│   ├── certifications.html # Certifications section template
│   └── contact.html       # Contact section template
├── assets/
│   ├── css/
│   │   ├── style.css      # Custom DevOps-themed styles
│   │   └── colors.css     # Color palette definitions
│   └── js/
│       ├── app.js         # Main application script (ES6 modules)
│       └── modules/       # Modular JavaScript components
│           ├── utils.js   # Utility functions
│           ├── personal.js # Personal info loading
│           ├── skills.js  # Skills section loading
│           ├── experience.js # Experience section loading
│           ├── education.js # Education section loading
│           ├── projects.js # Projects section loading
│           └── certifications.js # Certifications section loading
├── data/
│   ├── cv-data.js         # CV data: shared + language-specific content
│   ├── translations.js    # UI text translations
│   └── avatar.jpg         # Profile picture
├── serve.sh               # Local development server script
└── README.md             # Main documentation
```

## Key Features

- **DevOps-themed Design**: Clean, technical aesthetic with blue/green color scheme
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Vanilla JavaScript**: Pure JavaScript for data binding without heavy frameworks
- **Modular Architecture**: Separated HTML templates and ES6 JavaScript modules
- **Internationalization**: Full English and Spanish language support
- **Template System**: Easy customization through a single data file
- **Local Development**: Built-in script for local testing
- **SEO Friendly**: Proper meta tags and semantic HTML
- **PDF Export**: Enhanced PDF template for printing/resume purposes

## Data Structure

The CV data is organized with clear separation between shared and translatable content:

```javascript
const cvData = {
  shared: {
    // Data that doesn't change between languages
    personal: { name, email, phone, linkedin, github, website, profileImage },
    skills: [{ name, level, category }, ...],
    projects: [{ technologies, github, demo }, ...],
    certifications: [{ name, issuer, date, credentialId }, ...]
  },
  en: {
    // English-specific translatable content
    personal: { name, title, location },
    summary: "Professional summary...",
    experience: [...],
    education: [...],
    projects: [{ name, description }]
  },
  es: {
    // Spanish-specific translatable content
    // Same structure as 'en'
  }
};
```

## Building and Running

### Local Development
Run the included script to start a local server:
```bash
# Default port 8000
./serve.sh

# Custom port
./serve.sh 3000
```

The script uses Python's built-in HTTP server. If Python is not available, it suggests alternatives.

### Customization
1. **Add your profile picture**: Place your photo as `data/avatar.jpg`
2. **Customize your data** in `data/cv-data.js`
3. **Modify styling** in `assets/css/style.css`

### Deployment
- **GitHub Pages**: Push to a GitHub repository and configure Pages to deploy from the main branch
- **Other platforms**: Since it's a static site, it can be deployed to Netlify, Vercel, AWS S3, or any web server

## Internationalization

The CV supports both English and Spanish languages:
- **English (EN)**: Default language
- **Spanish (ES)**: Complete translation of all content

Switch languages using the globe icon in the navigation bar. All UI elements are fully translated, including navigation, section titles, button labels, and professional content.

## Development Conventions

- **Modular Architecture**: Each section has its own HTML template and JavaScript module
- **ES6 Modules**: Modern JavaScript module system for clean imports/exports
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Responsive Design**: Mobile-first approach with Bootstrap's responsive utilities
- **Accessibility**: Proper ARIA attributes and semantic markup

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Special Files

- **CNAME**: Configured for custom domain `www.rafagval.es`
- **pdf-template.html**: Enhanced PDF version with improved visual design
- **README-PDF-TEMPLATE.md**: Documentation for the enhanced PDF template features

## Maintenance Notes

The project is actively maintained with features like:
- Dynamic content loading from data files
- Smooth animations and transitions
- Skill categorization and visualization
- Professional experience timeline
- Certification and education sections
- Contact information with social links