# Despliegue en Cloudflare Workers

Este proyecto está preparado para el Worker `chokaocacao`.

## Configuración

- Plataforma: Cloudflare Workers
- Configuración: `wrangler.jsonc`
- Directorio de assets: `./CHOKAO_WEB`
- Build command en Workers Builds: `npm install`
- Deploy command en Workers Builds: `npm run deploy`
- Rama de producción: `main`

## Publicación manual

Requiere Node.js y autenticación con Cloudflare:

```bash
npm install
npx wrangler login
npm run deploy
```

## Conectar GitHub con Cloudflare

En Cloudflare Dashboard, abre **Workers & Pages**, selecciona `chokaocacao` y conecta el repositorio `gabbotoycollector-dot/chokao` desde la configuración de Builds. Selecciona la rama `main` y usa los comandos indicados arriba. Autoriza la integración GitHub y completa la autenticación que solicite Cloudflare.

El repositorio ya incluye `wrangler.jsonc`; la publicación automática empieza cuando se autoriza y configura esa conexión en Cloudflare. El formulario de contacto sigue siendo demostrativo, como en el archivo fuente.
