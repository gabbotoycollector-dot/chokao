# CHOKAO | Sitio web

Proyecto web estático de CHOKAO preparado para publicarse en Cloudflare Workers Static Assets.

## Estructura

- `CHOKAO_WEB/`: página, hojas de estilo, JavaScript, imágenes y tipografía.
- `wrangler.jsonc`: configuración del Worker `chokao`.
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

Las imágenes se sirven en WebP desde los originales: los PNG conservan su transparencia (hero, nuestra-esencia, producto-principal) y las fotos se exportan en alta calidad, con variantes `srcset` para pantallas retina. La tipografía local WOFF2 es el archivo completo (no un subconjunto).
