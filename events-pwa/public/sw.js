
const staticCacheName = 'site-static'
const dynamicCacheName = 'site-static-v1'
const assets = [
   
    
    './app.js',
    './sw.js',
    './fallback.html'

]

const limitCacheSize = (name,size) => {
    caches.open(name).then(cache => {
        cache.key().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name , size))
            }
        })
    })
}

self.addEventListener('install' , (evt => {

    console.log('service worker has been installed');
    evt.waitUntil( caches.open(staticCacheName).then(cache => {
        console.log('caching all assests');
        cache.addAll(assets)
    }))
   
}))

self.addEventListener('activate' , (evt => {
    console.log('service worker is activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return  Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName ))
                .map(key => caches.delete(key))
        })
    )
}))

self.addEventListener('fetch' , evt => {
    evt.preventDefault()
    console.log('fetch events' , evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
             return cacheRes || fetch(evt.request)
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1){
                return caches.match('/fallback.html')
            }
          
        })
    )
})


// importScripts(
//     "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
//   );
  
//   if (workbox) {
//     // set debug mode
//     workbox.setConfig({
//       debug: true,
//     });
  
//     const wkb = {
//       ...workbox.core,
//       ...workbox.routing,
//       ...workbox.precaching,
//       ...workbox.strategies,
//       ...workbox.cacheableResponse,
//     };
//     const {
//       clientsClaim,
//       cacheNames,
//       setCacheNameDetails,
//       NavigationRoute,
//       registerRoute,
//       preCaching,
//       NetworkFirst,
//       NetworkOnly,
//       CacheFirst,
//       CacheOnly,
//       StaleWhileRevalidate,
//       CacheExpiration,
//       ExpirationPlugin,
//       CacheableResponsePlugin,
//     } = wkb;
  
//     // Cache routes...
//     registerRoute(
//       // Check to see if the request is a navigation to a new page
//       ({ request }) => request.mode === "navigate",
//       // Use a Network First caching strategy
//       new NetworkFirst({
//         // Put all cached files in a cache named 'pages'
//         cacheName: "pages",
//         plugins: [
//           // Ensure that only requests that result in a 200 status are cached
//           new CacheableResponsePlugin({
//             statuses: [200],
//           }),
//           new ExpirationPlugin({
//             maxEntries: 60,
//             maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day
//           }),
//         ],
//       })
//     );
  
//     self.skipWaiting();
//     clientsClaim();
//   }
  