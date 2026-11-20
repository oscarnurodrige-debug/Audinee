# VYBE v3 — experiencia móvil refinada

## 1. Abrir en Visual Studio Code
1. Descomprime `vybe-v2.zip`.
2. Abre la carpeta `vybe-v2` en Visual Studio Code.
3. Instala la extensión **Live Server**.
4. Abre `index.html` con **Open with Live Server**. No abras el archivo directamente con `file://`.

## 2. Activar búsquedas
La búsqueda requiere una clave de YouTube Data API v3:
1. Abre https://console.cloud.google.com/
2. Crea/selecciona un proyecto.
3. Activa YouTube Data API v3.
4. Crea una API key.
5. Pégala en `config.js`, sustituyendo `PEGA_AQUI_TU_API_KEY`.
6. Guarda y recarga la app.

La reproducción oficial de YouTube no necesita API key, pero la búsqueda sí.

## 3. Por qué algunos vídeos no se reproducen
VYBE ahora solicita vídeos marcados por YouTube como aptos para reproducción integrada y maneja errores del reproductor:
- 101 / 150: el propietario bloquea la reproducción integrada.
- 100: vídeo eliminado, privado o no disponible.
- 153: falta el origen/referer. Usa Live Server o una web HTTPS, nunca `file://`.

Aunque se filtre la búsqueda, YouTube puede cambiar permisos o disponibilidad después. En esos casos prueba otro resultado.

## 4. Instalar en el móvil
La PWA necesita estar alojada en HTTPS (o en localhost):
- Android/Chrome: abre la dirección HTTPS y elige **Instalar aplicación** o **Añadir a pantalla de inicio**.
- iPhone/Safari: botón **Compartir** → **Añadir a pantalla de inicio**.

Live Server sirve para probar en el ordenador. Para instalar desde el móvil, publica la carpeta en un hosting HTTPS, por ejemplo GitHub Pages, Netlify o Vercel.

## 5. Archivos
- `index.html`: interfaz.
- `styles.css`: diseño responsive.
- `app.js`: búsqueda, favoritos y reproductor.
- `config.js`: clave API.
- `manifest.webmanifest`: configuración PWA.
- `sw.js`: caché básica para la app.
- `icon.svg`: icono.

## Nota de uso de YouTube
El reproductor oficial permanece visible y conserva sus controles. VYBE no extrae audio, no oculta el reproductor ni elude anuncios o restricciones. La API key del frontend puede ser visible: restríngela en Google Cloud y no la publiques sin restricciones.


## Novedades de VYBE 3
- Interfaz mobile-first con jerarquía visual más cuidada.
- Navegación inferior y reproductor compacto flotante en móvil.
- Tarjetas, botones, buscador y biblioteca con acabados más consistentes.
- Respeta las áreas seguras de iPhone y mejora los objetivos táctiles.
- Mantiene búsqueda, favoritos, reproductor oficial de YouTube y PWA de la versión anterior.

## Probar en tu móvil
Para probar desde el teléfono mientras el ordenador y el móvil están en la misma Wi-Fi, inicia Live Server y abre en el móvil la dirección IP local del ordenador con el puerto de Live Server (por ejemplo `http://192.168.1.20:5500`). Para instalarla como app y usarla de forma estable, publícala en HTTPS.


## Si todavía aparece el diseño anterior
VYBE 3.1 cambia la versión de caché del Service Worker. Cierra la PWA y vuelve a abrirla. Si la tenías instalada y sigue mostrando la versión anterior, en Chrome entra en Ajustes del sitio → Almacenamiento → Borrar datos del sitio y vuelve a cargarla. En desarrollo, también puedes recargar con Ctrl+Shift+R.


### VYBE 4 — nueva paleta visual
Esta versión sustituye los acentos verdes por violeta/lila y actualiza la caché de la PWA a v4. Usa esta carpeta completa, no mezcles archivos con versiones anteriores.
