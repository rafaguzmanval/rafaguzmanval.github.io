// CV Application Main Script
// Orchestrates loading of templates and data

import { PDFGenerator } from './modules/pdf-generator.js';
import { 
    animateOnScroll, 
    setupSmoothScrolling, 
    setupScrollSpy, 
    loadTemplate, 
    insertTemplate, 
    replacePlaceholders 
} from './modules/utils.js';
import { loadPersonalInfo } from './modules/personal.js';
import { loadSkills } from './modules/skills.js';
import { loadExperience } from './modules/experience.js';
import { loadEducation } from './modules/education.js';
import { loadCertifications } from './modules/certifications.js';

// Global variables
let currentLang = 'es'; // Default language
let pdfGenerator;

document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, initializing CV application...');

    try {
        // No asignar translations ni cvData, usar window.translations y window.cvData directamente
        console.log('Translations loaded:', window.translations);
        console.log('CV data loaded:', window.cvData);

        // Initialize PDF Generator
        pdfGenerator = new PDFGenerator(window.cvData, window.translations);
        console.log('PDF Generator initialized');

        // Initialize observer for animations
        const observer = window.animateOnScroll();
        console.log('Observer initialized');

        // Initialize with default language
        await switchLanguage(currentLang, observer);
        console.log('Language initialized');

        // Setup interactions
        window.setupSmoothScrolling();
        window.setupScrollSpy();
        setupLanguageSwitcher(observer);
        setupPDFDownloadButton();
        console.log('CV application initialized successfully');

    } catch (error) {
        console.error('Error initializing CV application:', error);
    }
});

// Load translations and CV data (already loaded via script tags)
function loadTranslations() {
    // Translations are loaded via script tag in HTML, so they're available globally
    return window.translations;
}

function loadCVData() {
    // CV data is loaded via script tag in HTML, so it's available globally
    return window.cvData;
}

function loadAllTemplates() {
    console.log('Loading templates...');

    // Load navbar first
    const navbarContainer = document.getElementById('navbar-container');
    const navbarPromise = window.loadTemplate('templates/navbar.html').then(function(navbarContent) {
        navbarContent = window.replacePlaceholders(navbarContent, window.translations, currentLang);
        navbarContainer.innerHTML = navbarContent;
        console.log('Navbar template loaded');
        return navbarContent;
    }).catch(function(error) {
        console.error('Failed to load navbar template:', error);
        throw error;
    });

    // Load main content templates
    const mainContent = document.getElementById('main-content');
    const templates = [
        'templates/hero.html',
        'templates/about.html',
        'templates/skills.html',
        'templates/experience.html',
        'templates/education.html',
        'templates/certifications.html',
        'templates/contact.html'
    ];

    const templatePromises = templates.map(function(template) {
        return window.loadTemplate(template).then(function(templateContent) {
            templateContent = window.replacePlaceholders(templateContent, window.translations, currentLang);
            console.log(`Template ${template} loaded`);
            return templateContent;
        }).catch(function(error) {
            console.error(`Failed to load template ${template}:`, error);
            throw error;
        });
    });

    // Wait for all templates to load, then insert in order
    const allTemplatesPromise = Promise.all(templatePromises).then(templateContents => {
        templateContents.forEach(content => {
            window.insertTemplate(mainContent, content);
        });
    });

    return Promise.all([navbarPromise, allTemplatesPromise]);
}


async function switchLanguage(lang, observer) {
    console.log('Switching language to:', lang);
    currentLang = lang;

    // Save current scroll position
    const scrollY = window.scrollY;

    // Clear existing content
    clearContent();

    // Reload templates with new language
    await loadAllTemplates();

    // Update language indicator
    const t = window.translations[currentLang];
    const langElem = document.getElementById('current-lang');
    if (langElem) {
        langElem.textContent = t['lang_' + lang];
    }

    // Reload all data with new language
    window.loadPersonalInfo(window.cvData, currentLang);
    window.loadSkills(window.cvData, currentLang, observer, window.translations);
    window.loadExperience(window.cvData, currentLang, observer, window.translations);
    window.loadEducation(window.cvData, currentLang, observer, window.translations);
    window.loadCertifications(window.cvData, currentLang, observer, window.translations);

    // Re-setup interactions since navbar was reloaded
    window.setupSmoothScrolling();
    window.setupScrollSpy();
    setupLanguageSwitcher(observer);

    // Restore scroll position
    setTimeout(() => window.scrollTo(0, scrollY), 50);

    console.log('Language switched successfully');
}

function clearContent() {
    const navbarContainer = document.getElementById('navbar-container');
    const mainContent = document.getElementById('main-content');
    navbarContainer.innerHTML = '';
    mainContent.innerHTML = '';
}

function setupLanguageSwitcher(observer) {
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            if (lang !== currentLang) {
                await switchLanguage(lang, observer);
            }
        });
    });
}

function setupPDFDownloadButton() {
    const downloadBtn = document.getElementById('download-pdf-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            pdfGenerator.generateAndDownload(currentLang);
        });
        console.log('PDF download button initialized');
    } else {
        console.warn('PDF download button not found');
    }
}