const INTERFACE_TEXT = {
  it: {
    homeTitle: "Immagina — Impara l'italiano vedendo",
    tagline: 'Vedi. Ascolta. Parla.',
    unitTitle: 'A1 · Unità 1',
    lessonHint: 'Tocca una carta per sentire la frase.',
    addWordTitle: 'Aggiungi una parola',
    addWordHint: 'Aggiungi una parola: verrà salvata su questo dispositivo e apparirà negli esercizi.',
    italianWordLabel: 'Parola italiana',
    italianWordPlaceholder: 'es. il pane',
    imageLabel: 'Immagine (emoji temporanea — sostituiscila con una foto più tardi)',
    imagePlaceholder: 'es. 🍞',
    topicLabel: 'Argomento',
    topicPlaceholder: 'es. Cibo',
    addWordButton: 'Aggiungi',
    aboutTitle: 'Come funziona',
    aboutPictureFirst: 'Prima l’immagine: impara l’italiano direttamente da ciò che vedi.',
    aboutPractice: 'Ogni unità include esercizi visivi, orali e scritti.',
    aboutOffline: 'Disponibile offline dopo il primo caricamento online.',
    navigationLabel: 'Navigazione in basso',
    homeLink: 'Home',
    settingsLink: 'Impostazioni',
    settingsTitle: 'Impostazioni — Immagina',
    settingsHeading: 'Impostazioni',
    preferencesHeading: 'Preferenze',
    speechRateLabel: 'Velocità della voce italiana',
    appearanceLabel: 'Aspetto',
    appearanceSystem: 'Come il dispositivo',
    appearanceLight: 'Chiaro',
    appearanceDark: 'Scuro',
    languageButtonLabel: 'Cambia la lingua dell’interfaccia in inglese',
    wordAdded: 'Aggiunto!',
    settingsSaved: 'Impostazioni salvate.',
  },
  en: {
    homeTitle: 'Immagina — Learn Italian by seeing',
    tagline: 'See. Listen. Speak.',
    unitTitle: 'A1 · Unit 1',
    lessonHint: 'Tap a card to hear the phrase.',
    addWordTitle: 'Add a word',
    addWordHint: 'Add a word: it will be saved on this device and appear in practice.',
    italianWordLabel: 'Italian word',
    italianWordPlaceholder: 'e.g. il pane',
    imageLabel: 'Image (temporary emoji — replace it with a photo later)',
    imagePlaceholder: 'e.g. 🍞',
    topicLabel: 'Topic',
    topicPlaceholder: 'e.g. Cibo',
    addWordButton: 'Add',
    aboutTitle: 'How it works',
    aboutPictureFirst: 'Picture first: learn Italian directly from what you see.',
    aboutPractice: 'Every unit includes visual, speaking, and writing practice.',
    aboutOffline: 'Available offline after the first online load.',
    navigationLabel: 'Bottom navigation',
    homeLink: 'Home',
    settingsLink: 'Settings',
    settingsTitle: 'Settings — Immagina',
    settingsHeading: 'Settings',
    preferencesHeading: 'Preferences',
    speechRateLabel: 'Italian speech speed',
    appearanceLabel: 'Appearance',
    appearanceSystem: 'Use device setting',
    appearanceLight: 'Light mode',
    appearanceDark: 'Dark mode',
    languageButtonLabel: 'Switch interface language to Italian',
    wordAdded: 'Added!',
    settingsSaved: 'Settings saved.',
  },
};

function getUiText(key) {
  return INTERFACE_TEXT[getPreferences().language][key];
}

function applyLanguage(language) {
  const text = INTERFACE_TEXT[language];
  document.documentElement.lang = language;

  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = text[element.dataset.i18n];
  }
  for (const element of document.querySelectorAll('[data-i18n-placeholder]')) {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  }
  for (const element of document.querySelectorAll('[data-i18n-aria-label]')) {
    element.setAttribute('aria-label', text[element.dataset.i18nAriaLabel]);
  }
  for (const element of document.querySelectorAll('[data-i18n-status]')) {
    if (element.textContent) {
      element.textContent = text[element.dataset.i18nStatus];
    }
  }

  const languageButton = document.getElementById('language-toggle');
  languageButton.textContent = language === 'it' ? 'English' : 'Italiano';
  languageButton.setAttribute('aria-label', text.languageButtonLabel);
}

applyLanguage(getPreferences().language);
window.addEventListener('pageshow', () => applyLanguage(getPreferences().language));

document.getElementById('language-toggle').addEventListener('click', () => {
  const preferences = getPreferences();
  preferences.language = preferences.language === 'it' ? 'en' : 'it';
  savePreferences(preferences);
  applyLanguage(preferences.language);
});
