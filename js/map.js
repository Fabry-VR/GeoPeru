const infoRegiones = {
  costa: {
    nombre: 'Costa',
    color: '#e74c3c',
    descripcion: 'La región costera se extiende a lo largo del océano Pacífico, desde Tumbes hasta Tacna. Comprende valles fértiles, desiertos y extensas playas.',
    datos: [
      { icono: 'fa-sun', texto: 'Clima: Templado, árido y húmedo con presencia de neblina en invierno' },
      { icono: 'fa-mountain', texto: 'Relieve: Planicies, valles fluviales y acantilados' },
      { icono: 'fa-seedling', texto: 'Flora: Algarrobo, manglar, carrizo, grama salada' },
      { icono: 'fa-paw', texto: 'Fauna: Pelícano, lobo marino, pingüino de Humboldt, zorro costeño' },
      { icono: 'fa-city', texto: 'Principales ciudades: Lima, Arequipa, Trujillo, Chiclayo' }
    ]
  },
  sierra: {
    nombre: 'Sierra',
    color: '#8e44ad',
    descripcion: 'La región andina atraviesa el Perú de norte a sur. Presenta altiplanicies, valles interandinos, nevados y una gran diversidad de pisos ecológicos.',
    datos: [
      { icono: 'fa-snowflake', texto: 'Clima: Frío, templado y glacial según la altitud' },
      { icono: 'fa-mountain', texto: 'Relieve: Cordilleras, mesetas, valles y cañones' },
      { icono: 'fa-seedling', texto: 'Flora: Ichu, quinua, papa, queñua, aliso' },
      { icono: 'fa-paw', texto: 'Fauna: Cóndor, llama, alpaca, vicuña, vizcacha, oso de anteojos' },
      { icono: 'fa-city', texto: 'Principales ciudades: Cusco, Huancayo, Cajamarca, Puno' }
    ]
  },
  selva: {
    nombre: 'Selva',
    color: '#27ae60',
    descripcion: 'La Amazonía peruana cubre más del 60% del territorio nacional. Es una de las regiones con mayor biodiversidad del planeta, con exuberante vegetación y extensos ríos.',
    datos: [
      { icono: 'fa-cloud-rain', texto: 'Clima: Cálido y lluvioso durante todo el año' },
      { icono: 'fa-water', texto: 'Relieve: Llanura amazónica, colinas y terrazas fluviales' },
      { icono: 'fa-seedling', texto: 'Flora: Caoba, cedro, liana, orquídea, ayahuasca, castaña' },
      { icono: 'fa-paw', texto: 'Fauna: Jaguar, delfín rosado, guacamayo, anaconda, rana flecha' },
      { icono: 'fa-city', texto: 'Principales ciudades: Iquitos, Pucallpa, Puerto Maldonado' }
    ]
  }
};

const mapaRegiones = document.querySelectorAll('.mapa-region');
const mapaInfo = document.getElementById('mapaInfo');

function mostrarInfoRegion(region) {
  const info = infoRegiones[region];
  if (!info) return;

  mapaRegiones.forEach(r => r.classList.remove('active'));
  document.getElementById(`region-${region}`).classList.add('active');

  let datosHTML = '';
  info.datos.forEach(dato => {
    datosHTML += `
      <div class="info-item">
        <i class="fas ${dato.icono}"></i>
        <span>${dato.texto}</span>
      </div>
    `;
  });

  mapaInfo.innerHTML = `
    <div class="mapa-info-content">
      <div class="region-color-bar" style="background:${info.color};"></div>
      <h3>${info.nombre}</h3>
      <p>${info.descripcion}</p>
      <div class="info-grid">${datosHTML}</div>
    </div>
  `;
}

mapaRegiones.forEach(region => {
  region.addEventListener('click', () => {
    mostrarInfoRegion(region.dataset.region);
  });

  region.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mostrarInfoRegion(region.dataset.region);
    }
  });
});
