# Tareas de Implementación — Spec 001: Landing Page VeKtra Automation

- [x] **T1. Tokens de diseño Dark Tech y estilos globales.** RF-5, RF-10
  - Configurar en `css/styles.css` todas las CSS custom properties de color, fuentes, efectos de cristal y reset para la estética oscura.
  - Hecho cuando: El fondo `#090d16` y los estilos base de tipografía se apliquen correctamente a la página sin desbordamientos.

- [x] **T2. Cabecera flotante y navegación responsiva.** RF-1, RF-2, RF-3, RF-4, RF-4b
  - Maquetar la barra superior fija/flotante con logo, enlaces, selector de tema día/noche y botón CTA; implementar el menú móvil hamburguesa con accesibilidad en `js/navigation.js`.
  - Hecho cuando: La barra quede sticky con efecto desenfoque, el menú abra/cierre en 375px, el selector de tema cambie entre modo noche y día con persistencia y todos los enlaces ancla tengan scroll suave.

- [x] **T3. Sección Hero con impacto visual y prueba social.** RF-5, RF-6, RF-7
  - Maquetar el Hero con fondo radial degradado, badge animado ("⚡ Automatización de Procesos & Desarrollo Web"), titular de alto impacto, doble CTA y cluster de avatares con 5 estrellas.
  - Hecho cuando: La sección Hero coincida con la composición visual de PulpSense y los dos botones dirijan a sus secciones destino.

- [x] **T4. Carrusel continuo de tecnologías y alianzas (Marquee).** RF-8, RF-9
  - Implementar en `css/animations.css` y `index.html` la cinta horizontal continua de logos (n8n, Make, OpenAI, Claude, Supabase, Airtable, etc.) en bucle infinito.
  - Hecho cuando: La cinta se mueva suavemente de forma continua y se pause automáticamente al pasar el cursor por encima.

- [x] **T5. Bento Grid protagonista: Automatización y Desarrollo Web.** RF-10, RF-11
  - Construir la cuadrícula asimétrica de servicios destacando en grande *Automatización de Procesos con IA* y *Desarrollo de Páginas Web & Landing Pages*, más tarjeta de consultoría.
  - Hecho cuando: El Bento Grid se organice en mosaico en escritorio, se apile limpiamente en móvil y las tarjetas tengan efecto hover interactivo.

- [x] **T6. Sección de Presencia Web y Casos de Éxito cuantitativos.** RF-12, RF-13
  - Maquetar el bloque de arquitectura web / rendimiento y la cuadrícula de métricas de impacto (+400h ahorradas, 67% menos carga manual, $600K procesados).
  - Hecho cuando: Las tarjetas de métricas resalten las cifras en grande y la sección de presencia web explique claramente el valor agregado.

- [x] **T7. Metodología en 4 Pasos (Cómo Trabajamos).** RF-14
  - Maquetar la secuencia cronológica numerada (Estrategia $\rightarrow$ Plan $\rightarrow$ Implementación $\rightarrow$ Escalamiento) con conectores visuales y descripción.
  - Hecho cuando: Los 4 pasos se visualicen en secuencia clara en escritorio y adaptados verticalmente en pantallas móviles.

- [x] **T7b. Sección IA SEO (Google & ChatGPT) con Mockup Interactivo.**
  - Incorporar la sección de visibilidad y posicionamiento con lienzo radar SVG (`.visibility-scene`), tarjeta flotante de búsqueda local, pin central palpitante, tarjeta de descubrimiento por IA y 4 pilares de posicionamiento.
  - Hecho cuando: La sección `#ai-seo` esté integrada en la navegación fija, responda fluidamente en móvil y escritorio, y replique con fidelidad el diseño de referencia.

- [ ] **T8. Acordeón interactivo de Preguntas Frecuentes (FAQ).** RF-15, RF-16, RF-17
  - Maquetar las preguntas frecuentes adaptadas a VeKtra y programar en `js/main.js` el despliegue/cierre suave con rotación de chevrons.
  - Hecho cuando: Al hacer clic en una pregunta se expanda suavemente su respuesta y al hacer clic de nuevo o en otra se contraiga sin saltos bruscos.

- [ ] **T9. Muro de Testimonios, Banner CTA final y Footer.** RF-5, RF-18, RF-19
  - Maquetar la cuadrícula de testimonios de clientes, la tarjeta destacada de conversión para agendar sesión y el pie de página con año dinámico.
  - Hecho cuando: La sección de testimonios muestre las valoraciones, el CTA final destaque con iluminación y el footer muestre el año actual mediante JS.

- [ ] **T10. Validación y optimización integral mobile-first.** RNF-1, RNF-2, RNF-3, RNF-4, RNF-5
  - Probar la página completa abriendo `index.html` directamente en navegador (modo `file://`), verificar en resolución móvil (375px) y escritorio (1280px+), y comprobar que no existan errores en consola.
  - Hecho cuando: La página funcione al 100% sin dependencias externas, se visualice perfecta en todos los dispositivos y cumpla todos los criterios de la spec.

