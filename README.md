# ReservaYá · Hotel Costa Andina

Conserjería gastronómica digital para los restaurantes del hotel.

## Deploy en Railway

1. Conectar el repo en [Railway](https://railway.app)
2. Railway detecta automáticamente Node.js
3. El servidor Express sirve los archivos estáticos desde `/public`

## Desarrollo local

```bash
npm install
npm start
```

Abre http://localhost:3000

## Estructura

- `server.js` — servidor Express mínimo
- `public/index.html` — app completa (HTML + CSS inline)
- `public/reservaya.js` — lógica de la app
