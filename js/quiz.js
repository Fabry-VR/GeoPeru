const preguntas = [
  {
    pregunta: '¿Cuántas regiones naturales tiene el Perú?',
    opciones: ['2', '3', '4', '5'],
    correcta: 1,
    explicacion: 'El Perú tiene 3 regiones naturales: Costa, Sierra y Selva.'
  },
  {
    pregunta: '¿Cuál es el nevado más alto del Perú?',
    opciones: ['Huascarán', 'Coropuna', 'Ampato', 'Ausangate'],
    correcta: 0,
    explicacion: 'El Huascarán, con 6,768 m s. n. m., es el nevado más alto del Perú y de la zona tropical del mundo.'
  },
  {
    pregunta: '¿En qué región del Perú nace el río Amazonas?',
    opciones: ['Loreto', 'Arequipa', 'Cusco', 'Ucayali'],
    correcta: 1,
    explicacion: 'El río Amazonas nace en el nevado Mismi, ubicado en la región de Arequipa.'
  },
  {
    pregunta: '¿Cuál es el lago navegable más alto del mundo ubicado en Perú?',
    opciones: ['Lago Parón', 'Lago Titicaca', 'Lago Junín', 'Laguna Azul'],
    correcta: 1,
    explicacion: 'El Lago Titicaca, a 3,812 m s. n. m., es el lago navegable más alto del mundo.'
  },
  {
    pregunta: '¿Qué corriente marina influye en el clima de la costa peruana?',
    opciones: ['Corriente del Niño', 'Corriente de Humboldt', 'Corriente del Pacífico', 'Corriente de la Antártida'],
    correcta: 1,
    explicacion: 'La corriente de Humboldt es una corriente fría que influye en el clima árido de la costa peruana.'
  },
  {
    pregunta: '¿Cuántos departamentos tiene el Perú?',
    opciones: ['22', '23', '24', '25'],
    correcta: 2,
    explicacion: 'El Perú está dividido en 24 departamentos y la Provincia Constitucional del Callao.'
  },
  {
    pregunta: '¿Cuál es el plato típico más representativo de la costa peruana?',
    opciones: ['Pachamanca', 'Juane', 'Ceviche', 'Rocoto relleno'],
    correcta: 2,
    explicacion: 'El ceviche es el plato bandera del Perú y es originario de la región costera.'
  },
  {
    pregunta: '¿Qué animal es característico de la sierra peruana?',
    opciones: ['Jaguar', 'Cóndor', 'Delfín rosado', 'Pelícano'],
    correcta: 1,
    explicacion: 'El cóndor andino es una de las aves más emblemáticas de la sierra peruana.'
  },
  {
    pregunta: '¿Cuál es la superficie aproximada del Perú?',
    opciones: ['1 millón km²', '1.285 millones km²', '1.5 millones km²', '2 millones km²'],
    correcta: 1,
    explicacion: 'El Perú tiene una superficie de 1,285,216 km², siendo el tercer país más grande de América del Sur.'
  },
  {
    pregunta: '¿Qué región natural peruana concentra la mayor biodiversidad?',
    opciones: ['Costa', 'Sierra', 'Selva', 'Mar Peruano'],
    correcta: 2,
    explicacion: 'La selva amazónica peruana es una de las regiones con mayor biodiversidad del planeta.'
  },
  {
    pregunta: '¿Cuál es la capital del Perú?',
    opciones: ['Arequipa', 'Cusco', 'Lima', 'Trujillo'],
    correcta: 2,
    explicacion: 'Lima, fundada como Ciudad de los Reyes en 1535, es la capital y ciudad más poblada del Perú.'
  },
  {
    pregunta: '¿Qué desierto se encuentra en la costa peruana?',
    opciones: ['Desierto de Atacama', 'Desierto de Sechura', 'Desierto de Sahara', 'Desierto de Namib'],
    correcta: 1,
    explicacion: 'El desierto de Sechura se extiende por la costa norte del Perú, principalmente en Piura.'
  },
  {
    pregunta: '¿Cuál es el río más largo del Perú?',
    opciones: ['Río Marañón', 'Río Ucayali', 'Río Amazonas', 'Río Madre de Dios'],
    correcta: 2,
    explicacion: 'El río Amazonas, con 7,062 km, es el río más largo y caudaloso del mundo y atraviesa la selva peruana.'
  },
  {
    pregunta: '¿A cuántos metros sobre el nivel del mar se encuentra el Lago Titicaca?',
    opciones: ['2,500 m', '3,200 m', '3,812 m', '4,500 m'],
    correcta: 2,
    explicacion: 'El Lago Titicaca está a 3,812 m s. n. m., compartido entre Perú y Bolivia.'
  },
  {
    pregunta: '¿Qué cordillera atraviesa el Perú de sur a norte?',
    opciones: ['Cordillera del Himalaya', 'Cordillera de los Andes', 'Cordillera de los Alpes', 'Cordillera Central'],
    correcta: 1,
    explicacion: 'La cordillera de los Andes atraviesa todo el Perú, dividiendo la costa de la selva amazónica.'
  },
  {
    pregunta: '¿Cuál es la montaña de siete colores en Perú?',
    opciones: ['Vinicunca', 'Huascarán', 'Apu Ausangate', 'Misti'],
    correcta: 0,
    explicacion: 'Vinicunca, también conocida como Montaña de Siete Colores, se encuentra en Cusco a 5,200 m s. n. m.'
  },
  {
    pregunta: '¿Qué región natural del Perú tiene clima tropical y lluvioso?',
    opciones: ['Costa', 'Sierra', 'Selva', 'Mar Peruano'],
    correcta: 2,
    explicacion: 'La selva amazónica tiene un clima tropical cálido y húmedo con lluvias abundantes durante todo el año.'
  },
  {
    pregunta: '¿Cuál es la danza nacional del Perú?',
    opciones: ['Samba', 'Marinera', 'Cumbia', 'Tango'],
    correcta: 1,
    explicacion: 'La marinera es considerada la danza nacional del Perú, declarada Patrimonio Cultural de la Nación.'
  },
  {
    pregunta: '¿Qué reserva natural protege la biodiversidad de la Amazonía peruana?',
    opciones: ['Parque Nacional del Manu', 'Reserva de Paracas', 'Santuario de Machu Picchu', 'Bosque de Piedras'],
    correcta: 0,
    explicacion: 'El Parque Nacional del Manu, en Madre de Dios y Cusco, es una de las áreas protegidas más biodiversas del mundo.'
  },
  {
    pregunta: '¿Cuál es el plato típico de la sierra peruana?',
    opciones: ['Ceviche', 'Pachamanca', 'Juane', 'Arroz con pato'],
    correcta: 1,
    explicacion: 'La pachamanca es un plato tradicional de la sierra peruana cocido bajo tierra con piedras calientes.'
  },
  {
    pregunta: '¿Qué océano baña las costas del Perú?',
    opciones: ['Océano Atlántico', 'Océano Pacífico', 'Océano Índico', 'Mar Caribe'],
    correcta: 1,
    explicacion: 'El océano Pacífico baña los 3,080 km de litoral peruano, influyendo en el clima y la economía del país.'
  },
  {
    pregunta: '¿En qué departamento se encuentra Machu Picchu?',
    opciones: ['Lima', 'Arequipa', 'Cusco', 'Puno'],
    correcta: 2,
    explicacion: 'Machu Picchu se encuentra en el departamento del Cusco, a 2,430 m s. n. m.'
  },
  {
    pregunta: '¿Cuál es la flor nacional del Perú?',
    opciones: ['Orquídea', 'Cantuta', 'Rosa', 'Lirio'],
    correcta: 1,
    explicacion: 'La cantuta (Cantua buxifolia) es la flor nacional del Perú, conocida como la "flor sagrada de los incas".'
  },
  {
    pregunta: '¿Cuál es la temperatura promedio en la costa peruana?',
    opciones: ['10°C - 15°C', '15°C - 25°C', '25°C - 35°C', '5°C - 10°C'],
    correcta: 1,
    explicacion: 'La costa peruana tiene un clima templado con temperaturas que oscilan entre 15°C y 25°C durante el año.'
  },
  {
    pregunta: '¿Qué animal típico de la selva peruana es conocido por su canto?',
    opciones: ['Loro', 'Tucán', 'Gallito de las rocas', 'Colibrí'],
    correcta: 2,
    explicacion: 'El gallito de las rocas (Rupicola peruviana) es el ave nacional del Perú, conocido por su plumaje rojo y naranja.'
  },
  {
    pregunta: '¿Cuántos pisos altitudinales tiene la sierra peruana?',
    opciones: ['5', '7', '8', '10'],
    correcta: 2,
    explicacion: 'La sierra peruana tiene 8 pisos altitudinales, desde la yunga hasta la cordillera de los Andes.'
  },
  {
    pregunta: '¿Cuál es la principal actividad económica de la costa peruana?',
    opciones: ['Minería', 'Pesca', 'Ganadería', 'Silvicultura'],
    correcta: 1,
    explicacion: 'La pesca es una de las actividades económicas más importantes de la costa peruana, gracias a la corriente de Humboldt.'
  },
  {
    pregunta: '¿Qué cultura precolombina construyó las Líneas de Nasca?',
    opciones: ['Inca', 'Moche', 'Nasca', 'Paracas'],
    correcta: 2,
    explicacion: 'La cultura Nasca (200 a.C. - 700 d.C.) creó las famosas Líneas de Nasca en el desierto de Ica.'
  },
  {
    pregunta: '¿Cuál es el cañón más profundo del Perú?',
    opciones: ['Cañón del Colca', 'Cañón del Pato', 'Cañón de Cotahuasi', 'Cañón del Infiernillo'],
    correcta: 0,
    explicacion: 'El Cañón del Colca, en Arequipa, es uno de los más profundos del mundo con 4,160 m de profundidad.'
  },
  {
    pregunta: '¿Qué línea imaginaria divide al Perú en dos hemisferios?',
    opciones: ['Ecuador', 'Trópico de Capricornio', 'Meridiano de Greenwich', 'Trópico de Cáncer'],
    correcta: 0,
    explicacion: 'La línea del ecuador cruza el norte del Perú, dividiendo el país en hemisferios norte y sur.'
  },
  {
    pregunta: '¿Qué desastre natural es más frecuente en la costa peruana?',
    opciones: ['Inundaciones', 'Sismos', 'Heladas', 'Tormentas eléctricas'],
    correcta: 1,
    explicacion: 'Los sismos son frecuentes en la costa peruana debido a la subducción de la placa de Nazca bajo la placa Sudamericana.'
  },
  {
    pregunta: '¿Qué fenómeno climático afecta periódicamente la costa norte del Perú con lluvias intensas?',
    opciones: ['La Niña', 'El Niño', 'El Monzón', 'El Huracán'],
    correcta: 1,
    explicacion: 'El fenómeno El Niño causa lluvias torrenciales e inundaciones en la costa norte del Perú cada ciertos años.'
  },
  {
    pregunta: '¿Qué desastre natural es característico de la sierra peruana?',
    opciones: ['Tsunamis', 'Heladas', 'Inundaciones costeras', 'Maremotos'],
    correcta: 1,
    explicacion: 'Las heladas son fenómenos recurrentes en la sierra peruana, especialmente en el altiplano, donde las temperaturas bajan drásticamente.'
  },
  {
    pregunta: '¿Cómo se llaman los deslizamientos de lodo y piedras típicos de las quebradas costeras?',
    opciones: ['Aludes', 'Huaycos', 'Derrumbes', 'Avalanchas'],
    correcta: 1,
    explicacion: 'Los huaycos son flujos de lodo y piedras que bajan por las quebradas de la costa y sierra peruana durante lluvias intensas.'
  },
  {
    pregunta: '¿Qué desastre natural ocurre con frecuencia en la selva amazónica peruana?',
    opciones: ['Sequías extremas', 'Inundaciones', 'Incendios forestales', 'Terremotos'],
    correcta: 1,
    explicacion: 'Las inundaciones son comunes en la selva amazónica por el desborde de sus ríos durante la temporada de lluvias.'
  },
  {
    pregunta: '¿Qué placa tectónica causa los sismos en el Perú?',
    opciones: ['Placa del Pacífico', 'Placa de Nazca', 'Placa Sudamericana', 'Placa de Cocos'],
    correcta: 1,
    explicacion: 'La placa de Nazca se desliza bajo la placa Sudamericana, proceso que genera los sismos en todo el territorio peruano.'
  },
  {
    pregunta: '¿Qué región del Perú es más vulnerable a los tsunamis?',
    opciones: ['Sierra', 'Selva', 'Costa', 'Amazonía'],
    correcta: 2,
    explicacion: 'La costa peruana es vulnerable a tsunamis generados por sismos submarinos en el océano Pacífico.'
  },
  {
    pregunta: '¿Qué fenómeno de la sierra peruana daña los cultivos por bajas temperaturas?',
    opciones: ['Granizada', 'Helada', 'Nevada', 'Lluvia ácida'],
    correcta: 1,
    explicacion: 'Las heladas dañan los cultivos en la sierra cuando las temperaturas descienden por debajo de 0°C.'
  },
  {
    pregunta: '¿Qué tipo de desastre natural está asociado al desborde de ríos en la selva?',
    opciones: ['Aluvión', 'Inundación', 'Derrumbe', 'Huayco'],
    correcta: 1,
    explicacion: 'Las inundaciones por desborde de ríos son el desastre natural más común en la selva amazónica peruana.'
  },
  {
    pregunta: '¿Cuál fue el terremoto más destructivo en la historia del Perú?',
    opciones: ['Lima 1746', 'Áncash 1970', 'Arequipa 2001', 'Pisco 2007'],
    correcta: 1,
    explicacion: 'El terremoto de Áncash de 1970 (7.9 MW) causó aluviones que sepultaron la ciudad de Yungay, siendo el más mortífero del país.'
  },
  {
    pregunta: '¿Cuál es la capital del departamento de Amazonas?',
    opciones: ['Moyobamba', 'Chachapoyas', 'Iquitos', 'Cajamarca'],
    correcta: 1,
    explicacion: 'Chachapoyas es la capital del departamento de Amazonas, conocida por su cercanía a la fortaleza de Kuélap.'
  },
  {
    pregunta: '¿Qué departamento alberga el nevado Huascarán, el pico más alto del Perú?',
    opciones: ['Lima', 'Cusco', 'Áncash', 'Puno'],
    correcta: 2,
    explicacion: 'El Huascarán (6,768 m) se encuentra en la Cordillera Blanca, dentro del departamento de Áncash.'
  },
  {
    pregunta: '¿En qué departamento se encuentra el Cañón del Colca?',
    opciones: ['Cusco', 'Arequipa', 'Ayacucho', 'Moquegua'],
    correcta: 1,
    explicacion: 'El Cañón del Colca, uno de los más profundos del mundo, está ubicado en el departamento de Arequipa.'
  },
  {
    pregunta: '¿Cuál es el plato típico más representativo de Arequipa?',
    opciones: ['Ceviche', 'Rocoto relleno', 'Juane', 'Pachamanca'],
    correcta: 1,
    explicacion: 'El rocoto relleno es el plato bandera de Arequipa, preparado con rocoto, carne picada y queso gratinado.'
  },
  {
    pregunta: '¿En qué departamento ocurrió la batalla final por la independencia del Perú?',
    opciones: ['Lima', 'Ayacucho', 'Cusco', 'Junín'],
    correcta: 1,
    explicacion: 'La batalla de Ayacucho se libró el 9 de diciembre de 1824 en la Pampa de la Quinua, asegurando la independencia del Perú.'
  },
  {
    pregunta: '¿Qué departamento es el principal productor de lácteos y conocido por sus baños termales?',
    opciones: ['Cajamarca', 'La Libertad', 'Junín', 'Puno'],
    correcta: 0,
    explicacion: 'Cajamarca es reconocida por su producción de lácteos y los Baños del Inca, aguas termales de origen volcánico.'
  },
  {
    pregunta: '¿Cuál es la capital del departamento de Ica?',
    opciones: ['Nazca', 'Pisco', 'Ica', 'Chincha'],
    correcta: 2,
    explicacion: 'Ica es la capital del departamento del mismo nombre, cuna del pisco y puerta a las Líneas de Nazca.'
  },
  {
    pregunta: '¿Qué ciudad de barro, declarada Patrimonio de la Humanidad, se encuentra en La Libertad?',
    opciones: ['Machu Picchu', 'Chan Chan', 'Sacsayhuamán', 'Kuélap'],
    correcta: 1,
    explicacion: 'Chan Chan, la ciudad de adobe más grande del mundo, fue la capital del reino Chimú y está en La Libertad.'
  },
  {
    pregunta: '¿Qué plato típico es originario de Lambayeque y lleva pato como ingrediente principal?',
    opciones: ['Arroz con pato', 'Ceviche de pato', 'Seco de cabrito', 'Pato a la chiclayana'],
    correcta: 1,
    explicacion: 'El ceviche de pato es un plato tradicional de Lambayeque, preparado con pato cocido y aderezado con limón y cebolla.'
  },
  {
    pregunta: '¿Cuál es la ciudad más grande del mundo a la que no se puede llegar por carretera?',
    opciones: ['Pucallpa', 'Iquitos', 'Puerto Maldonado', 'Moyobamba'],
    correcta: 1,
    explicacion: 'Iquitos, capital de Loreto, es la ciudad más grande del mundo sin acceso por carretera; solo se llega por aire o río.'
  },
  {
    pregunta: '¿Qué departamento es conocido como la "Capital de la Biodiversidad del Perú"?',
    opciones: ['Loreto', 'Ucayali', 'Madre de Dios', 'San Martín'],
    correcta: 2,
    explicacion: 'Madre de Dios alberga la Reserva Nacional Tambopata y el Parque Nacional del Manu, con una biodiversidad extraordinaria.'
  },
  {
    pregunta: '¿En qué departamento se encuentra el Lago Titicaca?',
    opciones: ['Cusco', 'Puno', 'Arequipa', 'Moquegua'],
    correcta: 1,
    explicacion: 'El Lago Titicaca, el lago navegable más alto del mundo, se encuentra en el departamento de Puno a 3,812 m s. n. m.'
  },
  {
    pregunta: '¿Qué departamento produce uno de los mejores piscos del Perú?',
    opciones: ['Lima', 'Ica', 'Moquegua', 'Arequipa'],
    correcta: 1,
    explicacion: 'Ica es la principal región productora de pisco en el Perú, con valles como Ica, Pisco y Chincha.'
  },
  {
    pregunta: '¿Cuál es la capital del departamento de San Martín?',
    opciones: ['Tarapoto', 'Moyobamba', 'Tingo María', 'Juanjuí'],
    correcta: 1,
    explicacion: 'Moyobamba, conocida como la "Ciudad de las Orquídeas", es la capital del departamento de San Martín.'
  },
  {
    pregunta: '¿Qué danza típica es originaria de la región de Piura?',
    opciones: ['Marinera', 'Tondero', 'Huayno', 'Danza de tijeras'],
    correcta: 1,
    explicacion: 'El tondero es una danza tradicional del norte peruano, específicamente de Piura y Lambayeque.'
  },
  {
    pregunta: '¿En qué departamento se encuentra la Fortaleza del Real Felipe?',
    opciones: ['Lima', 'Callao', 'Ica', 'Áncash'],
    correcta: 1,
    explicacion: 'La Fortaleza del Real Felipe, construida en el siglo XVIII, se encuentra en la Provincia Constitucional del Callao.'
  },
  {
    pregunta: '¿Qué catarata, descubierta al mundo en el año 2005, se encuentra en Amazonas?',
    opciones: ['Catarata de Ahuashiyacu', 'Catarata de Gocta', 'Catarata de Yumbilla', 'Catarata de Antankallo'],
    correcta: 1,
    explicacion: 'La catarata de Gocta, con 771 m de altura, fue descubierta al mundo en 2005 en el departamento de Amazonas.'
  },
  {
    pregunta: '¿Qué departamento tiene el clima más frío del Perú, con temperaturas promedio de 6°C?',
    opciones: ['Puno', 'Pasco', 'Cusco', 'Junín'],
    correcta: 1,
    explicacion: 'Cerro de Pasco, capital de Pasco, es una de las ciudades más altas del mundo con temperatura promedio de 6°C.'
  },
  {
    pregunta: '¿Cuál es el departamento más pequeño del Perú?',
    opciones: ['Callao', 'Tumbes', 'Moquegua', 'Tacna'],
    correcta: 1,
    explicacion: 'Tumbes, con 4,669 km², es el departamento más pequeño del Perú, ubicado en la frontera con Ecuador.'
  },
  {
    pregunta: '¿Qué etnia amazónica, reconocida por su arte geométrico, habita en Ucayali?',
    opciones: ['Ashaninka', 'Shipibo-conibo', 'Aguaruna', 'Matsés'],
    correcta: 1,
    explicacion: 'Los shipibo-conibo son conocidos mundialmente por su arte geométrico y habitan en las riberas del río Ucayali.'
  },
  {
    pregunta: '¿En qué departamento se encuentra el Bosque de Piedras de Huayllay?',
    opciones: ['Huánuco', 'Junín', 'Pasco', 'Áncash'],
    correcta: 2,
    explicacion: 'El Bosque de Piedras de Huayllay, a más de 4,000 m de altitud, se encuentra en el departamento de Pasco.'
  }
];

