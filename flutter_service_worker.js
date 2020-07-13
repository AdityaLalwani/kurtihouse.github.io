'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ab17b4f4266b3010b0bb11bc906acf93",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/fonts/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/assets/images/Untitled.png": "a37da3005774ad0725d4d7da4a779e0d",
"assets/FontManifest.json": "df4c5735f5a4cc54a0f8d17b240d6307",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "30017c13c0dc5be0b1b8f236be326dda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8b2eca50565e654c5adba25839eb56d7",
"/": "8b2eca50565e654c5adba25839eb56d7",
"main.dart.js": "8e2672ca3400e926daa903b6882d9cb4",
"manifest.json": "bc67811cf8f6b433fec8faae10e04662"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
