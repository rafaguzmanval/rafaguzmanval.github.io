# DevOps Engineer CV Template

A professional, responsive CV website template built with vanilla JavaScript and Bootstrap, designed specifically for DevOps engineers and software developers.

## Features

- 🎨 **DevOps-themed Design**: Clean, technical aesthetic with blue/green color scheme
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Vanilla JavaScript**: No frameworks, just pure JavaScript for data binding
- 🏗️ **Modular Architecture**: Separated HTML templates and ES6 JavaScript modules
- 🌍 **Internationalization**: Full English and Spanish language support
- 📝 **Template System**: Easy to customize by editing a single data file
- 🚀 **Local Development**: Built-in script for local testing
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML

## Quick Start

1. **Clone or download** this repository
2. **Add your profile picture** (optional): Place your photo as `data/avatar.jpg`
3. **Customize your data** in `data/cv-data.js`
4. **Test locally** with `./serve.sh`
5. **Deploy** to GitHub Pages or any static hosting

## Project Structure

```
├── index.html              # Main HTML file with navigation and footer
├── templates/              # Modular HTML templates
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
│   │   └── style.css      # Custom DevOps-themed styles
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
│   └── avatar.jpg         # Your profile picture (optional)
├── serve.sh              # Local development server script
└── README.md             # This file
```

## Customization

### Personal Information

Edit `data/cv-data.js` to replace the sample data with your own information:

```javascript
const cvData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
};
```

## Architecture

This project uses a modular architecture for maintainability:

- **HTML Templates**: Each section is in its own HTML file in the `templates/` directory with placeholder system
- **JavaScript Modules**: Each section has its own loading module in `assets/js/modules/`
- **Data Structure**: Smart separation of shared vs. translated data:
  - `shared`: Links, URLs, technical data, images (same across languages)
  - `en/es`: Language-specific content (names, descriptions, summaries)
- **Internationalization**: Client-side language switching with translation replacement
- **ES6 Modules**: Modern JavaScript module system for clean imports/exports

### Available Sections

- **Personal Info**: Name, title, contact details, social links
- **Summary**: Professional summary paragraph
- **Skills**: Technical skills with proficiency levels (0-100%)
- **Experience**: Work history with detailed descriptions, clients worked with, and technologies/skills learned
- **Education**: Academic background
- **Projects**: Featured projects with tech stacks and links
- **Certifications**: Professional certifications
- **Contact**: Contact information and social links

## Languages

The CV supports both English and Spanish languages:

- **English (EN)**: Default language
- **Spanish (ES)**: Complete translation of all content

Switch languages using the globe icon in the navigation bar. All UI elements are fully translated, including:
- Navigation menu items
- Section titles and headings
- Button labels and links
- Professional content (experience, projects, etc.)
- Footer and contact information

## Data Structure

The CV data is organized for efficient internationalization with clear separation:

```javascript
const cvData = {
  shared: {
    // Data that doesn't change between languages
    personal: { name, email, phone, linkedin, github, website, profileImage },
    skills: [{ name, level }, ...],
    projects: [{ technologies, github, demo }, ...],
    certifications: [{ name, issuer, date, credentialId }, ...]
  },
  en: {
    // English-specific translatable content
    personal: { name, title, location },
    summary: "Professional summary...",
    experience: [{
      company, position, duration, location,
      clients: ["Client 1", "Client 2"], // Clients worked with
      technologiesLearned: ["Tech1", "Tech2"], // Skills/technologies learned
      description: ["Achievement 1", "Achievement 2"]
    }],
    education: [...],
    projects: [{ name, description }] // Only translatable parts
  },
  es: {
    // Spanish-specific translatable content
    // Same structure as 'en'
  }
};
```

To add more languages:
1. Add translations to `data/translations.js`
2. Add language data to `cv-data.js` (only translatable content)
3. Update the language switcher in `templates/navbar.html`

### Styling

Modify `assets/css/style.css` to customize colors, fonts, and layout:

- Change the color scheme by updating the CSS variables
- Adjust spacing, typography, and animations
- Add new sections or modify existing ones

## Local Development

Run the included script to start a local server:

```bash
# Default port 8000
./serve.sh

# Custom port
./serve.sh 3000
```

The script uses Python's built-in HTTP server. If Python is not available, it will suggest alternatives.

## Deployment

### GitHub Pages

1. Push your changes to a GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/` folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Other Platforms

This is a static site, so it can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- **HTML5**: Semantic markup with modular templates
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript (ES6+)**: DOM manipulation, event handling, ES6 modules
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

## Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- Inspired by modern DevOps portfolio designs