const CANTIDAD_PREGUNTAS = 10;

let preguntaActual = 0;
let aciertos = 0;
let respondio = false;
let preguntasActivas = [];

const quizPregunta = document.getElementById('quizPregunta');
const quizOpciones = document.getElementById('quizOpciones');
const quizSiguiente = document.getElementById('quizSiguiente');
const quizReiniciar = document.getElementById('quizReiniciar');
const quizPuntaje = document.getElementById('quizPuntaje');
const preguntaActualEl = document.getElementById('preguntaActual');
const quizProgressBar = document.getElementById('quizProgressBar');
const quizResultado = document.getElementById('quizResultado');
const quizBody = document.getElementById('quizBody');
const quizFooter = document.getElementById('quizFooter');
const resultadoIcono = document.getElementById('resultadoIcono');
const resultadoTitulo = document.getElementById('resultadoTitulo');
const resultadoPuntaje = document.getElementById('resultadoPuntaje');
const resultadoPorcentaje = document.getElementById('resultadoPorcentaje');
const resultadoMensaje = document.getElementById('resultadoMensaje');

const letras = ['A', 'B', 'C', 'D'];

function seleccionarPreguntas() {
  const copia = [...preguntas];
  const seleccionadas = [];
  for (let i = 0; i < CANTIDAD_PREGUNTAS; i++) {
    const idx = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia[idx]);
    copia.splice(idx, 1);
  }
  preguntasActivas = seleccionadas;
}

