document.addEventListener("DOMContentLoaded", () => {
  fetch("personajes.json")
    .then((res) => res.json())
    .then((personajes) => {
      renderPersonajes(personajes);
    })
    .catch((err) => console.error("Error cargando datos: ", err));

  fetch("momentos.json")
    .then((res) => res.json())
    .then((momentos) => {
      renderMomentos(momentos);
    })
    .catch((error) => console.error("Error cargando datos: ", error));
});

function revealOnScroll() {
  const elementos = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.85; // 85% de la pantalla

  elementos.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.getElementById("filtroRol").addEventListener("change", (e) => {
  const rol = e.target.value;
  fetch("personajes.json")
    .then((res) => res.json())
    .then((personajes) => {
      const filtrados =
        rol === "todos" ? personajes : personajes.filter((p) => p.rol === rol);
      renderPersonajes(filtrados);
    });
});

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

  // Remover la clase show para resetear la animación
  texto.classList.remove("show");

  // Cambiar el texto
  texto.textContent = random;

  // Agregar la clase show para activar la animación
  setTimeout(() => {
    texto.classList.add("show");
  }, 100);
});

function renderPersonajes(lista) {
  const cont = document.getElementById("personajes-grid");
  cont.innerHTML = "";

  lista.forEach((p, index) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
    <img src= "${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p><strong>Rol:</strong> ${p.rol}</p>
    <p>${p.descripcion}</p>
    `;
    cont.appendChild(card);

    // Animación escalonada para las tarjetas
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 150);
  });
}

function renderMomentos(momentos) {
  const galeria = document.querySelector(".galeria");
  galeria.innerHTML = "";

  momentos.forEach((m, index) => {
    const momentoDiv = document.createElement("div");
    momentoDiv.className = "momento-card";

    momentoDiv.innerHTML = `
      <img src="${m.image}" alt="${m.descripcion}">
      <div class="momento-info">
        <h3>${m.titulo}</h3>
        <p><strong>Episodio:</strong> ${m.titulo_original}</p>
        <p><strong>Temporada:</strong> ${m.temporada}, Episodio ${m.episodio}</p>
        <p>${m.descripcion}</p>
      </div>
    `;

    galeria.appendChild(momentoDiv);

    // Animación escalonada para los momentos
    setTimeout(() => {
      momentoDiv.style.opacity = "1";
      momentoDiv.style.transform = "translateY(0)";
    }, index * 200);
  });
}
