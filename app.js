// 🟢 Carga inicial de datos
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/personajes")
    .then((res) => {
      if (!res.ok) throw new Error("Error al cargar personajes");
      return res.json();
    })
    .then((respuesta) => {
      const personajes = respuesta.data || respuesta; // por si ya es array
      if (!Array.isArray(personajes)) {
        console.error("La respuesta no es un array:", personajes);
        return;
      }
      window.personajesOriginales = personajes;
      renderPersonajes(personajes);
    })
    .catch((err) => console.error("Error cargando datos: ", err));

  fetch("http://localhost:3000/momentos")
    .then((res) => res.json())
    .then((momentos) => {
      renderMomentos(momentos);
    })
    .catch((error) => console.error("Error cargando datos: ", error));
  fetch("http://localhost:3000/health")
    .then((res) => res.json())
    .then((data) => console.log("Estado del backend", data))
    .catch((err) => console.error("Error de concexion", err));
  actualizarContadorFavoritos();

  const modoOscuroGuardado = localStorage.getItem("dark");
  if (modoOscuroGuardado === "true") {
    document.body.classList.add("dark");
    document
      .querySelectorAll("article")
      .forEach((c) => c.classList.add("dark"));
  }
});

// 🟣 Animación al hacer scroll
function revealOnScroll() {
  const elementos = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.85;

  elementos.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🟡 Filtro por rol
document.getElementById("filtroRol").addEventListener("change", (e) => {
  const rol = e.target.value;
  const personajes = window.personajesOriginales || [];
  const filtrados =
    rol === "todos" ? personajes : personajes.filter((p) => p.rol === rol);
  renderPersonajes(filtrados);
});

// 🔍 Buscador por nombre
document.getElementById("controlSearch").addEventListener("click", () => {
  const texto = document.getElementById("search").value.toLowerCase();
  const rolSeleccionado = document.getElementById("filtroRol").value;
  const personajes = window.personajesOriginales || [];

  const search = personajes.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(texto);
    const coincideRol =
      rolSeleccionado === "todos" || p.rol === rolSeleccionado;
    return coincideNombre && coincideRol;
  });
  renderPersonajes(search);
});

// 💡 Curiosidades aleatorias
const curiosidades = [
  "Roger tiene más de 100 disfraces distintos.",
  "Stan fue inspirado en personajes de acción de los 80.",
  "Francine tuvo una banda punk en su juventud.",
  "La serie fue creada por los mismos de Family Guy.",
  "Roger puede cambiar de forma a voluntad.",
  "Stan trabaja para la CIA en Langley Falls.",
  "Steve es el hijo adolescente de la familia Smith.",
  "Hayley es la hija mayor y activista liberal.",
  "Klaus es un pez dorado con cerebro alemán.",
  "Jeff es el novio hippie de Hayley.",
];

document.getElementById("btn-curioso").addEventListener("click", () => {
  const texto = document.getElementById("curioso-texto");
  const random = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  texto.classList.remove("show");
  texto.textContent = random;
  setTimeout(() => texto.classList.add("show"), 100);
});

// 💖 Toggle favoritos
let mostrandoFavoritos = false;
document.getElementById("ver-favoritos").addEventListener("click", () => {
  const btn = document.getElementById("ver-favoritos");
  const personajes = window.personajesOriginales || [];

  mostrandoFavoritos = !mostrandoFavoritos;

  if (mostrandoFavoritos) {
    renderPersonajes(personajes, true);
    btn.textContent = "👀 Ver todos";
  } else {
    renderPersonajes(personajes);
    btn.textContent = "💖 Ver solo favoritos";
  }
});

// 🧠 Render de personajes con opción de solo favoritos
function renderPersonajes(personajes, soloFav = false) {
  const cont = document.getElementById("personajes-grid");
  cont.innerHTML = "";

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  personajes.forEach((p, i) => {
    if (soloFav && !favoritos.includes(p.nombre)) return;

    const card = document.createElement("article");
    card.className = "card";

    const esFavorito = favoritos.includes(p.nombre);
    card.innerHTML = `
      <img src="${p.imagen || "assets/default.png"}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p><strong>Rol:</strong> ${p.rol}</p>
      <p>${p.descripcion}</p>
      <button class="btn-fav ${esFavorito ? "guardado" : ""}" title="${
      esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"
    }">
        ${esFavorito ? "💖" : "❤️"}
      </button>
    `;

    const btnFav = card.querySelector(".btn-fav");
    btnFav.addEventListener("click", () => {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      if (favoritos.includes(p.nombre)) {
        // Quitar de favoritos
        favoritos = favoritos.filter((nombre) => nombre !== p.nombre);
        btnFav.textContent = "❤️";
        btnFav.title = "Agregar a favoritos";
        btnFav.classList.remove("guardado");
      } else {
        // Agregar a favoritos
        favoritos.push(p.nombre);
        btnFav.textContent = "💖";
        btnFav.title = "Quitar de favoritos";
        btnFav.classList.add("guardado");
      }

      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadorFavoritos();

      // Si estamos en modo solo favoritos, refrescar la vista
      if (mostrandoFavoritos) {
        const personajes = window.personajesOriginales || [];
        renderPersonajes(personajes, true);
      }
    });

    cont.appendChild(card);
    setTimeout(() => card.classList.add("visible"), i * 400);
  });
}

// 📸 Render de momentos destacados
function renderMomentos(momentos) {
  const galeria = document.querySelector(".galeria");
  galeria.innerHTML = "";

  momentos.forEach((m, index) => {
    const momentoDiv = document.createElement("div");
    momentoDiv.className = "momento-card";

    momentoDiv.innerHTML = `
      <img src="${m.image || "assets/default.png"}" alt="${m.descripcion}">
      <div class="momento-info">
        <h3>${m.titulo}</h3>
        <p><strong>Episodio:</strong> ${m.titulo_original}</p>
        <p><strong>Temporada:</strong> ${m.temporada}, Episodio ${
      m.episodio
    }</p>
        <p>${m.descripcion}</p>
      </div>
    `;

    galeria.appendChild(momentoDiv);
    setTimeout(() => {
      momentoDiv.style.opacity = "1";
      momentoDiv.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// 🌙 Modo oscuro
document.getElementById("modoOscuro").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document
    .querySelectorAll("article")
    .forEach((c) => c.classList.toggle("dark"));

  const saveDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("dark", saveDarkMode ? "true" : "false");
});

//contador fav
function actualizarContadorFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  document.getElementById("contador-favs").textContent = favoritos.length;
}

//scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeigth = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeigth) * 100;
  document.getElementById("scroll-bar").style.width = `${scrolled}%`;
});

async function verificarApi() {
  try {
    const res = await fetch("http://localhost:3000/health");
    const data = await res.json();

    if (data.status === "ok") {
      mostrarEstado("✅ API conectada");
    } else {
      mostrarEstado("⚠️ API respoondio pero con estado inesperado");
    }
  } catch (error) {
    mostrarEstado("🚫 Error de conexion con la api");
  }
}

function mostrarEstado(mensaje) {
  const estado = document.getElementById("estado-api");
  estado.textContent = mensaje;
  estado.classList.add("visible");
}
