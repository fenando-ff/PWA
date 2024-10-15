self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('django-app-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/static/css/styles.css',
          '/static/js/main.js',
          '/static/img/undertale_192.png',
          '/static/img/undertale.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  