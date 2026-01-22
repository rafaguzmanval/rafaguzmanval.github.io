# DevOps Engineer CV Template

A professional, responsive CV website template built with vanilla JavaScript and Bootstrap, designed specifically for DevOps engineers and software developers.

## Features

- 🎨 **DevOps-themed Design**: Clean, technical aesthetic with blue/green color scheme
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Static HTML**: No runtime JavaScript required for content display
- 🏗️ **Modular Architecture**: Static HTML files for each language version
- 🌍 **Internationalization**: Full English and Spanish language support
- 📝 **Template System**: Easy to customize by editing data files
- 🚀 **Local Development**: Built-in script for local testing
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML

## Quick Start

1. **Clone or download** this repository
2. **Add your profile picture** (optional): Place your photo as `data/avatar.jpg`
3. **Customize your data** in `data/cv-data.js`
4. **Generate static pages** with `./build-static.sh`
5. **Test locally** with `./serve.sh`
6. **Deploy** to GitHub Pages or any static hosting

## Project Structure

```
├── index.html              # Main HTML file (Spanish version)
├── pdf-template.html       # PDF version template
├── static/                 # Generated static files
│   ├── en/                # English version
│   │   ├── index.html     # English CV
│   │   ├── assets/        # CSS and JS assets
│   │   └── data/          # Data files
│   └── es/                # Spanish version (default)
│       ├── index.html     # Spanish CV
│       ├── assets/        # CSS and JS assets
│       └── data/          # Data files
├── assets/
│   ├── css/
│   │   └── style.css      # Custom DevOps-themed styles
│   └── js/
│       └── modules/       # JavaScript modules (for advanced features)
├── data/
│   ├── cv-data.js         # CV data: shared + language-specific content
│   ├── translations.js    # UI text translations
│   ├── avatar.jpg         # Your profile picture (optional)
│   ├── CV-rafael-guzman-en.pdf # English CV PDF
│   └── CV-rafael-guzman-es.pdf # Spanish CV PDF
├── serve.sh              # Local development server script
├── build-static.sh       # Static page generation script
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

### Generating Static Pages

After customizing your data, run the build script to generate static HTML files:

```bash
./build-static.sh
```

This creates static versions in the `static/` directory for both English and Spanish.

## Architecture

This project now uses a static approach for better performance and reliability:

- **Static HTML**: Content is pre-generated at build time
- **Data Separation**: Content remains in `data/cv-data.js` for easy updates
- **Language Support**: Separate static files for each language
- **Build Process**: Simple script generates both language versions

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

- **English (EN)**: Available at `static/en/index.html`
- **Spanish (ES)**: Available at `static/es/index.html` (default)

Both versions are generated statically from the same data source.

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

Simply upload the contents of the `static/` directory to your preferred platform.

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript (ES6+)**: DOM manipulation for advanced features
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