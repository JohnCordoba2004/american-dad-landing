# Documentación de CSS (style.css)

Este archivo define la apariencia del sitio: tipografías, layout con Grid, tarjetas, galería, footer fijo y animaciones (incluido un gradiente animado en el héroe).

## Estructura general

- Reset básico con `box-sizing: border-box`.
- Tipografías importadas de Google Fonts (`Anton`, `Bangers`, `Black Ops One`, `Orbitron`).
- `body` con fondo gris suave usando un gradiente estático, y `scroll-behavior: smooth` en `html`.

## Layout y secciones

- `header`: gradiente oscuro, sombra y enlaces con hover que cambian a amarillo.
- `main`: contenedor centrado hasta 1200px con padding.
- `section`: tarjetas blancas con borde redondeado, sombra y separación.
- `footer`: fijo al fondo, con gradiente y borde superior amarillo.

## Componentes

### Filtro (`#filtro`)
- Fondo con gradiente claro y controles redondeados (`select`) con transiciones.

### Cards (`.card`)
- Fondo con gradiente muy sutil, borde redondeado, sombra y transición.
- Estado hover eleva la tarjeta y colorea el borde en `#f1c40f`.
- La clase `.visible` controla la animación de entrada (opacidad + translateY).

### Galería de momentos (`.galeria`, `.momento-card`)
- Grid responsivo con `repeat(auto-fit, minmax(...))`.
- Tarjetas `.momento-card` con overflow oculto para permitir zoom suave de la imagen en hover.
- Información del momento con subrayado decorativo en `h3`.

## Animaciones y efectos

### Gradiente animado del héroe (`#hero`)
- Fondo con `linear-gradient(-45deg, #667eea → #764ba2 → #f093fb → #f5576c → #4facfe)`.
- `background-size: 400% 400%` para permitir desplazamiento del gradiente.
- `animation: gradiente 12s ease-in-out infinite` recorre el gradiente suavemente.
- `#hero::before` añade una capa de brillo sutil animada en reversa para dar profundidad.

Keyframes:
```css
@keyframes gradiente {
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 50%; }
}
```

### Aparición al hacer scroll (`.reveal`)
- Elementos comienzan con `opacity: 0` y `translateY(30px)`.
- Cuando ganan `.visible`, pasan a `opacity: 1` y `translateY(0)`.
- El disparo lo maneja JS con `revealOnScroll`.

### Interacciones
- Botones con sombras y `transform` en hover.
- Imágenes de galería con `transform: scale(1.05) rotate(2deg)` en hover.

## Responsive

En `@media (max-width: 768px)` se:
- Reduce `padding` en `main` y `section`.
- Colapsan grids a 1 columna en `.grid` y `.galeria`.
- Ajusta tamaños de texto y márgenes en `header` y navegación.

## Personalización

- Cambia la paleta del gradiente en `#hero`.
- Ajusta duraciones de `animation` y `transition` para efectos más rápidos o lentos.
- Modifica `grid-template-columns` para tarjetas más anchas o estrechas.

## Recursos para estudiar

- MDN: Gradientes CSS — `https://developer.mozilla.org/docs/Web/CSS/gradient`
- MDN: `@keyframes` — `https://developer.mozilla.org/docs/Web/CSS/@keyframes`
- MDN: Transitions — `https://developer.mozilla.org/docs/Web/CSS/transition`
- MDN: Transforms — `https://developer.mozilla.org/docs/Web/CSS/transform`
- MDN: CSS Grid — `https://developer.mozilla.org/docs/Web/CSS/CSS_grid_layout`
- Web.dev: Animaciones y rendimiento — `https://web.dev/animations-guide/`
- Google Fonts — `https://fonts.google.com/`

### Videos recomendados

- [CSS Grid Course (freeCodeCamp)](https://www.youtube.com/watch?v=t6CBKf8K_Ac)
- [CSS Animations & Keyframes (Kevin Powell)](https://www.youtube.com/watch?v=jgw82b5Y2MU)
- [Mastering CSS Gradients (DesignCourse)](https://www.youtube.com/watch?v=sYcKoX2F5RQ)
- [Transiciones y transformaciones (HolaMundo)](https://www.youtube.com/watch?v=6iZ4B2r8KjA)
