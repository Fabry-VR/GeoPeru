document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  initScroll();
  initModals();
  initLightbox();
  initCounters();
  initAnimations();
  initBackToTop();
  initAutoYear();
});

function initMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initModals() {
  const modal = document.getElementById('modalRegion');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const btnVolverArriba = document.getElementById('btnVolverArriba');

  const regionesData = {
    costa: {
      titulo: 'Costa Peruana',
      descripcion: 'La región costera del Perú es una franja estrecha que se extiende a lo largo de aproximadamente 3,080 km de litoral. A pesar de ser una zona mayormente desértica, cuenta con valles fértiles formados por ríos que bajan de los Andes, lo que permite una agricultura muy productiva.',
      detalles: [
        'Extensión: Aproximadamente el 11% del territorio nacional',
        'Clima: Variable de norte a sur, desde tropical hasta árido',
        'Principales valles: Chicama, Virú, Chillón, Rímac, Majes',
        'Corriente de Humboldt: Influye en la riqueza marina',
        'Reservas: Paracas, Lachay, Pantanos de Villa',
        'Principales puertos: Callao, Paita, Matarani, Ilo',
        'Actividad pesquera: Una de las más importantes del mundo',
        'Desastres naturales: Sismos frecuentes, tsunamis, fenómeno El Niño, huaycos'
      ]
    },
    sierra: {
      titulo: 'Sierra Peruana',
      descripcion: 'La sierra peruana está conformada por la cordillera de los Andes, que alcanza su punto más alto en el nevado Huascarán (6,768 m s. n. m.). Esta región presenta una compleja geografía con múltiples pisos ecológicos que van desde valles templados hasta nieves perpetuas.',
      detalles: [
        'Altitud promedio: Entre 2,500 y 4,500 m s. n. m.',
        'Cordilleras: Blanca, Negra, Huayhuash, Vilcanota, Carabaya',
        'Nevados principales: Huascarán, Yerupajá, Coropuna',
        'Cañones: Colca (uno de los más profundos del mundo)',
        'Valles interandinos: Mantaro, Urubamba, Vilcanota',
        'Lagunas: Parón, Pelagatos, Llanganuco',
        'Agricultura: Papa, maíz, quinua, kiwicha, maca',
        'Desastres naturales: Heladas, granizadas, aluviones, sequías'
      ]
    },
    selva: {
      titulo: 'Selva Amazónica',
      descripcion: 'La Amazonía peruana es una de las regiones más biodiversas del planeta. Se divide en selva alta (Rupa Rupa) y selva baja (Omagua). Alberga innumerables especies de flora y fauna, muchas de ellas endémicas. Los ríos amazónicos son la principal vía de comunicación.',
      detalles: [
        'Extensión: Más del 60% del territorio nacional',
        'Ríos principales: Amazonas, Ucayali, Marañón, Napo',
        'Parques nacionales: Manu, Pacaya Samiria, Tambopata',
        'Selva alta (800 - 2,500 m): Ceja de selva con niebla',
        'Selva baja (80 - 800 m): Llanura amazónica inundable',
        'Comunidades nativas: Asháninkas, Shipibos, Aguarunas',
        'Producción: Café, cacao, palma aceitera, madera',
        'Desastres naturales: Inundaciones, desbordes de ríos, deslizamientos, tormentas eléctricas'
      ]
    }
  };

  function abrirModal(region) {
    const data = regionesData[region];
    if (!data) return;

    let detallesHTML = '';
    data.detalles.forEach(item => {
      detallesHTML += `<li><i class="fas fa-check-circle"></i> ${item}</li>`;
    });

    modalBody.innerHTML = `
      <h2>${data.titulo}</h2>
      <p>${data.descripcion}</p>
      <ul>${detallesHTML}</ul>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    btnVolverArriba.style.zIndex = '1';
  }

  function cerrarModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    btnVolverArriba.style.zIndex = '999';
  }

  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      abrirModal(btn.dataset.modal);
    });
  });

  modalClose.addEventListener('click', cerrarModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      cerrarModal();
    }
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const btnVolverArriba = document.getElementById('btnVolverArriba');

  document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.dataset.title;
      lightboxImg.src = img.src;
      lightboxImg.alt = title || img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      btnVolverArriba.style.zIndex = '1';
    });
  });

  function cerrarLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    btnVolverArriba.style.zIndex = '999';
  }

  lightboxClose.addEventListener('click', cerrarLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      cerrarLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      cerrarLightbox();
    }
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.dato-numero');

  function animateCounter(counter) {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    function update() {
      step++;
      current = Math.min(current + increment, target);
      if (target >= 1000) {
        counter.textContent = Math.floor(current).toLocaleString('es-PE');
      } else {
        counter.textContent = Math.floor(current);
      }
      if (step < steps) {
        requestAnimationFrame(update);
      } else {
        if (target >= 1000) {
          counter.textContent = target.toLocaleString('es-PE');
        } else {
          counter.textContent = target;
        }
      }
    }

    update();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function initAnimations() {
  const animados = document.querySelectorAll('[data-animate], [data-animate-left], [data-animate-right], [data-animate-scale]');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animados.forEach(el => observer.observe(el));
  timelineItems.forEach(el => observer.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById('btnVolverArriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initAutoYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('i');
  const html = document.documentElement;

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else {
    setTheme('light');
  }

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
