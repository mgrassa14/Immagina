// Shared settings storage and appearance behavior for both app pages.
const PREFERENCES_KEY = 'immagina-preferences-v1';
const DEFAULT_PREFERENCES = { speechRate: 1, appearance: 'system', language: 'it' };

function getPreferences() {
  const saved = localStorage.getItem(PREFERENCES_KEY);
  if (!saved) return { ...DEFAULT_PREFERENCES };

  const preferences = { ...DEFAULT_PREFERENCES, ...JSON.parse(saved) };
  if (!Number.isFinite(preferences.speechRate) ||
      preferences.speechRate < 0.6 ||
      preferences.speechRate > 1.4) {
    throw new Error('Saved speech speed is invalid.');
  }
  if (!['system', 'light', 'dark'].includes(preferences.appearance)) {
    throw new Error('Saved appearance setting is invalid.');
  }
  if (!['it', 'en'].includes(preferences.language)) {
    throw new Error('Saved interface language is invalid.');
  }
  return preferences;
}

function savePreferences(preferences) {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}

function applyAppearance(appearance) {
  if (appearance === 'system') {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = appearance;
  }
}

function applySavedAppearance() {
  applyAppearance(getPreferences().appearance);
}

applySavedAppearance();
window.addEventListener('pageshow', applySavedAppearance);
