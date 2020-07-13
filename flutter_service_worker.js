'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e3c3b6afe04ec0706c6002192765e405",
".git/config": "f95b0618e8893143af2fdc81ded0b574",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "18ede34e6dfaa5e4aa60882b316b611f",
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
".git/index": "e93b003008a93679276e2d3740b56085",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aad1687df82d951ba6d5a4e168057e07",
".git/logs/refs/heads/master": "aad1687df82d951ba6d5a4e168057e07",
".git/logs/refs/remotes/origin/HEAD": "11fb7a06d2331b2552a94a2f046c8aa9",
".git/logs/refs/remotes/origin/master": "d2c9cfe0bd08e6d751308264601def86",
".git/objects/10/a57fdf68d5c02ef8ab3df44de4460936787753": "87fe5f2aad3c81320a42c3e6a65b47be",
".git/objects/16/9d180b46167e6ca7e67037fb951b36083bf93f": "f881af30f074799d98f9cce24c16ac13",
".git/objects/1c/1165add0a75c0d84eed532313d116b8a727626": "37f868ec2792115570ca054d16606f4c",
".git/objects/3e/948b03519d1683a895063f72c4497b6f8a76a2": "13b40306f107d4ca3cf7285bc0ef63cb",
".git/objects/42/331d9fb8b48ee34a2a9cb03cbb7bae838a51b7": "d8d2e46eab6494ba988fb53f69eafdee",
".git/objects/53/e25226da5e151d529027d209ec441ecd9144a0": "0bb788949107ae529464fd495a5d438f",
".git/objects/5e/5e3891cf8811ed409753147454f0fdce9c37ef": "f8df68638ff64da3580b378acfbf89b5",
".git/objects/70/150e9cd7632b35e80ebb5f4efe84e378b6e601": "b3a14a7025a51447e02a5af95292746c",
".git/objects/85/ede58750042849776df6f64fa5b6f66e33e351": "a1570d60415e68646062cebd27b21117",
".git/objects/a2/eb13ca0ad7611a7d0e979f21fcb519048e4473": "a71d213ecd9c4d4dca6bfcf9c0fc5ceb",
".git/objects/ab/edd8c1480b6d844b855402fb26ed0189016613": "738316cd5f0605bcf513dcd7c9b9abea",
".git/objects/af/75a779f86470838d9dd6f789acd58584433e79": "c20bff94ba91c03d56d7b2e4e459994d",
".git/objects/b4/d4626ac39b100135988e77d446e27f661d84c6": "2b4043e361cfbab00f581ed76f7fd7ae",
".git/objects/ba/c656d90d8089b3decbaba5516c179ab180bc29": "a48c365c956e78368dd4a19913cb950e",
".git/objects/d4/83e3614620958c5da3a94c2b8d76adc46d0a94": "6760f6993f348c3dfee487d0eda4fbbc",
".git/objects/e3/15b51386f4b16fc4eaa176d1928ade425f13b1": "49d88f364c70f84b8f62807cbb3842e6",
".git/objects/e9/72770abdb5d5b0bcc4bd67d87b695b3371fb00": "7cb03c4c87c7bd4cf7eb22d5cc301ed7",
".git/objects/ed/7fa962171400b0cfcbc623c92884a5dc704b01": "ef7756036459a4d27b21a6d2d6efcd0c",
".git/objects/f7/ee4751280e7d6a1f287515c3863f39da15cfc4": "a700f762ef23bf36b02de0f6fb53fb7a",
".git/objects/fd/bf73b3da1f565f385f7a498e4284bbba422ea5": "179a2fc3c2fbb2efe436732f6d0fc48e",
".git/objects/pack/pack-fe084071f751dbab2e20814362ec6823063daf4b.idx": "0e69e116637cf14ba470336e0b239ced",
".git/objects/pack/pack-fe084071f751dbab2e20814362ec6823063daf4b.pack": "4274b9f8ba0501bbb212fcf2c3320fc2",
".git/packed-refs": "54ac6c087c567d713f37ddfb7762f3b6",
".git/refs/heads/master": "5fa12993063a71b41f82e1052a8b5657",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "5fa12993063a71b41f82e1052a8b5657",
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
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "87fb6641bafc19e8128f80c73b201789",
"/": "87fb6641bafc19e8128f80c73b201789",
"main.dart.js": "194e9696a214cfbe4e2e8aa883f90207",
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
