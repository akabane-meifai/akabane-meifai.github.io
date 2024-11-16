self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('GreenPencil-v1').then(cache => cache.add("/GreenPencil/"))
	);
});
self.addEventListener('fetch', event => {
	const { request } = event;
	event.respondWith(
		caches.match(event.request).then(response => response || fetch(event.request))
	);
});
