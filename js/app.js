// Immagina — starter logic.
// Loads A1 Unit 1 words from data/a1-unit1.json, plus any words
// Maria adds from the front end (saved in localStorage on this device).
// Audio uses the device's built-in Italian voice (speechSynthesis).

const DATA_URL = 'data/a1-unit1.json';
const STORAGE_KEY = 'immagina-my-words-v1';

async function loadUnit1() {
  const res = await fetch(DATA_URL);
  const data = await res.json();
  const mine = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return [...data.items, ...mine];
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = getPreferences().speechRate;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function render(items) {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';
  for (const item of items) {
    const button = document.createElement('button');
    button.className = 'card';
    button.innerHTML = `
      <span class="image" aria-hidden="true">${item.image}</span>
      <span class="phrase">${item.italian}</span>
    `;
    button.addEventListener('click', () => speak(item.italian));
    cards.appendChild(button);
  }
}

document.getElementById('add-word-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const mine = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  mine.push({
    italian: form.italian.value.trim(),
    image: form.image.value.trim() || '🖼️',
    topic: form.topic.value.trim() || 'Le mie parole',
    level: 'A1',
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mine));
  document.getElementById('add-word-status').textContent = 'Aggiunto! / Added!';
  form.reset();
  loadUnit1().then(render);
});

loadUnit1().then(render);

// Register the service worker for offline use (only on http/https, not file://).
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
