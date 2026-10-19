// Service worker: l'app si apre subito dalla cache (anche senza rete)
// e in background scarica l'eventuale versione nuova, che vedrai all'apertura successiva.
const CACHE = 'palestra-v1';
const FILES = ['./', './index.html', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const rete = fetch(e.request).then(async r => {
    if (r.ok) { const copia = r.clone(); const c = await caches.open(CACHE); await c.put(e.request, copia); }
    return r;
  });
  e.waitUntil(rete.catch(() => {}));
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then(cached => cached || rete)
      .catch(() => caches.match('./index.html'))
  );
});
