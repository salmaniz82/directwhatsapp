// Minimal Service Worker - service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  self.skipWaiting(); // Activate the SW immediately
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  // Just log the fetch event for now
  console.log("Fetch intercepted for:", event.request.url);
});
