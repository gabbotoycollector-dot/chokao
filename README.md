# CHOKAO | Sitio web

Proyecto web estático de CHOKAO preparado para publicarse en Cloudflare Workers Static Assets.

## Estructura

- `CHOKAO_WEB/`: página, hojas de estilo, JavaScript, imágenes y tipografía.
- `wrangler.jsonc`: configuración del Worker `chokaocacao`.
- `package.json`: comandos locales y de despliegue.
- `DEPLOYMENT.md`: guía de publicación.

## Desarrollo local

Requiere Node.js.

```bash
npm install
npm run dev
```

## Publicación

```bash
npm install
npm run deploy
```

Las imágenes utilizadas por la página se optimizaron al formato AVIF para reducir el peso de descarga. Se actualizaron únicamente las rutas de esos recursos en el HTML/CSS y se corrigió el ancho inválido del contenedor de la imagen principal. La tipografía local WOFF2 está incluida. El ZIP fuente original sigue siendo el respaldo de todos los archivos y variantes originales.