function cargarPregunta() {
  respondio = false;
  const pregunta = preguntasActivas[preguntaActual];
  quizPregunta.textContent = pregunta.pregunta;
  preguntaActualEl.textContent = preguntaActual + 1;
  quizSiguiente.style.display = 'none';

  const progreso = (preguntaActual / preguntasActivas.length) * 100;
  quizProgressBar.style.width = `${progreso}%`;

  quizOpciones.innerHTML = '';

  pregunta.opciones.forEach((opcion, index) => {
    const boton = document.createElement('button');
    boton.className = 'quiz-opcion';
    boton.innerHTML = `
      <span class="opt-letra">${letras[index]}</span>
      <span>${opcion}</span>
    `;
    boton.addEventListener('click', () => seleccionarRespuesta(index));
    quizOpciones.appendChild(boton);
  });
}

function seleccionarRespuesta(index) {
  if (respondio) return;
  respondio = true;

  const opciones = quizOpciones.querySelectorAll('.quiz-opcion');
  const pregunta = preguntasActivas[preguntaActual];
  const correcta = pregunta.correcta;

  opciones.forEach((op, i) => op.classList.add('disabled'));

  if (index === correcta) {
    opciones[index].classList.add('correct');
    aciertos++;
    quizPuntaje.textContent = `${aciertos} aciertos`;
  } else {
    opciones[index].classList.add('incorrect');
    opciones[correcta].classList.add('correct');
  }

  const feedback = document.createElement('p');
  feedback.className = 'quiz-feedback';
  feedback.style.cssText = 'margin-top:16px;padding:12px 16px;background:#f8f9fa;border-radius:8px;font-size:0.9rem;color:#495057;border-left:3px solid #27ae60;';
  feedback.textContent = pregunta.explicacion;

  const feedbackExistente = quizOpciones.querySelector('.quiz-feedback');
  if (feedbackExistente) feedbackExistente.remove();

  quizOpciones.appendChild(feedback);

  if (preguntaActual < preguntasActivas.length - 1) {
    quizSiguiente.style.display = 'inline-flex';
  } else {
    setTimeout(mostrarResultado, 800);
  }
}

