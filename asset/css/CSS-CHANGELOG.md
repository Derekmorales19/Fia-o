# Registro de integración — FIA’O

Base de integración: `Fia-o-main (1).zip`  
CSS centralizado reutilizado: `Fia-o-main-CSS-optimizado.zip`

## Archivos HTML actualizados
En los 12 archivos siguientes se cambió el enlace local de CSS a `asset/css/app.css` y se añadió la clase de página correspondiente al elemento `<body>`:
- `index.html` — `page-home`
- `about.html` — `page-about`
- `contacto.html` — `page-contact`
- `login.html` — `page-login`
- `register.html` — `page-register`
- `customer-dashboard.html` — `page-customer-dashboard`
- `owner-dashboard.html` — `page-owner-dashboard`
- `owner-clients.html` — `page-owner-clients`
- `owner-credits.html` — `page-owner-credits`
- `owner-products.html` — `page-owner-products`
- `owner-reports.html` — `page-owner-reports`
- `profile.html` — `page-profile`

## Cambios recientes conservados
- `contacto.html`: se conservaron los cambios de estructura de la versión nueva, incluida la retirada de la barra de navegación, el banner del asistente, el footer y el widget de chat.
- `login.html`: se conservó la retirada de la barra de navegación.
- `asset/js/login.js`: se conservó la versión nueva.
- `asset/css/contacto.css`: las reglas y declaraciones coinciden con el respaldo anterior; se conserva la versión nueva en el ZIP de respaldo.
- `asset/css/login.css`: la versión nueva retiró reglas de navegación; estas reglas compartidas ya están contempladas por `app.css`.

## Archivos CSS
- `asset/css/app.css`: se conserva como única hoja CSS activa.
- Las hojas CSS individuales de la versión nueva se guardaron en `backup/css-originales.zip`.
- No se eliminaron los archivos JavaScript ni se modificó intencionalmente su lógica.

## Comprobaciones
- Los 12 HTML enlazan `asset/css/app.css`.
- Los 12 HTML tienen su clase `page-*`.
- Los enlaces locales a CSS y los scripts locales referenciados existen.
- No se realizó prueba visual en navegador ni prueba de extremo a extremo de las funcionalidades.
