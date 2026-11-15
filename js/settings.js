const preferences = getPreferences();
const speechRate = document.getElementById('speech-rate');
const speechRateValue = document.getElementById('speech-rate-value');
const appearance = document.getElementById('appearance');
const status = document.getElementById('settings-status');

speechRate.value = preferences.speechRate;
speechRateValue.value = `${preferences.speechRate.toFixed(1)}×`;
appearance.value = preferences.appearance;

speechRate.addEventListener('input', () => {
  speechRateValue.value = `${Number(speechRate.value).toFixed(1)}×`;
});

speechRate.addEventListener('change', () => {
  const updatedPreferences = getPreferences();
  updatedPreferences.speechRate = Number(speechRate.value);
  savePreferences(updatedPreferences);
  status.dataset.i18nStatus = 'settingsSaved';
  status.textContent = getUiText('settingsSaved');
});

appearance.addEventListener('change', () => {
  const updatedPreferences = getPreferences();
  updatedPreferences.appearance = appearance.value;
  savePreferences(updatedPreferences);
  applyAppearance(updatedPreferences.appearance);
  status.dataset.i18nStatus = 'settingsSaved';
  status.textContent = getUiText('settingsSaved');
});
