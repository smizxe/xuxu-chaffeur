import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage on initial load, default to EN
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang ? savedLang : 'EN';
    });

    // Update localStorage whenever lang changes
    useEffect(() => {
        localStorage.setItem('language', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'EN' ? 'VI' : 'EN'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
