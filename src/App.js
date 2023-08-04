import React from "react";
import "./App.scss";
import Main from "./containers/Main";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import frTranslation from './translations/fr.json';

// Add the translations and configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if the current one is not available
  interpolation: {
    escapeValue: false // React already safely escapes all dynamic values
  }
});


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
