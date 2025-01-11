const staticCache = "static-cache-v1";
const assets = [
    "/",
    "/index.js",
    "/manifest.json",
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(staticCache)
            .then((cache) => {
                cache.addAll(assets)
            }))
})

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter((key) => key !== staticCache && caches.delete(key))
            )
        ))
})
