# 🛸 American Dad Fanpage - Proyecto Full-Stack

> Una aplicación web completa que rinde homenaje a la serie "American Dad" con funcionalidades avanzadas de frontend y backend.

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [🚀 Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚡ Instalación y Configuración](#-instalación-y-configuración)
- [🔧 Uso de la Aplicación](#-uso-de-la-aplicación)
- [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
- [📚 Guía de Desarrollo](#-guía-de-desarrollo)
- [🔍 API Endpoints](#-api-endpoints)
- [🎨 Sistema de Temas](#-sistema-de-temas)
- [💾 Persistencia de Datos](#-persistencia-de-datos)
- [📱 Responsive Design](#-responsive-design)
- [🧪 Testing y Debugging](#-testing-y-debugging)
- [🚀 Despliegue](#-despliegue)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

## 🎯 Descripción del Proyecto

Esta es una **fanpage completa** de la serie "American Dad" que demuestra el desarrollo de una aplicación web full-stack moderna. El proyecto incluye:

- **Frontend**: Interfaz de usuario interactiva con HTML5, CSS3 y JavaScript ES6+
- **Backend**: API REST con Node.js y Express
- **Base de Datos**: Archivos JSON para almacenamiento de datos
- **Funcionalidades**: Sistema de búsqueda, filtrado, favoritos, modo oscuro y más

### 🎬 ¿Por qué American Dad?

La serie "American Dad" es perfecta para este proyecto porque:
- Tiene personajes memorables y diversos
- Ofrece momentos icónicos para mostrar
- Permite implementar funcionalidades de filtrado por roles
- Es una serie con una base de fans activa

## 🚀 Características Principales

### ✨ Funcionalidades del Usuario
- **Sistema de Personajes**: Visualización de todos los personajes principales
- **Filtrado Inteligente**: Por rol (Agente CIA, Ama de casa, Alienígena)
- **Búsqueda en Tiempo Real**: Combinada con filtros de rol
- **Galería de Momentos**: Episodios icónicos con descripciones detalladas
- **Sistema de Favoritos**: Con persistencia local y contador
- **Modo Oscuro/Claro**: Tema personalizable con persistencia
- **Curiosidades Aleatorias**: Datos interesantes sobre la serie

### 🎨 Características de Diseño
- **Responsive Design**: Adaptable a todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tema Personalizable**: Modo claro y oscuro
- **Iconografía**: Integración con FontAwesome
- **Gradientes y Sombras**: Diseño moderno y atractivo

### 🔧 Características Técnicas
- **API REST**: Backend modular y escalable
- **Persistencia Local**: localStorage para preferencias del usuario
- **Manejo de Estados**: Gestión eficiente del estado de la aplicación
- **Código Modular**: Estructura limpia y mantenible

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS, flexbox y grid
- **JavaScript ES6+**: Funcionalidades interactivas y manejo de datos
- **FontAwesome**: Iconos vectoriales de alta calidad

### Backend
- **Node.js**: Runtime de JavaScript del lado del servidor
- **Express.js**: Framework web minimalista y flexible
- **CORS**: Middleware para permitir peticiones cross-origin
- **ES6 Modules**: Sistema de módulos moderno

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **npm**: Gestor de paquetes de Node.js
- **Live Server**: Servidor de desarrollo local

## 📁 Estructura del Proyecto

```
american-dad/
├── 📁 api/                    # Backend de la aplicación
│   ├── 📁 data/              # Archivos de datos JSON
│   │   ├── personajes.json   # Información de personajes
│   │   └── momentos.json     # Momentos icónicos
│   ├── 📁 routes/            # Rutas de la API
│   │   ├── personajes.js     # Endpoints de personajes
│   │   └── momentos.js       # Endpoints de momentos
│   ├── 📁 node_modules/      # Dependencias de Node.js
│   ├── package.json          # Configuración del proyecto
│   ├── package-lock.json     # Lock de dependencias
│   └── index.js              # Servidor principal
├── 📁 assets/                 # Recursos estáticos
│   ├── 📁 momentos/          # Imágenes de momentos
│   ├── ícono.ico             # Favicon
│   ├── ícono.png             # Logo principal
│   ├── Stan_Smith.png        # Imagen de Stan
│   ├── Francine.png          # Imagen de Francine
│   └── Roger_Smith.png       # Imagen de Roger
├── 📁 readme/                 # Documentación adicional
│   ├── CSS.md                # Guía de estilos
│   ├── JS.md                 # Guía de JavaScript
│   └── README.md             # Documentación principal
├── app.js                     # Lógica principal del frontend
├── index.html                # Página principal
├── style.css                 # Estilos de la aplicación
└── README.md                 # Este archivo
```

## ⚡ Instalación y Configuración

### 📋 Prerrequisitos

- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)
- **Git** (para clonar el repositorio)
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)

### 🚀 Pasos de Instalación

#### 1. Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd american-dad
```

#### 2. Instalar Dependencias del Backend
```bash
cd api
npm install
```

#### 3. Iniciar el Servidor Backend
```bash
npm start
# O si no hay script start definido:
node index.js
```

#### 4. Abrir el Frontend
- Abre `index.html` en tu navegador
- O usa un servidor local como Live Server en VS Code

### 🔧 Configuración del Entorno

#### Variables de Entorno (Opcional)
```bash
# En la carpeta api/
PORT=3000                    # Puerto del servidor (por defecto: 3000)
NODE_ENV=development         # Entorno de desarrollo
```

#### Configuración del CORS
El backend está configurado para permitir peticiones desde cualquier origen en desarrollo:
```javascript
app.use(cors()); // Permite todas las peticiones cross-origin
```

## 🔧 Uso de la Aplicación

### 🎮 Funcionalidades Principales

#### 1. Navegación
- **Header**: Navegación principal entre secciones
- **Scroll Suave**: Navegación fluida entre secciones
- **Barra de Progreso**: Indicador visual del progreso del scroll

#### 2. Sistema de Personajes
- **Visualización**: Cards con información de cada personaje
- **Filtrado**: Por rol (Agente CIA, Ama de casa, Alienígena)
- **Búsqueda**: Por nombre con filtros combinados
- **Favoritos**: Sistema de marcado y persistencia

#### 3. Galería de Momentos
- **Episodios**: Información detallada de momentos icónicos
- **Imágenes**: Visualización de escenas memorables
- **Metadatos**: Temporada, episodio y descripción

#### 4. Personalización
- **Modo Oscuro**: Tema oscuro con persistencia
- **Preferencias**: Guardadas automáticamente en localStorage

### 🎯 Casos de Uso

#### Para Fans de la Serie
1. Explorar personajes favoritos
2. Revisar momentos icónicos
3. Descubrir curiosidades
4. Marcar personajes como favoritos

#### Para Desarrolladores
1. Estudiar arquitectura full-stack
2. Aprender implementación de APIs
3. Ver ejemplos de código moderno
4. Entender manejo de estado

## 🏗️ Arquitectura del Sistema

### 🔄 Flujo de Datos

```
Usuario → Frontend (HTML/CSS/JS) → API (Node.js/Express) → Datos (JSON)
   ↑                                                              ↓
   ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

### 🧩 Componentes del Sistema

#### Frontend (Cliente)
- **HTML**: Estructura semántica y accesible
- **CSS**: Estilos modulares con variables y temas
- **JavaScript**: Lógica de aplicación y manejo de estado

#### Backend (Servidor)
- **Express.js**: Framework web y enrutamiento
- **Rutas Modulares**: Separación de responsabilidades
- **Middleware**: CORS, parsing de JSON

#### Capa de Datos
- **Archivos JSON**: Almacenamiento simple y eficiente
- **Estructura Consistente**: Formato estandarizado para todos los datos

### 🔌 Patrones de Diseño

#### Frontend
- **MVC Simplificado**: Separación de lógica, vista y datos
- **Event-Driven**: Manejo de eventos del usuario
- **State Management**: Gestión local del estado de la aplicación

#### Backend
- **REST API**: Arquitectura de servicios web
- **Modular Routing**: Separación de endpoints por funcionalidad
- **Middleware Pattern**: Procesamiento de peticiones en capas

## 📚 Guía de Desarrollo

### 🎯 Para Trainees (Desarrolladores Principiantes)

#### Conceptos Básicos a Entender
1. **HTML Semántico**: Uso correcto de etiquetas
2. **CSS Grid y Flexbox**: Layouts modernos
3. **JavaScript ES6+**: Arrow functions, destructuring, async/await
4. **APIs REST**: Comunicación cliente-servidor
5. **LocalStorage**: Persistencia de datos en el navegador

#### Archivos para Estudiar Primero
1. `index.html` - Estructura básica
2. `style.css` (líneas 1-100) - Estilos fundamentales
3. `app.js` (líneas 1-50) - Inicialización básica
4. `api/index.js` - Servidor simple

#### Ejercicios Recomendados
1. Cambiar colores del tema
2. Agregar un nuevo personaje
3. Modificar la funcionalidad de búsqueda
4. Crear una nueva sección

### 🚀 Para Seniors (Desarrolladores Experimentados)

#### Conceptos Avanzados
1. **Arquitectura Modular**: Separación de responsabilidades
2. **Patrones de Diseño**: MVC, Observer, Factory
3. **Optimización de Performance**: Lazy loading, debouncing
4. **Testing**: Unit tests, integration tests
5. **CI/CD**: Automatización de despliegue

#### Mejoras Recomendadas
1. **Base de Datos Real**: Migrar de JSON a PostgreSQL/MongoDB
2. **Autenticación**: Sistema de usuarios y sesiones
3. **Caching**: Redis para mejorar performance
4. **Logging**: Sistema de logs estructurados
5. **Monitoring**: Métricas y alertas

#### Refactoring Sugerido
1. **TypeScript**: Agregar tipado estático
2. **React/Vue**: Migrar a framework moderno
3. **Microservicios**: Separar en servicios independientes
4. **GraphQL**: API más flexible y eficiente

### 🔧 Herramientas de Desarrollo Recomendadas

#### Para Trainees
- **VS Code**: Editor con extensiones útiles
- **Live Server**: Servidor de desarrollo
- **Chrome DevTools**: Debugging del navegador
- **GitHub**: Control de versiones

#### Para Seniors
- **Docker**: Containerización
- **Postman/Insomnia**: Testing de APIs
- **Jest**: Framework de testing
- **ESLint/Prettier**: Linting y formateo
- **Webpack/Vite**: Bundling y build tools

## 🔍 API Endpoints

### 📊 Endpoints de Personajes

#### GET `/personajes`
Obtiene todos los personajes con filtros opcionales.

**Query Parameters:**
- `nombre` (opcional): Filtrar por nombre
- `rol` (opcional): Filtrar por rol

**Ejemplo de Uso:**
```bash
# Todos los personajes
GET /personajes

# Filtrar por nombre
GET /personajes?nombre=stan

# Filtrar por rol
GET /personajes?rol=Agente%20de%20la%20cia

# Combinar filtros
GET /personajes?nombre=roger&rol=Alienígena
```

**Respuesta:**
```json
{
  "status": "success",
  "total": 1,
  "filters": {
    "nombre": "roger",
    "rol": "Alienígena"
  },
  "data": [
    {
      "id": 3,
      "nombre": "Roger",
      "rol": "Alienígena",
      "descripcion": "Sarcástico, excéntrico y con mil disfraces",
      "imagen": "assets/Roger_Smith.png"
    }
  ],
  "timestamp": "2025-01-27T10:30:00.000Z"
}
```

#### GET `/personajes/:id`
Obtiene un personaje específico por ID.

**Path Parameters:**
- `id`: ID numérico del personaje

**Ejemplo:**
```bash
GET /personajes/1
```

**Respuesta:**
```json
{
  "status": "success",
  "total": 1,
  "filters": { "id": 1 },
  "data": {
    "id": 1,
    "nombre": "Stan Smith",
    "rol": "Agente de la cia",
    "descripcion": "Padre de familia y protagonista",
    "imagen": "assets/Stan_Smith.png"
  }
}
```

### 🎬 Endpoints de Momentos

#### GET `/momentos`
Obtiene todos los momentos icónicos.

**Respuesta:**
```json
[
  {
    "id": 1,
    "titulo": "Roger como Jeannie Gold",
    "descripcion": "Roger adopta el excéntrico alter ego...",
    "temporada": 5,
    "episodio": 6,
    "titulo_original": "Shallow Vows",
    "image": "assets/momentos/ADShallowVows1.webp"
  }
]
```

### 🏥 Endpoints del Sistema

#### GET `/health`
Verifica el estado de la API.

**Respuesta:**
```json
{
  "status": "ok",
  "timeStamp": "2025-01-27T10:30:00.000Z",
  "message": "API funcionando correctamente 🛸"
}
```

#### GET `/stats`
Obtiene estadísticas de los personajes.

**Respuesta:**
```json
{
  "totalPersonajes": 3,
  "roles": {
    "Agente de la cia": 1,
    "Ama de casa": 1,
    "Alienígena": 1
  }
}
```

## 🎨 Sistema de Temas

### 🌞 Tema Claro (Por Defecto)
- **Colores Base**: Grises claros y azules
- **Acentos**: Amarillo (#f1c40f) para elementos destacados
- **Sombras**: Sutiles para profundidad visual
- **Gradientes**: Suaves para fondos

### 🌙 Tema Oscuro
- **Colores Base**: Azules oscuros y grises
- **Acentos**: Amarillo dorado (#f5d97d) para contraste
- **Sombras**: Más pronunciadas para efecto dramático
- **Gradientes**: Profundos para fondos

### 🔧 Implementación Técnica

#### CSS Variables
```css
:root {
  --bg-color: #585353;
  --text-color: #222;
}

body.dark {
  --bg-color: #0b1220;
  --text-color: #e6e6e6;
}
```

#### JavaScript
```javascript
// Toggle del tema
document.getElementById("modoOscuro").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Persistencia
  const saveDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("dark", saveDarkMode ? "true" : "false");
});
```

#### Persistencia
- **localStorage**: Guarda la preferencia del usuario
- **Carga Automática**: Aplica el tema al cargar la página
- **Sincronización**: Mantiene consistencia entre sesiones

## 💾 Persistencia de Datos

### 📱 Frontend (localStorage)

#### Estructura de Datos
```javascript
// Favoritos
localStorage.setItem("favoritos", JSON.stringify(["Stan Smith", "Roger"]));

// Modo oscuro
localStorage.setItem("dark", "true");
```

#### Funciones de Persistencia
```javascript
// Guardar favoritos
function guardarFavoritos(favoritos) {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Cargar favoritos
function cargarFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

// Actualizar contador
function actualizarContadorFavoritos() {
  const favoritos = cargarFavoritos();
  document.getElementById("contador-favs").textContent = favoritos.length;
}
```

### 🖥️ Backend (Archivos JSON)

#### Estructura de Datos
```json
// personajes.json
[
  {
    "id": 1,
    "nombre": "Stan Smith",
    "rol": "Agente de la cia",
    "descripcion": "Padre de familia y protagonista",
    "imagen": "assets/Stan_Smith.png"
  }
]
```

#### Lectura de Datos
```javascript
import fs from "fs";

const personajes = JSON.parse(
  fs.readFileSync("./data/personajes.json", "utf-8")
);
```

### 🔄 Sincronización

#### Estado de la Aplicación
- **Favoritos**: Sincronizados en tiempo real
- **Filtros**: Aplicados inmediatamente
- **Búsqueda**: Resultados instantáneos
- **Tema**: Aplicado globalmente

## 📱 Responsive Design

### 🎯 Breakpoints Principales

#### Mobile First
```css
/* Base (móvil) */
.card {
  width: 100%;
  margin: 1rem 0;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 🔧 Técnicas Responsive

#### CSS Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

#### Flexbox
```css
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .search {
    flex-direction: row;
  }
}
```

#### Imágenes Adaptativas
```css
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
```

### 📱 Optimizaciones Móviles

#### Touch-Friendly
- **Botones**: Mínimo 44px de altura
- **Espaciado**: Adecuado para dedos
- **Scroll**: Suave y natural

#### Performance
- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Debouncing**: Búsqueda optimizada
- **Animaciones**: Reducidas en dispositivos móviles

## 🧪 Testing y Debugging

### 🐛 Debugging del Frontend

#### Console Logging
```javascript
// Logs informativos
console.log("Personajes cargados:", personajes);

// Logs de error
console.error("Error cargando datos:", err);

// Logs de estado
console.log("Estado del backend:", data);
```

#### Chrome DevTools
- **Elements**: Inspeccionar HTML y CSS
- **Console**: Ver logs y errores
- **Network**: Monitorear peticiones HTTP
- **Application**: Revisar localStorage

### 🔍 Debugging del Backend

#### Logs del Servidor
```javascript
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
```

#### Endpoint de Health Check
```bash
curl http://localhost:3000/health
```

### 🧪 Testing Manual

#### Funcionalidades a Probar
1. **Búsqueda**: Diferentes términos y filtros
2. **Favoritos**: Agregar/quitar y persistencia
3. **Modo Oscuro**: Toggle y persistencia
4. **Responsive**: Diferentes tamaños de pantalla
5. **API**: Todos los endpoints

#### Casos Edge
- Búsqueda sin resultados
- Filtros vacíos
- Datos corruptos
- Conexión lenta

## 🚀 Despliegue

### 🌐 Opciones de Hosting

#### Frontend (Estático)
- **GitHub Pages**: Gratuito y fácil
- **Netlify**: Con CI/CD automático
- **Vercel**: Optimizado para performance
- **Firebase Hosting**: Con Google Cloud

#### Backend (Node.js)
- **Heroku**: Fácil despliegue
- **Railway**: Moderno y eficiente
- **DigitalOcean**: Control total
- **AWS EC2**: Escalable y robusto

### 📦 Preparación para Producción

#### Optimizaciones Frontend
```bash
# Minificar CSS
npm install -g css-minify

# Minificar JavaScript
npm install -g uglify-js

# Optimizar imágenes
npm install -g imagemin
```

#### Variables de Entorno
```bash
# .env
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://tudominio.com
```

#### Build Scripts
```json
{
  "scripts": {
    "build": "npm run build:css && npm run build:js",
    "build:css": "css-minify style.css -o dist/style.min.css",
    "build:js": "uglifyjs app.js -o dist/app.min.js"
  }
}
```

### 🔒 Seguridad en Producción

#### CORS
```javascript
// Solo permitir tu dominio en producción
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://tudominio.com',
  credentials: true
};
app.use(cors(corsOptions));
```

#### Rate Limiting
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 peticiones por ventana
});

app.use(limiter);
```

## 🤝 Contribución

### 📝 Cómo Contribuir

#### 1. Fork del Proyecto
- Haz fork del repositorio
- Crea una rama para tu feature
- Haz commit de tus cambios
- Crea un Pull Request

#### 2. Guía de Estilo
- **HTML**: Semántico y accesible
- **CSS**: BEM methodology
- **JavaScript**: ES6+ con comentarios claros
- **Commits**: Mensajes descriptivos

#### 3. Áreas de Mejora
- Nuevos personajes y momentos
- Funcionalidades adicionales
- Optimizaciones de performance
- Mejoras de accesibilidad
- Tests automatizados

### 🐛 Reportar Bugs

#### Información Necesaria
- **Descripción**: Qué está pasando
- **Pasos**: Cómo reproducir el problema
- **Comportamiento Esperado**: Qué debería pasar
- **Sistema**: Navegador, OS, versión
- **Screenshots**: Si es relevante

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- **Seth MacFarlane**: Por crear American Dad
- **Comunidad de Desarrolladores**: Por las herramientas y librerías
- **Contribuidores**: Por mejorar este proyecto

## 📞 Contacto

- **GitHub**: [Tu Usuario](https://github.com/tuusuario)
- **Email**: tuemail@ejemplo.com
- **Proyecto**: [American Dad Fanpage](https://github.com/tuusuario/american-dad)

---

**⭐ Si este proyecto te gustó, ¡dale una estrella en GitHub!**

*Desarrollado con ❤️ para la comunidad de American Dad*
