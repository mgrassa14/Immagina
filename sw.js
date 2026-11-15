// Immagina — basic service worker for offline use.
// Starter version: caches the app shell and Unit 1 data on first load.
// Copilot: keep this small, and explain what it caches.
const CACHE = 'immagina-v3';
const FILES = [
  'pages/index.html',
  'pages/settings.html',
  'css/styles.css',
  'js/app.js',
  'js/preferences.js',
  'js/settings.js',
  'data/a1-unit1.json',
  'manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
