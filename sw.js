// IMPORTANT: Increment this version number whenever you deploy updates
const CACHE_VERSION = 'v15'; // Replace emoji icons with minimal line-based SVG icons
const CACHE_NAME = `sbs-tracker-${CACHE_VERSION}`;
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './amrap_history.json',
  './weeks_data.json',
  './all_programs.json',
  './programs_filtered.json',
  './program-data.js',
  './hypertrophy-program-data.js'
];

self.addEventListener('install', (event) => {
  console.log('[SW] Installing new service worker...');
  // Skip waiting to activate new service worker immediately
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, {cache: 'reload'});
        }));
      })
      .catch((error) => {
        console.error('[SW] Cache addAll error:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating new service worker...');
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all pages immediately
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING message');
    self.skipWaiting();
  }
});
