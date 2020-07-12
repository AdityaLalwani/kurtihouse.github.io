'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "f95b0618e8893143af2fdc81ded0b574",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "c8b446a629e2781eae70ee70ea1cfc9c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11fb7a06d2331b2552a94a2f046c8aa9",
".git/logs/refs/heads/master": "11fb7a06d2331b2552a94a2f046c8aa9",
".git/logs/refs/remotes/origin/HEAD": "11fb7a06d2331b2552a94a2f046c8aa9",
".git/objects/pack/pack-fe084071f751dbab2e20814362ec6823063daf4b.idx": "0e69e116637cf14ba470336e0b239ced",
".git/objects/pack/pack-fe084071f751dbab2e20814362ec6823063daf4b.pack": "4274b9f8ba0501bbb212fcf2c3320fc2",
".git/packed-refs": "54ac6c087c567d713f37ddfb7762f3b6",
".git/refs/heads/master": "4f903582bf6836d9941d792ea8123492",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.json": "199aa137f549b47915da14c03718f3ad",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/fonts/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/FontManifest.json": "df4c5735f5a4cc54a0f8d17b240d6307",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "87fb6641bafc19e8128f80c73b201789",
"/": "87fb6641bafc19e8128f80c73b201789",
"main.dart.js": "19d5cf94770433ae9de2ecb739289450",
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
