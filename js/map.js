const departamentos = {
  amazonas: {
    nombre: 'Amazonas', capital: 'Chachapoyas', area: '39,249 km²', poblacion: '426,806',
    region: 'selva', fundacion: '21 nov 1832',
    descripcion: 'Departamento de la selva norte peruana, famoso por la fortaleza de Kuélap y la catarata de Gocta.',
    clima: 'Cálido y húmedo, temperaturas entre 22°C y 30°C.',
    actividades: ['Turismo de naturaleza', 'Agricultura de café y cacao', 'Artesanía textil', 'Conservación forestal'],
    lugares: ['Fortaleza de Kuélap', 'Catarata de Gocta', 'Cañón del Sonche', 'Museo de Leymebamba'],
    gastronomia: ['Cuy con papa', 'Juanes de pescado', 'Puré de chocho'],
    curiosidad: 'La catarata de Gocta, con 771 m de altura, fue descubierta al mundo recién en el año 2005.'
  },
  ancash: {
    nombre: 'Áncash', capital: 'Huaraz', area: '35,914 km²', poblacion: '1,180,638',
    region: 'costa', fundacion: '28 feb 1839',
    descripcion: 'Hogar de la Cordillera Blanca y el nevado Huascarán, el pico más alto del Perú. Destino mundial del trekking.',
    clima: 'Templado de montaña, frío en altitudes superiores a 4,000 m.',
    actividades: ['Montañismo y trekking', 'Agricultura de papa y maíz', 'Minería', 'Turismo de aventura'],
    lugares: ['Nevado Huascarán', 'Laguna Parón', 'Chavín de Huántar', 'Cañón del Pato', 'Monumento de Yungay'],
    gastronomia: ['Picante de cuy', 'Chicharrón de chancho', 'Llunca de gallina'],
    curiosidad: 'El Parque Nacional Huascarán es Reserva de la Biosfera y alberga al cóndor andino.'
  },
  apurimac: {
    nombre: 'Apurímac', capital: 'Abancay', area: '20,896 km²', poblacion: '418,882',
    region: 'sierra', fundacion: '28 abr 1873',
    descripcion: 'Cuna del río Apurímac, una de las fuentes del Amazonas. Conocido por sus profundos cañones.',
    clima: 'Templado a frío, con lluvias de noviembre a marzo.',
    actividades: ['Agricultura de café', 'Turismo de aventura', 'Ganadería', 'Artesanía textil'],
    lugares: ['Cañón del Apurímac', 'Santuario de Pachamama', 'Complejo de Saywite', 'Laguna de Pacucha'],
    gastronomia: ['Rocoto relleno', 'Chiriuchu', 'Cuy al horno'],
    curiosidad: 'El río Apurímac es considerado la fuente más lejana del río Amazonas, el más caudaloso del mundo.'
  },
  arequipa: {
    nombre: 'Arequipa', capital: 'Arequipa', area: '63,345 km²', poblacion: '1,497,438',
    region: 'costa', fundacion: '15 ago 1825',
    descripcion: 'La «Ciudad Blanca» por su arquitectura de sillar. Alberga el Cañón del Colca, uno de los más profundos del mundo.',
    clima: 'Templado y seco, con temperatura media de 18°C durante todo el año.',
    actividades: ['Turismo cultural', 'Agricultura de quinua y maíz', 'Minería del cobre', 'Gastronomía'],
    lugares: ['Cañón del Colca', 'Monasterio de Santa Catalina', 'Valle del Chili', 'Volcán Misti', 'Reserva de Salinas'],
    gastronomia: ['Rocoto relleno', 'Adobo arequipeño', 'Pastel de papa', 'Queso helado'],
    curiosidad: 'La ciudad de Arequipa fue fundada el 15 de agosto de 1540 y su centro histórico es Patrimonio de la Humanidad.'
  },
  ayacucho: {
    nombre: 'Ayacucho', capital: 'Ayacucho', area: '43,815 km²', poblacion: '668,213',
    region: 'sierra', fundacion: '15 feb 1825',
    descripcion: 'Ciudad de las 33 iglesias y la artesanía de los retablos. Escenario de la independencia del Perú.',
    clima: 'Templado y seco, con temperatura promedio de 17°C.',
    actividades: ['Artesanía de retablos', 'Turismo religioso', 'Agricultura de papa', 'Ganadería'],
    lugares: ['Plaza Mayor de Ayacucho', 'Complejo de Wari', 'Pampa de la Quinua', 'Catedral de Ayacucho'],
    gastronomia: ['Puca picante', 'Cuy chactado', 'Qapchi de ayacucho'],
    curiosidad: 'En la Pampa de la Quinua se libró la batalla final por la independencia del Perú el 9 de diciembre de 1824.'
  },
  cajamarca: {
    nombre: 'Cajamarca', capital: 'Cajamarca', area: '33,318 km²', poblacion: '1,453,711',
    region: 'sierra', fundacion: '11 feb 1855',
    descripcion: 'Conocida por los Baños del Inca y el Cuarto del Rescate. Principal productor de lácteos y oro.',
    clima: 'Templado y frío, con temperatura media de 14°C.',
    actividades: ['Minería de oro', 'Ganadería lechera', 'Agricultura de café', 'Turismo termal'],
    lugares: ['Cuarto del Rescate', 'Baños del Inca', 'Ventanas de Otuzco', 'Cumbemayo'],
    gastronomia: ['Queso cajamarquino', 'Cuy con papas', 'Chicharrón con mote'],
    curiosidad: 'En Cajamarca ocurrió la captura del inca Atahualpa en 1532, un evento clave de la conquista del Perú.'
  },
  callao: {
    nombre: 'Callao', capital: 'Callao', area: '147 km²', poblacion: '1,129,854',
    region: 'costa', fundacion: '20 ago 1836',
    descripcion: 'Principal puerto marítimo del Perú. Alberga la Fortaleza del Real Felipe.',
    clima: 'Templado y húmedo, con neblina en invierno y temperatura media de 19°C.',
    actividades: ['Actividad portuaria', 'Pesca industrial', 'Turismo histórico', 'Gastronomía marina'],
    lugares: ['Fortaleza del Real Felipe', 'La Punta', 'Museo Naval', 'Isla San Lorenzo'],
    gastronomia: ['Ceviche chalaco', 'Parihuela', 'Choritos a la chalaca'],
    curiosidad: 'El Callao es la única provincia constitucional del Perú, con estatus especial desde 1836.'
  },
  cusco: {
    nombre: 'Cusco', capital: 'Cusco', area: '71,987 km²', poblacion: '1,357,075',
    region: 'sierra', fundacion: '9 mar 1825',
    descripcion: 'Antigua capital del Imperio Inca y Patrimonio de la Humanidad. Puerta a Machu Picchu.',
    clima: 'Templado y seco, con temperatura media de 12°C y lluvias de noviembre a marzo.',
    actividades: ['Turismo cultural', 'Arqueología', 'Artesanía textil', 'Agricultura de maíz'],
    lugares: ['Machu Picchu', 'Valle Sagrado', 'Sacsayhuamán', 'Plaza de Armas', 'Qorikancha'],
    gastronomia: ['Cuy al horno', 'Chiriuchu', 'Rocoto relleno', 'Chicha de jora'],
    curiosidad: 'La ciudad del Cusco fue diseñada con forma de puma, el animal sagrado de los incas.'
  },
  huancavelica: {
    nombre: 'Huancavelica', capital: 'Huancavelica', area: '22,131 km²', poblacion: '365,669',
    region: 'sierra', fundacion: '26 abr 1839',
    descripcion: 'Conocida por el complejo minero de Santa Bárbara y su tradición textil.',
    clima: 'Frío y seco, con temperatura promedio de 10°C.',
    actividades: ['Minería de mercurio', 'Artesanía textil', 'Agricultura de papa', 'Turismo termal'],
    lugares: ['Complejo de Santa Bárbara', 'Aguas Termales de San Cristóbal', 'Laguna de Choclococha'],
    gastronomia: ['Pachamanca', 'Cuy colorado', 'Timpusca'],
    curiosidad: 'La mina de Santa Bárbara fue una de las más importantes del virreinato, produciendo mercurio para la extracción de plata.'
  },
  huanuco: {
    nombre: 'Huánuco', capital: 'Huánuco', area: '36,849 km²', poblacion: '760,267',
    region: 'sierra', fundacion: '24 ene 1869',
    descripcion: 'Ubicado en la vertiente oriental de los Andes. Destaca el Parque Nacional Tingo María.',
    clima: 'Templado en la sierra, cálido y húmedo en la selva alta.',
    actividades: ['Agricultura de café y coca', 'Turismo de naturaleza', 'Ganadería', 'Minería'],
    lugares: ['Parque Nacional Tingo María', 'La Bella Durmiente', 'Cueva de las Lechuzas', 'Bosque de Piedras de Huánuco'],
    gastronomia: ['Charquicán', 'Patasca', 'Picante de cuy'],
    curiosidad: 'La Bella Durmiente es una formación rocosa con forma de mujer recostada, emblema de la ciudad.'
  },
  ica: {
    nombre: 'Ica', capital: 'Ica', area: '21,328 km²', poblacion: '850,765',
    region: 'costa', fundacion: '30 jun 1866',
    descripcion: 'Cuna del pisco y las Líneas de Nazca, Patrimonio de la Humanidad.',
    clima: 'Cálido y seco, con temperatura media de 22°C y escasas lluvias.',
    actividades: ['Producción de pisco y vino', 'Turismo arqueológico', 'Agricultura de algodón y espárrago', 'Gastronomía'],
    lugares: ['Líneas de Nazca', 'Huacachina', 'Bodegas de pisco', 'Cachiche', 'Reserva de Paracas'],
    gastronomia: ['Ceviche de lenguado', 'Carapulcra', 'Tejas de Ica', 'Pisco sour'],
    curiosidad: 'Las Líneas de Nazca solo pueden apreciarse completamente desde el aire y fueron declaradas Patrimonio de la Humanidad en 1994.'
  },
  junin: {
    nombre: 'Junín', capital: 'Huancayo', area: '44,197 km²', poblacion: '1,361,467',
    region: 'sierra', fundacion: '13 sep 1825',
    descripcion: 'Corazón del Valle del Mantaro, famoso por su artesanía y el lago Junín.',
    clima: 'Templado y seco, con temperatura promedio de 12°C.',
    actividades: ['Artesanía de mates burilados', 'Agricultura de papa y maíz', 'Ganadería', 'Turismo cultural'],
    lugares: ['Lago Junín', 'Cerro de la Libertad', 'Torre Torre', 'Catedral de Huancayo'],
    gastronomia: ['Papa a la huancaína', 'Cuy colorado', 'Sopa de quinua'],
    curiosidad: 'La papa a la huancaína es uno de los platos más representativos del Perú y lleva el nombre de la región.'
  },
  lalibertad: {
    nombre: 'La Libertad', capital: 'Trujillo', area: '25,500 km²', poblacion: '2,016,771', imagen: 'la-libertad.jpg',
    region: 'costa', fundacion: '12 feb 1821',
    descripcion: 'Cuna de las culturas Moche y Chimú. Alberga Chan Chan, la ciudad de barro más grande del mundo.',
    clima: 'Templado y húmedo, con temperatura media de 20°C.',
    actividades: ['Turismo arqueológico', 'Agricultura de caña y arroz', 'Gastronomía', 'Pesca'],
    lugares: ['Chan Chan', 'Huacas del Sol y la Luna', 'Huanchaco', 'Plaza de Armas de Trujillo', 'Complejo El Brujo'],
    gastronomia: ['Ceviche trujillano', 'Shambar', 'Sopa teóloga', 'Alfajores de Trujillo'],
    curiosidad: 'Chan Chan, capital del reino Chimú, es la ciudad de adobe más grande de América precolombina.'
  },
  lambayeque: {
    nombre: 'Lambayeque', capital: 'Chiclayo', area: '14,231 km²', poblacion: '1,310,785',
    region: 'costa', fundacion: '1 dic 1874',
    descripcion: 'Tierra del Señor de Sipán y la cultura Lambayeque. Famoso por su gastronomía.',
    clima: 'Cálido y seco, con temperatura promedio de 23°C.',
    actividades: ['Turismo arqueológico', 'Agricultura de arroz y caña', 'Gastronomía', 'Artesanía'],
    lugares: ['Museo Tumbas Reales de Sipán', 'Huaca Rajada', 'Bosque de Pomac', 'Plaza de Armas de Chiclayo'],
    gastronomia: ['Ceviche de pato', 'Arroz con pato', 'King Kong de manjarblanco', 'Seco de cabrito'],
    curiosidad: 'El Señor de Sipán fue uno de los hallazgos arqueológicos más importantes del siglo XX en América.'
  },
  lima: {
    nombre: 'Lima', capital: 'Lima', area: '34,949 km²', poblacion: '10,092,454',
    region: 'costa', fundacion: '12 feb 1821',
    descripcion: 'Capital del Perú, centro político, económico y cultural. Ciudad con ricos patrimonio virreinal.',
    clima: 'Templado, húmedo y nublado en invierno, con temperatura media de 19°C.',
    actividades: ['Servicios financieros', 'Gastronomía', 'Turismo cultural', 'Comercio'],
    lugares: ['Centro Histórico de Lima', 'Huaca Pucllana', 'Malecón de Miraflores', 'Parque de las Aguas', 'Museo Larco'],
    gastronomia: ['Ceviche', 'Lomo saltado', 'Anticuchos', 'Suspiro a la limeña'],
    curiosidad: 'Lima es la capital gastronómica de América Latina y alberga varios de los mejores restaurantes del mundo.'
  },
  loreto: {
    nombre: 'Loreto', capital: 'Iquitos', area: '368,852 km²', poblacion: '1,027,559',
    region: 'selva', fundacion: '7 feb 1866',
    descripcion: 'El departamento más extenso del Perú. Iquitos es la mayor ciudad sin acceso por carretera.',
    clima: 'Cálido y húmedo, con temperatura promedio de 28°C y lluvias durante todo el año.',
    actividades: ['Extracción de petróleo', 'Turismo ecológico', 'Pesca', 'Artesanía indígena'],
    lugares: ['Reserva Nacional Pacaya Samiria', 'Río Amazonas', 'Barrio de Belén', 'Mercado de Belén'],
    gastronomia: ['Juane', 'Tacacho con cecina', 'Inchicapi de gallina'],
    curiosidad: 'Iquitos es la ciudad más grande del mundo a la que no se puede llegar por carretera, solo por aire o río.'
  },
  madrededios: {
    nombre: 'Madre de Dios', capital: 'Puerto Maldonado', area: '85,183 km²', poblacion: '173,811', imagen: 'madre-de-dios.jpg',
    region: 'selva', fundacion: '26 dic 1912',
    descripcion: 'Capital de la biodiversidad del Perú. Alberga la Reserva Nacional Tambopata y el Parque del Manu.',
    clima: 'Cálido y húmedo, con temperatura media de 26°C y alta pluviosidad.',
    actividades: ['Turismo ecológico', 'Minería de oro', 'Conservación ambiental', 'Investigación científica'],
    lugares: ['Reserva Nacional Tambopata', 'Parque Nacional del Manu', 'Lago Sandoval', 'Collpa de Guacamayos'],
    gastronomia: ['Patarashca', 'Asado de monte', 'Chapo de plátano'],
    curiosidad: 'Madre de Dios es una de las regiones con mayor biodiversidad del planeta, albergando miles de especies de flora y fauna.'
  },
  moquegua: {
    nombre: 'Moquegua', capital: 'Moquegua', area: '15,734 km²', poblacion: '192,740',
    region: 'costa', fundacion: '2 ene 1857',
    descripcion: 'Tierra del pisco y del vino. Destaca por sus petroglifos y la represa de Pasto Grande.',
    clima: 'Templado y seco, con temperatura promedio de 18°C.',
    actividades: ['Producción vitivinícola', 'Minería del cobre', 'Agricultura de olivo', 'Turismo cultural'],
    lugares: ['Petroglifos de Torata', 'Represa de Pasto Grande', 'Plaza de Armas de Moquegua', 'Catedral de Moquegua'],
    gastronomia: ['Cuy chactado', 'Pastel de choclo', 'Vino de Moquegua'],
    curiosidad: 'Moquegua produce uno de los mejores piscos del Perú y su tradición vitivinícola data de la época colonial.'
  },
  pasco: {
    nombre: 'Pasco', capital: 'Cerro de Pasco', area: '25,320 km²', poblacion: '271,904',
    region: 'sierra', fundacion: '27 nov 1944',
    descripcion: 'Una de las ciudades más altas del mundo. Centro minero por excelencia.',
    clima: 'Frío y seco, con temperatura promedio de 6°C y heladas frecuentes.',
    actividades: ['Minería de zinc y plomo', 'Ganadería de alpacas', 'Agricultura de papa', 'Turismo de aventura'],
    lugares: ['Cerro de Pasco', 'Laguna de Huascacocha', 'Santuario Nacional de Huayllay', 'Bosque de Piedras de Huayllay'],
    gastronomia: ['Pachamanca', 'Caldo de cabeza', 'Cuy colorado'],
    curiosidad: 'El Bosque de Piedras de Huayllay es una formación geológica con rocas de formas caprichosas a más de 4,000 m de altitud.'
  },
  piura: {
    nombre: 'Piura', capital: 'Piura', area: '35,892 km²', poblacion: '2,047,954',
    region: 'costa', fundacion: '30 mar 1861',
    descripcion: 'Cuna del tondero y playas como Máncora. Tierra del limón y el algarrobo.',
    clima: 'Cálido y seco, con temperatura media de 25°C e influencia del Fenómeno del Niño.',
    actividades: ['Agricultura de limón y mango', 'Turismo de playa', 'Pesca', 'Petróleo'],
    lugares: ['Máncora', 'Colán', 'Catacaos', 'Plaza de Armas de Piura', 'Bosque Seco Ecuatorial'],
    gastronomia: ['Ceviche norteño', 'Seco de chabelo', 'Malarrabia', 'Algarrobina'],
    curiosidad: 'Piura fue la primera ciudad fundada por los españoles en el Perú, el 15 de julio de 1532.'
  },
  puno: {
    nombre: 'Puno', capital: 'Puno', area: '71,999 km²', poblacion: '1,237,997',
    region: 'sierra', fundacion: '26 abr 1822',
    descripcion: 'Capital folclórica del Perú, a orillas del lago Titicaca, el lago navegable más alto del mundo.',
    clima: 'Frío y seco, con temperatura promedio de 8°C y heladas en invierno.',
    actividades: ['Turismo cultural', 'Artesanía textil', 'Ganadería de camélidos', 'Agricultura de quinua'],
    lugares: ['Lago Titicaca', 'Islas Flotantes de los Uros', 'Isla Taquile', 'Sillustani', 'Catedral de Puno'],
    gastronomia: ['Pesque de quinua', 'Trucha frita', 'Chairo puno', 'Cancha serrana'],
    curiosidad: 'La Festividad de la Virgen de la Candelaria en Puno es una de las celebraciones más grandes del Perú, declarada Patrimonio Cultural de la Humanidad.'
  },
  sanmartin: {
    nombre: 'San Martín', capital: 'Moyobamba', area: '51,253 km²', poblacion: '913,521', imagen: 'san-martin.jpg',
    region: 'selva', fundacion: '4 sep 1906',
    descripcion: 'Ciudad de las orquídeas. Alberga el Parque Nacional del Río Abiseo, Patrimonio Mixto.',
    clima: 'Cálido y húmedo, con temperatura media de 26°C y abundantes lluvias.',
    actividades: ['Agricultura de café y cacao', 'Turismo ecológico', 'Conservación forestal', 'Artesanía'],
    lugares: ['Parque Nacional Río Abiseo', 'Catarata de Ahuashiyacu', 'Baños Termales de San Mateo', 'Plaza de Armas de Moyobamba'],
    gastronomia: ['Juanes de gallina', 'Tacacho con cecina', 'Chapo de plátano'],
    curiosidad: 'El Parque Nacional del Río Abiseo es Patrimonio Mixto (natural y cultural) de la Humanidad, albergando especies únicas.'
  },
  tacna: {
    nombre: 'Tacna', capital: 'Tacna', area: '16,076 km²', poblacion: '370,974',
    region: 'costa', fundacion: '25 jun 1875',
    descripcion: 'La «Ciudad Heroica» por su papel en la Guerra del Pacífico. Principal punto fronterizo con Chile.',
    clima: 'Templado y seco, con temperatura media de 18°C y cielo despejado la mayor parte del año.',
    actividades: ['Comercio fronterizo', 'Minería del cobre', 'Agricultura de olivo', 'Turismo histórico'],
    lugares: ['Arco Parabólico', 'Catedral de Tacna', 'Paseo Cívico', 'Petroglifos de Miraflores', 'Valle de los Volcanes'],
    gastronomia: ['Ceviche tacneño', 'Picante a la tacneña', 'Choclo con queso'],
    curiosidad: 'Tacna fue devuelta al Perú en 1929 tras un plebiscito y es conocida como la Ciudad Heroica por su resistencia durante la ocupación chilena.'
  },
  tumbes: {
    nombre: 'Tumbes', capital: 'Tumbes', area: '4,669 km²', poblacion: '251,521',
    region: 'costa', fundacion: '25 nov 1942',
    descripcion: 'El departamento más pequeño del Perú. Puerta al norte, famoso por sus manglares y playas.',
    clima: 'Cálido y húmedo, con temperatura media de 27°C y clima tropical durante todo el año.',
    actividades: ['Turismo de playa', 'Pesca artesanal', 'Agricultura de banano y arroz', 'Conservación de manglares'],
    lugares: ['Manglares de Tumbes', 'Playa de Punta Sal', 'Cerros de Amotape', 'Plaza de Armas de Tumbes'],
    gastronomia: ['Ceviche de conchas negras', 'Seco de cabrito', 'Cangrejo reventado'],
    curiosidad: 'El Parque Nacional Cerros de Amotape protege uno de los últimos bosques secos ecuatoriales del Pacífico.'
  },
  ucayali: {
    nombre: 'Ucayali', capital: 'Pucallpa', area: '102,411 km²', poblacion: '589,873',
    region: 'selva', fundacion: '18 jun 1980',
    descripcion: 'Corazón de la Amazonía central. Conocido por su riqueza étnica y su biodiversidad.',
    clima: 'Cálido y muy húmedo, con temperatura promedio de 27°C y lluvias abundantes.',
    actividades: ['Extracción de madera', 'Turismo ecológico', 'Pesca', 'Artesanía nativa'],
    lugares: ['Reserva Nacional de Paracas', 'Lago Yarinacocha', 'Comunidad Shipiba', 'Catedral de Pucallpa'],
    gastronomia: ['Patarashca', 'Juane de pescado', 'Masato de plátano'],
    curiosidad: 'Ucayali alberga comunidades de la etnia shipibo-conibo, reconocidas mundialmente por su arte geométrico.'
  }
};

