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
  preferences.speechRate = Number(speechRate.value);
  savePreferences(preferences);
  status.textContent = 'Impostazioni salvate.';
});

appearance.addEventListener('change', () => {
  preferences.appearance = appearance.value;
  savePreferences(preferences);
  applyAppearance(preferences.appearance);
  status.textContent = 'Impostazioni salvate.';
});
