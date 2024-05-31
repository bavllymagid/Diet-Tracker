/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                'src/index.html',
                'src/index.css',
                'src/App.js',
                'src/App.css',
                '/dogo.png',
                '/sadDogo.png',
                '/android-chrome-192x192.png',
                '/android-chrome-512x512.png',
                '/apple-touch-icon.png',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/favicon.ico',
                '/robots.txt',
                'src/components/DietTracker.css',
                'src/components/DietTracker.js',
                'src/components/HistoryPage.css',
                'src/components/HistoryPage.js',
                'src/components/ProfilePage.css',
                'src/components/ProfilePage.js',
                'src/components/items/MealTimeItem.css',
                'src/components/items/MealTimeItem.js',
                'src/components/items/ProgressBar.css',
                'src/components/items/ProgressContainer.js',
                'src/components/utils/DataStorage.js',
                'src/logo.svg'
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

