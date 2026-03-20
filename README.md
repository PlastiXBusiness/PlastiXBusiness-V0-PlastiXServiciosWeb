# Formulario de feedback beta para Telegram

Landing ligera pensada para mostrar en un QR durante un evento. La pagina recoge incidencias anonimas del chatbot de Telegram y, tras el envio, redirige a la hoja de calculo compartida.

## Que incluye

- Formulario anonimo orientado a reportar errores del chatbot
- Frontend listo para desplegar en GitHub Pages
- Script de Google Apps Script para guardar respuestas en la hoja indicada
- Redireccion automatica a Google Sheets despues del envio

## URL esperada de GitHub Pages

Cuando hagas push a `main`, la web se desplegara en:

[https://plastixbusiness.github.io/PlastiXBusiness-V0-PlastiXServiciosWeb/](https://plastixbusiness.github.io/PlastiXBusiness-V0-PlastiXServiciosWeb/)

## Conexion con Google Sheets

1. Abre [Code.gs](/C:/Users/aleix/OneDrive/Escritorio/Codex/web-serviciosplastix-github/google-apps-script/Code.gs) y copia el contenido en un proyecto nuevo de Google Apps Script.
2. En Google Apps Script, publica un `Web app` con acceso `Anyone`.
3. Copia la URL `.../exec` que te genere.
4. Crea un archivo `.env.local` en la raiz del proyecto basado en [.env.example](/C:/Users/aleix/OneDrive/Escritorio/Codex/web-serviciosplastix-github/.env.example).
5. Sustituye `VITE_APPS_SCRIPT_URL` por la URL real del Web App.

Ejemplo:

```bash
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue

El repositorio ya incluye el workflow de GitHub Pages en [.github/workflows/deploy.yml](/C:/Users/aleix/OneDrive/Escritorio/Codex/web-serviciosplastix-github/.github/workflows/deploy.yml). El flujo es:

1. Añadir `.env.local` con la URL del Web App.
2. Hacer commit.
3. Hacer push a `main`.
4. Esperar a que GitHub Actions publique la nueva version.

## Notas

- El formulario no pide nombre ni telefono.
- Las respuestas se guardan en una pestaña llamada `Feedback Telegram`.
- Si quieres que el envio funcione de verdad, la parte de Apps Script tiene que quedar desplegada antes de usar el QR.