const regionColors = {
  costa: { base: '#FADFAD', hover: '#F5C542', select: '#F1C40F' },
  sierra: { base: '#D4A574', hover: '#A0522D', select: '#8B4513' },
  selva: { base: '#A9DFBF', hover: '#52BE80', select: '#27AE60' }
};
const regionColorsDark = {
  costa: { base: '#7D6608', hover: '#B7950B', select: '#F1C40F' },
  sierra: { base: '#5D3A1A', hover: '#7B4F2A', select: '#A0522D' },
  selva: { base: '#1D6B3C', hover: '#27AE60', select: '#52BE80' }
};

const regionLabels = { costa: 'Costa', sierra: 'Sierra', selva: 'Selva' };
const regionIcons = { costa: 'fa-water', sierra: 'fa-mountain', selva: 'fa-tree' };

let paths = [];
let activePath = null;
let currentTheme = document.documentElement.getAttribute('data-theme');
const tooltip = document.getElementById('mapaTooltip');
const mapaInfo = document.getElementById('mapaInfo');
const mapaSvg = document.getElementById('mapaSVG');
const legendItems = document.querySelectorAll('.legend-item');

function getColors() {
  return currentTheme === 'dark' ? regionColorsDark : regionColors;
}

function applyFill(path, colorSet) {
  path.style.fill = colorSet.base;
}

