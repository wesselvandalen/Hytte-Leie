const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/assets/bakgrunn.jpg'
];

// Installere Service Worker og cache bildet
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Sjekke om ressursen finnes i cache, ellers hent fra nettverket
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Returner fra cache hvis funnet
        if (response) {
          return response;
        }
        // Ellers hent fra nettverket
        return fetch(event.request).then(networkResponse => {
          // Cache den nye responsen for fremtidige forespørsler
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        });
      })
  );
});

// Oppdatere cache ved aktivering (fjerne gamle cacher)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});