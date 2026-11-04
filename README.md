# CHOKAO | Sitio web

Proyecto web estático de CHOKAO preparado para publicarse en Cloudflare Workers Static Assets.

## Estructura
- `CHOKAO_WEB/`: sitio web, estilos, JavaScript, imágenes y tipografía.
- `wrangler.jsonc`: configuración del Worker `chokaocacao`.
- `package.json`: comandos locales y de despliegue.
- `DEPLOYMENT.md`: instrucciones de publicación.

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

Las imágenes PNG del paquete fuente se optimizaron a WebP para reducir el peso de descarga. Se actualizaron sus referencias en HTML/CSS. Las imágenes JPG y la fuente WOFF2 se mantienen. El paquete original entregado permanece como respaldo de los recursos originales.
