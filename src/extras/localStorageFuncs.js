export const savePreferedLanguage = (lang) => {
    localStorage.setItem("lang", lang);
}

export const getPreferedLanguage = (defaultLang = 'en') => {
    const lang = localStorage.getItem('lang');
    return lang || defaultLang
}