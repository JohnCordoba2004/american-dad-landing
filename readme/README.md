# American Dad Fanpage

Sitio web estático para explorar personajes y momentos icónicos de American Dad. Incluye filtros por rol, una galería animada y una sección de curiosidades con transiciones suaves.

## Estructura del proyecto

- `index.html`: estructura del documento y secciones principales.
- `style.css`: estilos, gradientes animados y transiciones.
- `app.js`: lógica para cargar datos, filtrar y animar elementos.
- `personajes.json`: datos de personajes.
- `momentos.json`: datos de momentos/episodios.
- `assets/`: imágenes de personajes y momentos.

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari) con soporte para `fetch`, CSS Grid y animaciones CSS.
- En algunos navegadores, abrir `index.html` como archivo local puede bloquear `fetch` de JSON por CORS. Si ocurre, usa un servidor local.

## Cómo usar

1. Descarga o clona este repositorio.
2. Abre `index.html` en tu navegador.
3. Si ves errores de CORS al cargar JSON, levanta un servidor local:
   - Python 3: `python -m http.server 8080`
   - Node.js: `npx http-server . -p 8080` o `npx serve .`
4. Explora las secciones:
   - Filtro por rol para personajes
   - Curiosidades con botón interactivo
   - Galería de momentos con tarjetas animadas

## Personalización rápida

- Cambia el gradiente del héroe en `style.css` dentro de `#hero` y `@keyframes gradiente`.
- Añade o edita personajes en `personajes.json` y momentos en `momentos.json`.
- Ajusta duraciones de animación con las propiedades `transition` y `animation` en `.card`, `.momento-card` y `.reveal`.

## Tecnologías

- HTML5, CSS3 (Grid, transiciones, keyframes), JavaScript (ES6+, `fetch`).
- Sin dependencias externas ni bundlers.

## Créditos y licencia

Proyecto educativo/práctico. Las imágenes y marcas pertenecen a sus respectivos dueños.