function resetPathStyle(path) {
  const deptKey = getDeptKey(path.getAttribute('data-name'));
  const dept = departamentos[deptKey];
  if (!dept) return;
  const cset = getColors()[dept.region];
  path.style.fill = cset.base;
  path.style.stroke = '#ffffff';
  path.style.strokeWidth = '1.5';
  path.style.removeProperty('filter');
}

function highlightPath(path) {
  const deptKey = getDeptKey(path.getAttribute('data-name'));
  const dept = departamentos[deptKey];
  if (!dept) return;
  path.style.fill = getColors()[dept.region].hover;
  path.style.filter = 'brightness(1.08) drop-shadow(0 0 8px rgba(0,0,0,0.25))';
}

function selectPath(path) {
  const deptKey = getDeptKey(path.getAttribute('data-name'));
  const dept = departamentos[deptKey];
  if (!dept) return;
  const cset = getColors()[dept.region];
  path.style.fill = cset.select;
  path.style.stroke = '#ffffff';
  path.style.strokeWidth = '2.5';
  path.style.filter = 'brightness(1.1) drop-shadow(0 0 10px rgba(0,0,0,0.4))';
}

const nameToKey = {};
for (const [key, dept] of Object.entries(departamentos)) {
  nameToKey[dept.nombre.toLowerCase()] = key;
}
function getDeptKey(name) {
  return nameToKey[name ? name.toLowerCase() : ''] || null;
}

