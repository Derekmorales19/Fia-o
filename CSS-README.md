# FIA’O — CSS centralizado e integrado

## Archivo activo
- `asset/css/app.css`: hoja de estilos centralizada cargada por las 12 páginas HTML.

## Páginas y clases de alcance
| Página | Clase del body |
|---|---|
| `index.html` | `page-home` |
| `about.html` | `page-about` |
| `contacto.html` | `page-contact` |
| `login.html` | `page-login` |
| `register.html` | `page-register` |
| `customer-dashboard.html` | `page-customer-dashboard` |
| `owner-dashboard.html` | `page-owner-dashboard` |
| `owner-clients.html` | `page-owner-clients` |
| `owner-credits.html` | `page-owner-credits` |
| `owner-products.html` | `page-owner-products` |
| `owner-reports.html` | `page-owner-reports` |
| `profile.html` | `page-profile` |

## Integración de la versión nueva
Se conservaron los HTML, JavaScript y demás recursos de `Fia-o-main (1).zip`.
Los enlaces de las páginas se conectaron a `asset/css/app.css` y se repusieron las clases `page-*` necesarias para limitar los estilos por página.

En particular:
- Se conservaron las modificaciones recientes de `contacto.html` (incluida la eliminación de la navegación, el banner del asistente, el footer y el chat flotante).
- Se conservaron las modificaciones recientes de `login.html` (incluida la eliminación de la navegación).
- Se conservó el `login.css` más reciente dentro del respaldo. Sus estilos de navegación retirados no se reintrodujeron como estilos específicos de login; la hoja centralizada ya incluye los estilos compartidos de navegación.

## Respaldo
`backup/css-originales.zip` contiene las hojas CSS de la versión nueva antes de integrarlas, incluyendo `Style.css`.

## Nota de validación
Se verificaron los enlaces CSS locales, las clases de página, la presencia de los archivos JavaScript referenciados y la sintaxis estructural del CSS. No se ejecutó una prueba visual en navegador ni una prueba funcional de todos los flujos; por eso conviene revisar las páginas en el navegador antes de publicar.
