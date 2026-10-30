// App puente de Credigestión. Independiente de las otras apps.
// No guarda ni borra datos de otras apps: solo deja pasar la conexión.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
