// NEXUS Móvil (22OCTV3-MOVIL, 2026-10-22, #68): archivo de servicio mínimo para que Chrome ofrezca "Instalar app".
// No guarda nada en caché: todo (el panel y los datos de Google Sheets) se pide siempre en línea, así cada cambio se ve al
// momento y ningún dato de clientes se queda guardado en el teléfono.
self.addEventListener('install', ()=> self.skipWaiting());
self.addEventListener('activate', e=> e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', ()=> {});   // sin caché: el navegador atiende cada petición como siempre
