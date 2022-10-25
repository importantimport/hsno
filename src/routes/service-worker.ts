import { setupServiceWorker } from '@builder.io/qwik-city/service-worker'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

setupServiceWorker()

addEventListener('install', () => self.skipWaiting())

addEventListener('activate', () => self.clients.claim())

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

declare const self: ServiceWorkerGlobalScope
