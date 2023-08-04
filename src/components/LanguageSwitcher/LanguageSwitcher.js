import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';
import flagIconUS from '../../assets/images/royaume-uni.png';
import flagIconFR from '../../assets/images/france.png';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`language-button ${i18n.language === 'en' ? 'selected' : ''}`}
      >
        <img src={flagIconUS} alt="English Flag" className="flag-icon" /> English
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`language-button ${i18n.language === 'fr' ? 'selected' : ''}`}
      >
        <img src={flagIconFR} alt="French Flag" className="flag-icon" /> Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