function showTooltip(e, nombre) {
  tooltip.textContent = nombre;
  tooltip.style.opacity = '1';
  const rect = mapaSvg.getBoundingClientRect();
  let x = e.clientX - rect.left + 12;
  let y = e.clientY - rect.top - 10;
  if (x + tooltip.offsetWidth > rect.width - 10) {
    x = e.clientX - rect.left - tooltip.offsetWidth - 12;
  }
  if (y < 0) y = e.clientY - rect.top + 20;
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() {
  tooltip.style.opacity = '0';
}

function mostrarInfoDepartamento(deptKey) {
  const d = departamentos[deptKey];
  if (!d) return;
  const cset = getColors()[d.region];
  const regionIcon = regionIcons[d.region];
  const imgSrc = 'img/' + (d.imagen || deptKey + '.jpg');

  const sec = function (t, icon, items) {
    if (!items || !items.length) return '';
    return '<div class="dept-section"><h4 class="dept-section-title"><i class="fas ' + icon + '"></i> ' + t + '</h4><div class="dept-tags">' +
      items.map(function (i) { return '<span class="dept-tag">' + i + '</span>'; }).join('') +
      '</div></div>';
  };

  function line(icon, label, val) {
    return '<div class="dept-line"><i class="fas ' + icon + '"></i><strong>' + label + ':</strong> ' + val + '</div>';
  }

  function imgStyle() {
    return 'background:linear-gradient(135deg,' + cset.base + ',' + cset.select + '), url(' + imgSrc + ');background-size:cover;background-blend-mode:overlay;background-position:center;';
  }

  mapaInfo.innerHTML =
    '<div class="mapa-info-content">' +
      '<div class="dept-img" style="' + imgStyle() + '">' +
        '<div class="dept-img-overlay"><span>' + d.nombre + '</span></div>' +
      '</div>' +
      '<div class="dept-header">' +
        '<h3>' + d.nombre + '</h3>' +
        '<span class="dept-badge" style="background:' + cset.base + ';color:' + (currentTheme === 'dark' ? '#fff' : '#333') + ';">' +
          '<i class="fas ' + regionIcon + '"></i> ' + regionLabels[d.region] +
        '</span>' +
      '</div>' +
      '<p class="dept-descripcion">' + d.descripcion + '</p>' +
      sec('Clima', 'fa-sun', [d.clima]) +
      sec('Actividades Económicas', 'fa-industry', d.actividades) +
      sec('Lugares Turísticos', 'fa-camera', d.lugares) +
      sec('Gastronomía', 'fa-utensils', d.gastronomia) +
      '<div class="dept-section dept-curiosidad"><h4 class="dept-section-title"><i class="fas fa-lightbulb"></i> Dato Curioso</h4><p>' + d.curiosidad + '</p></div>' +
      '<div class="dept-data-row">' +
        line('fa-city', 'Capital', d.capital) +
        line('fa-expand-arrows-alt', 'Área', d.area) +
        line('fa-users', 'Población', d.poblacion) +
      '</div>' +
    '</div>';
  mapaInfo.style.animation = 'none';
  requestAnimationFrame(function () { mapaInfo.style.animation = 'mapaFadeIn 0.3s ease'; });
}

function showPlaceholder() {
  mapaInfo.innerHTML =
    '<div class="mapa-info-placeholder">' +
      '<i class="fas fa-hand-pointer"></i>' +
      '<p>Selecciona un departamento en el mapa para descubrir toda su información</p>' +
    '</div>';
}

function updateLegend(region) {
  legendItems.forEach(function (el) {
    el.classList.toggle('legend-active', el.dataset.region === region);
  });
}

function setupMap(svg) {
  if (!svg) return;
  paths = svg.querySelectorAll('[data-name]');
  if (!paths.length) return;

  paths.forEach(function (path) {
    const deptKey = getDeptKey(path.getAttribute('data-name'));
    const dept = departamentos[deptKey];
    if (!dept) return;
    const cset = getColors()[dept.region];
    applyFill(path, cset);

    path.setAttribute('tabindex', '0');
    path.setAttribute('role', 'button');
    path.setAttribute('aria-label', dept.nombre);

    path.addEventListener('mouseenter', function (e) {
      if (this !== activePath) highlightPath(this);
      showTooltip(e, dept.nombre);
    });

    path.addEventListener('mousemove', function (e) {
      showTooltip(e, dept.nombre);
    });

    path.addEventListener('mouseleave', function () {
      if (this !== activePath) resetPathStyle(this);
      hideTooltip();
    });

    path.addEventListener('click', function () {
      if (activePath && activePath !== this) {
        resetPathStyle(activePath);
      }
      if (activePath === this) {
        resetPathStyle(this);
        activePath = null;
        showPlaceholder();
        updateLegend('');
        return;
      }
      selectPath(this);
      activePath = this;
      mostrarInfoDepartamento(deptKey);
      updateLegend(dept.region);
    });

    path.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    path.addEventListener('focus', function () {
      if (this !== activePath) highlightPath(this);
    });

    path.addEventListener('blur', function () {
      if (this !== activePath) resetPathStyle(this);
    });
  });
}

function initMap() {
  const svg = document.querySelector('#mapaSVG svg');
  if (svg) setupMap(svg);
}

function updateThemeColors() {
  currentTheme = document.documentElement.getAttribute('data-theme');
  if (!paths.length) return;
  paths.forEach(function (path) {
    if (path === activePath) {
      selectPath(path);
    } else {
      resetPathStyle(path);
    }
  });
  if (activePath) {
    const deptKey = getDeptKey(activePath.getAttribute('data-name'));
    if (deptKey) mostrarInfoDepartamento(deptKey);
  }
}

var observer = new MutationObserver(function () { updateThemeColors(); });
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

document.addEventListener('DOMContentLoaded', initMap);
