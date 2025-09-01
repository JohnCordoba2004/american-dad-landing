# Documentación de JavaScript (app.js)

Este archivo orquesta la carga de datos (personajes y momentos), aplica filtros, gestiona animaciones de entrada y maneja la interacción de la sección de curiosidades.

## Flujo general

1. Al evento `DOMContentLoaded`, se realizan dos `fetch` para leer `personajes.json` y `momentos.json`.
2. Se renderizan las tarjetas de personajes y los momentos en la galería.
3. Se configuran los listeners de scroll para revelar elementos y del filtro por rol.
4. Se habilita el botón de curiosidades para mostrar datos aleatorios con animación.

## Eventos principales

- `DOMContentLoaded`: dispara la carga inicial de datos y el renderizado.
- `scroll` y `load`: invocan `revealOnScroll` para animar la entrada de elementos con clase `.reveal`.
- `change` en `#filtroRol`: vuelve a renderizar personajes filtrando por rol.
- `click` en `#btn-curioso`: actualiza el texto de curiosidad con una transición.

## Funciones

### `revealOnScroll()`
Detecta cuándo los elementos con clase `.reveal` entran al viewport (85% de alto de pantalla) y les agrega la clase `visible` para activar transiciones definidas en CSS.

Pseudocódigo:
```js
const elementos = document.querySelectorAll('.reveal');
const trigger = window.innerHeight * 0.85;
elementos.forEach(el => {
  if (el.getBoundingClientRect().top < trigger) {
    el.classList.add('visible');
  }
});
```

### Listener del filtro
Escucha cambios en `#filtroRol`, vuelve a leer `personajes.json` y filtra por coincidencia exacta de `rol` (o muestra todos si `todos`). Llama a `renderPersonajes` con la lista resultante.

```js
const rol = e.target.value;
const filtrados = rol === 'todos' ? personajes : personajes.filter(p => p.rol === rol);
renderPersonajes(filtrados);
```

### `renderPersonajes(lista)`
- Limpia el contenedor `#personajes-grid`.
- Crea una tarjeta `<article class="card">` por personaje con imagen, nombre, rol y descripción.
- Aplica una animación escalonada añadiendo `visible` con `setTimeout` basado en el índice.

Estructura HTML inyectada:
```html
<article class="card">
  <img src="IMAGEN" alt="NOMBRE">
  <h3>NOMBRE</h3>
  <p><strong>Rol:</strong> ROL</p>
  <p>DESCRIPCION</p>
</article>
```

### `renderMomentos(momentos)`
- Limpia la galería `.galeria`.
- Inserta tarjetas `.momento-card` con imagen y detalle (título, episodio, temporada, descripción).
- Aplica animación escalonada ajustando `opacity` y `transform` vía JS.

Estructura HTML inyectada:
```html
<div class="momento-card">
  <img src="IMAGE" alt="DESCRIPCION">
  <div class="momento-info">
    <h3>TITULO</h3>
    <p><strong>Episodio:</strong> ORIGINAL</p>
    <p><strong>Temporada:</strong> T, Episodio E</p>
    <p>DESCRIPCION</p>
  </div>
</div>
```

## Datos y formatos

- `personajes.json`: cada objeto debe contener `nombre`, `rol`, `descripcion`, `imagen`.
- `momentos.json`: cada objeto debe contener `titulo`, `titulo_original`, `temporada`, `episodio`, `descripcion`, `image`.

## Consideraciones

- En filtros, la comparación por `rol` es exacta y sensible a tildes/espacios. Mantén consistencia entre JSON y opciones del `<select>`.
- Las animaciones escalonadas usan `setTimeout`; evita listas extremadamente largas o ajusta el intervalo.
- Errores de red en `fetch` se reportan por consola; si sirves como archivo local, usa un servidor para evitar CORS.

## Recursos para estudiar

- MDN: `fetch()` — `https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch`
- MDN: `DOMContentLoaded` — `https://developer.mozilla.org/docs/Web/API/Document/DOMContentLoaded_event`
- MDN: `addEventListener` — `https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener`
- MDN: `querySelectorAll` — `https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll`
- MDN: `getBoundingClientRect()` — `https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect`
- MDN: `setTimeout()` — `https://developer.mozilla.org/docs/Web/API/setTimeout`
- MDN: Array `.filter()` — `https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`
- Web.dev: buenas prácticas de `fetch` — `https://web.dev/learn/pwa/web-fetch/`

### Videos recomendados

- [Fetch API Crash Course (Traversy Media)](https://www.youtube.com/watch?v=Oive66jrwBs)
- [Async Await JavaScript Tutorial (Fireship)](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- [DOM Manipulation Tutorial (Web Dev Simplified)](https://www.youtube.com/watch?v=0ik6X4DJKCc)
- [Intersection Observer para efectos en scroll (Fazt Code)](https://www.youtube.com/watch?v=2IbRtjez6ag)
