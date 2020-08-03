/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/2020/07/27/hello-world/index.html","8a63ceff4ea57564b8219ba6519df931"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/2020/07/31/哈哈哈哈/index.html","123ce036c31464bc4d8e99191596685f"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/2020/08/03/获取0-24时间戳/index.html","62af893f8b8ea692f5823692948c2e95"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/404.html","c6008833e8f8a577887d0f85a1feee03"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/archives/2020/07/index.html","dead9b1171289c3104c1322b8ba03925"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/archives/2020/08/index.html","66e56ba732ca9dc952dffbcf49bf7909"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/archives/2020/index.html","33f975c76c773a9599231a1b5001aa81"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/archives/index.html","f8d2faecba33e167fdcb958ad123114d"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/categories/index.html","b2521c23bf69c497264fb3688918c3b0"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/css/index.css","98340f349187d8b18b958573dc89a5a9"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/images/avatar.jpg","bf65b9185061d33201fd3a1f232a61e9"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/images/home_top.jpg","e2fc235697648ab0365b1ff1d2b6fb59"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/index.html","64691ebca31e3d37b8e4d469058de429"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/link/index.html","03d1df7eb1aca3472058b834d3221634"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/movies/index.html","4e702758222ca363ca29cb34c0024a4b"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/music/index.html","5ff7ed761fbb9e75ae35eeda8c7aa54c"],["D:/Users/Administrator/Desktop/blog/HEXO/blog/public/tags/index.html","2037fd4abf9cbbcd1f80bf0c33a8ddda"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