function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < preguntasActivas.length) {
    cargarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizBody.style.display = 'none';
  quizFooter.style.display = 'none';
  quizResultado.style.display = 'block';
  quizProgressBar.style.width = '100%';

  const porcentaje = Math.round((aciertos / preguntasActivas.length) * 100);

  if (porcentaje >= 90) {
    resultadoIcono.innerHTML = '<i class="fas fa-trophy" style="color:#f1c40f;"></i>';
    resultadoTitulo.textContent = '¡Excelente!';
    resultadoMensaje.textContent = 'Eres un verdadero experto en la geografía del Perú. ¡Felicitaciones!';
  } else if (porcentaje >= 70) {
    resultadoIcono.innerHTML = '<i class="fas fa-star" style="color:#54a0ff;"></i>';
    resultadoTitulo.textContent = '¡Muy bien!';
    resultadoMensaje.textContent = 'Tienes un buen conocimiento de la geografía peruana. ¡Sigue así!';
  } else if (porcentaje >= 50) {
    resultadoIcono.innerHTML = '<i class="fas fa-smile" style="color:#27ae60;"></i>';
    resultadoTitulo.textContent = '¡Bien!';
    resultadoMensaje.textContent = 'Vas por buen camino, pero aún puedes aprender más. ¡Inténtalo de nuevo!';
  } else {
    resultadoIcono.innerHTML = '<i class="fas fa-book" style="color:#e74c3c;"></i>';
    resultadoTitulo.textContent = '¡Sigue estudiando!';
    resultadoMensaje.textContent = 'Revisa la información de esta página y vuelve a intentarlo. ¡Tú puedes!';
  }

  resultadoPuntaje.textContent = `${aciertos} de ${preguntasActivas.length} respuestas correctas`;
  resultadoPorcentaje.textContent = `${porcentaje}% de precisión`;
}

function reiniciarQuiz() {
  seleccionarPreguntas();
  preguntaActual = 0;
  aciertos = 0;
  respondio = false;

  quizBody.style.display = 'block';
  quizFooter.style.display = 'block';
  quizResultado.style.display = 'none';

  quizPuntaje.textContent = '0 aciertos';
  quizProgressBar.style.width = '0%';

  cargarPregunta();
}

quizSiguiente.addEventListener('click', siguientePregunta);
quizReiniciar.addEventListener('click', reiniciarQuiz);

document.addEventListener('DOMContentLoaded', () => {
  seleccionarPreguntas();
  cargarPregunta();
});
