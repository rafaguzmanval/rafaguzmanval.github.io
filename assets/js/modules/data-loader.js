// Data loader module to handle CV data and translations
// Since we can't import the global data files directly, we'll access them through window

export function loadCVData() {
    return window.cvData;
}

export function loadTranslations() {
    return window.translations;
}